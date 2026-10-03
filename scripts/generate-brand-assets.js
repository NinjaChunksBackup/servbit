const fs = require('fs');
const path = require('path');

const sharp = require('sharp');

const ROOT = path.resolve(__dirname, '..');
const OUT = path.join(ROOT, 'public', 'brand');

// ── Brand tokens ───────────────────────────────────────────────────────────
// ink/paper are the single-colour wordmark inks; green is the Servbit accent
// taken from src/icons/home/servbit-mark.svg; slate is the icon chrome colour.
const INK = '#000000';
const PAPER = '#FFFFFF';
const GREEN = '#00E599';
const SLATE = '#131920';

// ── Sources of truth ───────────────────────────────────────────────────────
// The wordmark (glyph + "Servbit" lettering) lives in src/images. The bare
// glyph used for the logomark is the same artwork the favicon uses, in its
// original Figma coordinate space.
const WORDMARK = {
  ink: path.join(ROOT, 'src', 'images', 'logo-light.svg'), // black artwork
  paper: path.join(ROOT, 'src', 'images', 'logo-dark.svg'), // white artwork
};
const GLYPH = path.join(ROOT, 'public', 'favicon', 'favicon.svg');

const WORDMARK_VIEWBOX = { x: 0, y: 0, w: 102, h: 28 };
const GLYPH_VIEWBOX = { x: 4980, y: 4560, w: 6036.13, h: 6880 };

// 10% clear space on every side, matching the safe-area convention the
// previous asset set used.
const SAFE_AREA_RATIO = 0.1;

// PNG raster sizes, matched to the previous asset set so the download
// buttons keep producing equivalently crisp files.
const LOGO_PNG = { plain: [471, 135], safe: [384, 132] };
const LOGOMARK_PNG = { plain: [192, 192], safe: [192, 192] };

function readInner(file) {
  const svg = fs.readFileSync(file, 'utf8');
  const match = svg.match(/<svg[^>]*>([\s\S]*)<\/svg>/);
  if (!match) throw new Error(`No <svg> root found in ${file}`);
  // Drop the CSS custom-property block the favicon uses; we set fill directly.
  return match[1].replace(/<style[\s\S]*?<\/style>/g, '').trim();
}

function paint(markup, color) {
  if (/fill="#/i.test(markup)) {
    return markup.replace(/fill="#[0-9A-Fa-f]{3,8}"/g, `fill="${color}"`);
  }
  // No explicit fills (the glyph inherits from CSS) -> wrap it.
  return `<g fill="${color}">\n    ${markup}\n  </g>`;
}

function expand({ x, y, w, h }, ratio) {
  const dx = w * ratio;
  const dy = h * ratio;
  return {
    x: +(x - dx).toFixed(3),
    y: +(y - dy).toFixed(3),
    w: +(w + dx * 2).toFixed(3),
    h: +(h + dy * 2).toFixed(3),
  };
}

function buildSvg(markup, viewBox, width, height) {
  const { x, y, w, h } = viewBox;
  return `<svg width="${width}" height="${height}" viewBox="${x} ${y} ${w} ${h}" fill="none" xmlns="http://www.w3.org/2000/svg">
  ${markup}
</svg>
`;
}

// variant -> colour. "color" keeps the brand accent on the logomark; "mono"
// collapses to a single ink so the mark can sit on arbitrary photography.
const LOGO_VARIANTS = {
  'light-color': INK,
  'light-mono': INK,
  'dark-color': PAPER,
  'dark-mono': PAPER,
};

const LOGOMARK_VARIANTS = {
  'light-color': GREEN,
  'dark-color': GREEN,
  'light-mono': SLATE,
  'dark-mono': PAPER,
};

async function emit(name, svg, pngSize) {
  const svgPath = path.join(OUT, `${name}.svg`);
  fs.writeFileSync(svgPath, svg, 'utf8');

  const pngPath = path.join(OUT, `${name}.png`);
  const [w, h] = pngSize;
  await sharp(Buffer.from(svg), { density: 1200 })
    .resize(w, h, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png({ compressionLevel: 9 })
    .toFile(pngPath);

  return { svgPath, pngPath };
}

(async () => {
  fs.mkdirSync(OUT, { recursive: true });

  const wordmarkInk = paint(readInner(WORDMARK.ink), INK);
  const glyph = paint(readInner(GLYPH), GREEN);

  const written = [];

  for (const [variant, color] of Object.entries(LOGO_VARIANTS)) {
    const markup = paint(readInner(color === INK ? WORDMARK.ink : WORDMARK.paper), color);
    const plain = buildSvg(markup, WORDMARK_VIEWBOX, 157, 45);
    const safe = buildSvg(markup, expand(WORDMARK_VIEWBOX, SAFE_AREA_RATIO), 157, 45);
    written.push(await emit(`servbit-logo-${variant}`, plain, LOGO_PNG.plain));
    written.push(await emit(`servbit-logo-${variant}-safe-area`, safe, LOGO_PNG.safe));
  }

  for (const [variant, color] of Object.entries(LOGOMARK_VARIANTS)) {
    const markup = paint(glyph.replace(/fill="#[0-9A-Fa-f]{3,8}"/g, `fill="${color}"`), color);
    const plain = buildSvg(markup, GLYPH_VIEWBOX, 64, 64);
    const safe = buildSvg(markup, expand(GLYPH_VIEWBOX, SAFE_AREA_RATIO), 64, 64);
    written.push(await emit(`servbit-logomark-${variant}`, plain, LOGOMARK_PNG.plain));
    written.push(await emit(`servbit-logomark-${variant}-safe-area`, safe, LOGOMARK_PNG.safe));
  }

  // Keep the wordmarkInk reference meaningful for the linter-free build above.
  void wordmarkInk;

  // ── Inkeep chat-widget wordmarks ──────────────────────────────────────────
  // public/inkeep/css/base.css paints the tagline at 64x18 with
  // background-size: cover, so the viewBox is trimmed to that exact aspect to
  // avoid the browser cropping the lockup.
  const inkDir = path.join(ROOT, 'public', 'inkeep', 'images');
  fs.mkdirSync(inkDir, { recursive: true });
  const boxW = 64;
  const boxH = 18;
  const cropW = +(WORDMARK_VIEWBOX.h * (boxW / boxH)).toFixed(3);
  const cropX = +((WORDMARK_VIEWBOX.w - cropW) / 2).toFixed(3);
  const inkeepViewBox = { x: cropX, y: 0, w: cropW, h: WORDMARK_VIEWBOX.h };

  for (const [file, source, color] of [
    ['servbit-logo.svg', WORDMARK.ink, INK],
    ['servbit-white-logo.svg', WORDMARK.paper, PAPER],
  ]) {
    const markup = paint(readInner(source), color);
    fs.writeFileSync(path.join(inkDir, file), buildSvg(markup, inkeepViewBox, boxW, boxH), 'utf8');
    console.log(`  public/inkeep/images/${file}`);
  }

  const manifest = written
    .map(({ svgPath, pngPath }) => `  ${path.basename(svgPath)}\n  ${path.basename(pngPath)}`)
    .join('\n');
  console.log(`Wrote ${written.length} brand assets to public/brand:\n${manifest}`);
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
