const path = require('path');

const sharp = require('sharp');

const width = 660;
const height = 504;

function hash(x, y) {
  let h = (x * 374761393 + y * 668265263) ^ 0x5bf03635;
  h = (h ^ (h >> 13)) * 1274126177;
  return ((h ^ (h >> 16)) >>> 0) / 4294967296;
}

const CARDS_CONFIG = [
  {
    filename: 'deploy-vercel.jpg',
    title: 'cloud.servbit.com',
    graphic: `
      <!-- Isometric Cloud Server Cube -->
      <g transform="translate(330, 290)">
        <polygon points="0,-100 110,-45 0,10 -110,-45" fill="url(#facet1)" stroke="#ffffff" stroke-width="2"/>
        <polygon points="-110,-45 0,10 0,130 -110,75" fill="url(#facet2)" stroke="#ffffff" stroke-width="2"/>
        <polygon points="0,10 110,-45 110,75 0,130" fill="url(#facet3)" stroke="#ffffff" stroke-width="2"/>
        <line x1="0" y1="-63" x2="55" y2="-35" stroke="#ffffff" stroke-width="1.5" stroke-dasharray="4,4"/>
        <line x1="-55" y1="-35" x2="0" y2="-7" stroke="#ffffff" stroke-width="1.5" stroke-dasharray="4,4"/>
        <circle cx="0" cy="70" r="16" fill="#ffffff" opacity="0.8"/>
        <circle cx="55" cy="42" r="12" fill="#ffffff" opacity="0.6"/>
        <circle cx="-55" cy="42" r="12" fill="#ffffff" opacity="0.6"/>
      </g>
    `,
  },
  {
    filename: 'deploy-netlify-com.jpg',
    title: 'web.servbit.com',
    graphic: `
      <!-- Responsive Web Browser Frame with Grid -->
      <g transform="translate(330, 290)">
        <rect x="-140" y="-95" width="280" height="190" rx="10" fill="url(#facet2)" stroke="#ffffff" stroke-width="2"/>
        <rect x="-140" y="-95" width="280" height="32" rx="10" fill="url(#facet1)" stroke="#ffffff" stroke-width="1.5"/>
        <circle cx="-115" cy="-79" r="5" fill="#ffffff"/>
        <circle cx="-95" cy="-79" r="5" fill="#ffffff"/>
        <circle cx="-75" cy="-79" r="5" fill="#ffffff"/>
        <!-- Window Content columns -->
        <rect x="-120" y="-45" width="60" height="120" rx="4" fill="url(#facet3)" stroke="#ffffff" stroke-width="1.5"/>
        <rect x="-45" y="-45" width="165" height="55" rx="4" fill="url(#facet1)" stroke="#ffffff" stroke-width="1.5"/>
        <rect x="-45" y="20" width="78" height="55" rx="4" fill="url(#facet3)" stroke="#ffffff" stroke-width="1.5"/>
        <rect x="42" y="20" width="78" height="55" rx="4" fill="url(#facet1)" stroke="#ffffff" stroke-width="1.5"/>
      </g>
    `,
  },
  {
    filename: 'deploy-replit-com.jpg',
    title: 'app.servbit.com',
    graphic: `
      <!-- Terminal Chevron Prompt in 3D frame -->
      <g transform="translate(330, 285)">
        <polygon points="-120,-80 120,-80 140,80 -100,80" fill="url(#facet2)" stroke="#ffffff" stroke-width="2"/>
        <!-- Terminal Chevron >_ -->
        <polyline points="-50,-35 0,0 -50,35" fill="none" stroke="#ffffff" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"/>
        <rect x="25" y="22" width="45" height="14" rx="3" fill="#ffffff"/>
        <circle cx="95" cy="-55" r="8" fill="#ffffff" opacity="0.7"/>
      </g>
    `,
  },
  {
    filename: 'deploy-retool-com.jpg',
    title: 'automation.servbit.com',
    graphic: `
      <!-- Interlocking Automation Gears / Triggers -->
      <g transform="translate(330, 285)">
        <!-- Big Gear -->
        <circle cx="-35" cy="-20" r="75" fill="url(#facet1)" stroke="#ffffff" stroke-width="3"/>
        <circle cx="-35" cy="-20" r="28" fill="#0c0e12" stroke="#ffffff" stroke-width="3"/>
        <line x1="-35" y1="-105" x2="-35" y2="65" stroke="#ffffff" stroke-width="8" stroke-dasharray="16,140"/>
        <line x1="-120" y1="-20" x2="50" y2="-20" stroke="#ffffff" stroke-width="8" stroke-dasharray="16,140"/>
        <!-- Small Meshing Gear -->
        <circle cx="65" cy="45" r="50" fill="url(#facet3)" stroke="#ffffff" stroke-width="2.5"/>
        <circle cx="65" cy="45" r="18" fill="#0c0e12" stroke="#ffffff" stroke-width="2.5"/>
        <line x1="65" y1="-15" x2="65" y2="105" stroke="#ffffff" stroke-width="6" stroke-dasharray="12,90"/>
        <line x1="5" y1="45" x2="125" y2="45" stroke="#ffffff" stroke-width="6" stroke-dasharray="12,90"/>
      </g>
    `,
  },
  {
    filename: 'deploy-riff-ai.jpg',
    title: 'ai.servbit.com',
    graphic: `
      <!-- Deep Neural Network Lattice -->
      <g transform="translate(330, 285)">
        <!-- Synapse lines -->
        <line x1="-110" y1="-60" x2="-10" y2="-80" stroke="#ffffff" stroke-width="2" opacity="0.6"/>
        <line x1="-110" y1="-60" x2="-10" y2="0" stroke="#ffffff" stroke-width="2" opacity="0.8"/>
        <line x1="-110" y1="-60" x2="-10" y2="80" stroke="#ffffff" stroke-width="2" opacity="0.5"/>
        <line x1="-110" y1="60" x2="-10" y2="-80" stroke="#ffffff" stroke-width="2" opacity="0.5"/>
        <line x1="-110" y1="60" x2="-10" y2="0" stroke="#ffffff" stroke-width="2" opacity="0.8"/>
        <line x1="-110" y1="60" x2="-10" y2="80" stroke="#ffffff" stroke-width="2" opacity="0.6"/>
        <line x1="-10" y1="-80" x2="90" y2="-30" stroke="#ffffff" stroke-width="2.5" opacity="0.9"/>
        <line x1="-10" y1="0" x2="90" y2="-30" stroke="#ffffff" stroke-width="2.5" opacity="0.9"/>
        <line x1="-10" y1="0" x2="90" y2="40" stroke="#ffffff" stroke-width="2.5" opacity="0.9"/>
        <line x1="-10" y1="80" x2="90" y2="40" stroke="#ffffff" stroke-width="2.5" opacity="0.9"/>
        <!-- Layer 1 Nodes -->
        <circle cx="-110" cy="-60" r="16" fill="url(#facet1)" stroke="#ffffff" stroke-width="2"/>
        <circle cx="-110" cy="60" r="16" fill="url(#facet1)" stroke="#ffffff" stroke-width="2"/>
        <!-- Layer 2 Nodes -->
        <circle cx="-10" cy="-80" r="18" fill="url(#facet2)" stroke="#ffffff" stroke-width="2.5"/>
        <circle cx="-10" cy="0" r="22" fill="#ffffff" stroke="#ffffff" stroke-width="3"/>
        <circle cx="-10" cy="80" r="18" fill="url(#facet2)" stroke="#ffffff" stroke-width="2.5"/>
        <!-- Output Nodes -->
        <circle cx="90" cy="-30" r="20" fill="url(#facet1)" stroke="#ffffff" stroke-width="3"/>
        <circle cx="90" cy="40" r="20" fill="url(#facet1)" stroke="#ffffff" stroke-width="3"/>
      </g>
    `,
  },
  {
    filename: 'deploy-xpander-ai.jpg',
    title: 'agents.servbit.com',
    graphic: `
      <!-- Autonomous Agent Infinity Loop -->
      <g transform="translate(330, 285)">
        <path d="M-60,0 C-110,-55 -150,0 -60,0 C30,0 70,55 120,0 C70,-55 30,0 -60,0 Z" fill="none" stroke="#ffffff" stroke-width="18" stroke-linecap="round"/>
        <path d="M-60,0 C-110,-55 -150,0 -60,0 C30,0 70,55 120,0 C70,-55 30,0 -60,0 Z" fill="none" stroke="url(#facet1)" stroke-width="12" stroke-linecap="round"/>
        <circle cx="-95" cy="-22" r="14" fill="#ffffff" stroke="#000000" stroke-width="2"/>
        <circle cx="95" cy="22" r="14" fill="#ffffff" stroke="#000000" stroke-width="2"/>
        <circle cx="0" cy="0" r="16" fill="url(#facet2)" stroke="#ffffff" stroke-width="3"/>
      </g>
    `,
  },
  {
    filename: 'deploy-vapi.jpg',
    title: 'voice.servbit.com',
    graphic: `
      <!-- Concentric Acoustic Waveform Rings -->
      <g transform="translate(330, 285)">
        <ellipse cx="0" cy="0" rx="140" ry="85" fill="none" stroke="#ffffff" stroke-width="2" stroke-dasharray="6,8" opacity="0.4"/>
        <ellipse cx="0" cy="0" rx="105" ry="65" fill="none" stroke="#ffffff" stroke-width="3" opacity="0.6"/>
        <ellipse cx="0" cy="0" rx="70" ry="45" fill="none" stroke="#ffffff" stroke-width="4" opacity="0.8"/>
        <ellipse cx="0" cy="0" rx="35" ry="24" fill="url(#facet1)" stroke="#ffffff" stroke-width="4"/>
        <!-- Central Audio Pulse Core -->
        <circle cx="0" cy="0" r="14" fill="#ffffff"/>
      </g>
    `,
  },
  {
    filename: 'deploy-cognee-ai.jpg',
    title: 'rag.servbit.com',
    graphic: `
      <!-- 4D Hypercube / Tesseract Vector Embeddings -->
      <g transform="translate(330, 285)">
        <!-- Outer Box -->
        <polygon points="-80,-80 80,-80 80,80 -80,80" fill="none" stroke="#ffffff" stroke-width="3"/>
        <!-- Inner Box -->
        <polygon points="-40,-40 40,-40 40,40 -40,40" fill="url(#facet2)" stroke="#ffffff" stroke-width="2"/>
        <!-- Connecting Corner Tethers -->
        <line x1="-80" y1="-80" x2="-40" y2="-40" stroke="#ffffff" stroke-width="2.5"/>
        <line x1="80" y1="-80" x2="40" y2="-40" stroke="#ffffff" stroke-width="2.5"/>
        <line x1="80" y1="80" x2="40" y2="40" stroke="#ffffff" stroke-width="2.5"/>
        <line x1="-80" y1="80" x2="-40" y2="40" stroke="#ffffff" stroke-width="2.5"/>
        <!-- Vector Nodes -->
        <circle cx="0" cy="0" r="12" fill="#ffffff"/>
        <circle cx="-40" cy="-40" r="6" fill="#ffffff"/>
        <circle cx="40" cy="-40" r="6" fill="#ffffff"/>
        <circle cx="40" cy="40" r="6" fill="#ffffff"/>
        <circle cx="-40" cy="40" r="6" fill="#ffffff"/>
      </g>
    `,
  },
  {
    filename: 'deploy-v0-app.jpg',
    title: 'ui.servbit.com',
    graphic: `
      <!-- Design System UI Component Cards -->
      <g transform="translate(330, 285)">
        <!-- Back Card -->
        <rect x="-100" y="-85" width="160" height="110" rx="8" fill="url(#facet3)" stroke="#ffffff" stroke-width="2" transform="rotate(-8)"/>
        <!-- Front Card -->
        <rect x="-60" y="-45" width="170" height="120" rx="8" fill="url(#facet1)" stroke="#ffffff" stroke-width="2.5" transform="rotate(6)"/>
        <!-- Elements inside front card -->
        <circle cx="-35" cy="-20" r="8" fill="#ffffff" transform="rotate(6)"/>
        <rect x="-15" y="-25" width="80" height="10" rx="3" fill="#ffffff" transform="rotate(6)"/>
        <rect x="-35" y="5" width="120" height="35" rx="5" fill="#0c0e12" stroke="#ffffff" stroke-width="1.5" transform="rotate(6)"/>
      </g>
    `,
  },
  {
    filename: 'deploy-glideapps-com.jpg',
    title: 'mobile.servbit.com',
    graphic: `
      <!-- Mobile Smartphone Frame -->
      <g transform="translate(330, 285)">
        <rect x="-65" y="-115" width="130" height="230" rx="20" fill="url(#facet2)" stroke="#ffffff" stroke-width="3"/>
        <rect x="-20" y="-105" width="40" height="6" rx="3" fill="#ffffff"/>
        <!-- Screen Area -->
        <rect x="-52" y="-90" width="104" height="175" rx="8" fill="#0c0e12" stroke="#ffffff" stroke-width="1.5"/>
        <rect x="-40" y="-75" width="80" height="40" rx="5" fill="url(#facet1)" stroke="#ffffff" stroke-width="1"/>
        <circle cx="-25" cy="-15" r="10" fill="url(#facet3)" stroke="#ffffff" stroke-width="1"/>
        <circle cx="0" cy="-15" r="10" fill="url(#facet3)" stroke="#ffffff" stroke-width="1"/>
        <circle cx="25" cy="-15" r="10" fill="url(#facet3)" stroke="#ffffff" stroke-width="1"/>
        <rect x="-40" y="10" width="80" height="55" rx="4" fill="url(#facet1)" stroke="#ffffff" stroke-width="1"/>
        <circle cx="0" cy="100" r="6" fill="#ffffff"/>
      </g>
    `,
  },
  {
    filename: 'deploy-laravel-com.jpg',
    title: 'api.servbit.com',
    graphic: `
      <!-- REST / GraphQL API Gateway Brackets -->
      <g transform="translate(330, 285)">
        <polygon points="-90,-60 -30,-100 -30,-40 -90,0" fill="url(#facet1)" stroke="#ffffff" stroke-width="2"/>
        <polygon points="90,-60 30,-100 30,-40 90,0" fill="url(#facet2)" stroke="#ffffff" stroke-width="2"/>
        <polygon points="-90,20 -30,-20 -30,40 -90,80" fill="url(#facet3)" stroke="#ffffff" stroke-width="2"/>
        <polygon points="90,20 30,-20 30,40 90,80" fill="url(#facet1)" stroke="#ffffff" stroke-width="2"/>
        <!-- Central Connector Core -->
        <circle cx="0" cy="-10" r="22" fill="#ffffff" stroke="#0c0e12" stroke-width="4"/>
        <line x1="-30" y1="-10" x2="30" y2="-10" stroke="#ffffff" stroke-width="4"/>
      </g>
    `,
  },
  {
    filename: 'deploy-strapi-io.jpg',
    title: 'cms.servbit.com',
    graphic: `
      <!-- Content Schema Hierarchy Stack -->
      <g transform="translate(330, 285)">
        <!-- Top Cylinder -->
        <ellipse cx="0" cy="-60" rx="90" ry="28" fill="url(#facet1)" stroke="#ffffff" stroke-width="2"/>
        <!-- Mid Cylinder -->
        <path d="M-90,-10 C-90,15 90,15 90,-10 L90,20 C90,45 -90,45 -90,20 Z" fill="url(#facet2)" stroke="#ffffff" stroke-width="2"/>
        <!-- Bottom Cylinder -->
        <path d="M-90,30 C-90,55 90,55 90,30 L90,60 C90,85 -90,85 -90,60 Z" fill="url(#facet3)" stroke="#ffffff" stroke-width="2"/>
        <circle cx="0" cy="-10" r="8" fill="#ffffff"/>
        <circle cx="-45" cy="25" r="8" fill="#ffffff"/>
        <circle cx="45" cy="25" r="8" fill="#ffffff"/>
      </g>
    `,
  },
  {
    filename: 'deploy-konghq-com.jpg',
    title: 'gateway.servbit.com',
    graphic: `
      <!-- High-Throughput Ingress Portal Arch -->
      <g transform="translate(330, 285)">
        <polygon points="-120,80 -60,-80 60,-80 120,80 70,80 30,-30 -30,-30 -70,80" fill="url(#facet1)" stroke="#ffffff" stroke-width="3"/>
        <circle cx="0" cy="-55" r="14" fill="#ffffff"/>
        <line x1="0" y1="-30" x2="0" y2="80" stroke="#ffffff" stroke-width="3" stroke-dasharray="8,6"/>
      </g>
    `,
  },
  {
    filename: 'deploy-encore-dev.jpg',
    title: 'microservices.servbit.com',
    graphic: `
      <!-- Hexagonal Mesh of Distributed Microservices -->
      <g transform="translate(330, 285)">
        <!-- Center Hex -->
        <polygon points="0,-40 35,-20 35,20 0,40 -35,20 -35,-20" fill="url(#facet1)" stroke="#ffffff" stroke-width="3"/>
        <!-- Left Hex -->
        <polygon points="-75,-75 -40,-55 -40,-15 -75,5 -110,-15 -110,-55" fill="url(#facet2)" stroke="#ffffff" stroke-width="2"/>
        <!-- Right Hex -->
        <polygon points="75,-75 110,-55 110,-15 75,5 40,-15 40,-55" fill="url(#facet3)" stroke="#ffffff" stroke-width="2"/>
        <!-- Bottom Hex -->
        <polygon points="0,55 35,75 35,115 0,135 -35,115 -35,75" fill="url(#facet2)" stroke="#ffffff" stroke-width="2"/>
        <line x1="0" y1="0" x2="-75" y2="-35" stroke="#ffffff" stroke-width="2.5"/>
        <line x1="0" y1="0" x2="75" y2="-35" stroke="#ffffff" stroke-width="2.5"/>
        <line x1="0" y1="0" x2="0" y2="95" stroke="#ffffff" stroke-width="2.5"/>
      </g>
    `,
  },
  {
    filename: 'deploy-reflex-dev.jpg',
    title: 'fullstack.servbit.com',
    graphic: `
      <!-- Dual Interconnected Pyramids (Frontend & Backend) -->
      <g transform="translate(330, 285)">
        <!-- Upper Pyramid -->
        <polygon points="0,-95 70,0 -70,0" fill="url(#facet1)" stroke="#ffffff" stroke-width="2.5"/>
        <!-- Lower Inverted Pyramid -->
        <polygon points="0,95 70,0 -70,0" fill="url(#facet2)" stroke="#ffffff" stroke-width="2.5"/>
        <!-- Center Line -->
        <line x1="-90" y1="0" x2="90" y2="0" stroke="#ffffff" stroke-width="4"/>
        <circle cx="0" cy="0" r="16" fill="#ffffff" stroke="#000000" stroke-width="3"/>
      </g>
    `,
  },
  {
    filename: 'deploy-atoms-dev.jpg',
    title: 'components.servbit.com',
    graphic: `
      <!-- Atomic Orbital Rings with Electrons -->
      <g transform="translate(330, 285)">
        <ellipse cx="0" cy="0" rx="120" ry="45" fill="none" stroke="#ffffff" stroke-width="2.5" transform="rotate(-30)"/>
        <ellipse cx="0" cy="0" rx="120" ry="45" fill="none" stroke="#ffffff" stroke-width="2.5" transform="rotate(30)"/>
        <ellipse cx="0" cy="0" rx="120" ry="45" fill="none" stroke="#ffffff" stroke-width="2.5" transform="rotate(90)"/>
        <!-- Nucleus -->
        <circle cx="0" cy="0" r="24" fill="url(#facet1)" stroke="#ffffff" stroke-width="3"/>
        <!-- Electrons -->
        <circle cx="-80" cy="-45" r="9" fill="#ffffff"/>
        <circle cx="80" cy="45" r="9" fill="#ffffff"/>
        <circle cx="0" cy="-90" r="9" fill="#ffffff"/>
      </g>
    `,
  },
  {
    filename: 'deploy-layers-com.jpg',
    title: 'architecture.servbit.com',
    graphic: `
      <!-- 3 Stacked Isometric Architecture Planes -->
      <g transform="translate(330, 285)">
        <!-- Top Plane -->
        <polygon points="0,-90 100,-40 0,10 -100,-40" fill="url(#facet1)" stroke="#ffffff" stroke-width="2"/>
        <!-- Mid Plane -->
        <polygon points="0,-40 100,10 0,60 -100,10" fill="url(#facet2)" stroke="#ffffff" stroke-width="2"/>
        <!-- Base Plane -->
        <polygon points="0,10 100,60 0,110 -100,60" fill="url(#facet3)" stroke="#ffffff" stroke-width="2"/>
        <!-- Vertical Bus Pillars -->
        <line x1="-50" y1="-15" x2="-50" y2="85" stroke="#ffffff" stroke-width="2" stroke-dasharray="4,4"/>
        <line x1="50" y1="-15" x2="50" y2="85" stroke="#ffffff" stroke-width="2" stroke-dasharray="4,4"/>
        <line x1="0" y1="10" x2="0" y2="110" stroke="#ffffff" stroke-width="2.5"/>
      </g>
    `,
  },
  {
    filename: 'deploy-qwikbuild-com.jpg',
    title: 'pipeline.servbit.com',
    graphic: `
      <!-- CI/CD Build Conveyor Pipeline -->
      <g transform="translate(330, 285)">
        <path d="M-120,-30 L-40,-30 L0,30 L120,30" fill="none" stroke="#ffffff" stroke-width="16" stroke-linecap="round"/>
        <path d="M-120,-30 L-40,-30 L0,30 L120,30" fill="none" stroke="url(#facet1)" stroke-width="10" stroke-linecap="round"/>
        <!-- Stages -->
        <circle cx="-120" cy="-30" r="18" fill="url(#facet2)" stroke="#ffffff" stroke-width="3"/>
        <circle cx="-40" cy="-30" r="18" fill="url(#facet1)" stroke="#ffffff" stroke-width="3"/>
        <circle cx="0" cy="30" r="18" fill="url(#facet2)" stroke="#ffffff" stroke-width="3"/>
        <circle cx="120" cy="30" r="22" fill="#ffffff" stroke="#000000" stroke-width="4"/>
      </g>
    `,
  },
  {
    filename: 'deploy-same-new.jpg',
    title: 'sync.servbit.com',
    graphic: `
      <!-- Dual Revolving Sync Vectors -->
      <g transform="translate(330, 285)">
        <path d="M-80,0 A80,80 0 0,1 60,-55" fill="none" stroke="#ffffff" stroke-width="8" stroke-linecap="round"/>
        <polygon points="60,-75 80,-45 50,-40" fill="#ffffff"/>
        <path d="M80,0 A80,80 0 0,1 -60,55" fill="none" stroke="#ffffff" stroke-width="8" stroke-linecap="round"/>
        <polygon points="-60,75 -80,45 -50,40" fill="#ffffff"/>
        <!-- Central Data Core -->
        <circle cx="0" cy="0" r="24" fill="url(#facet1)" stroke="#ffffff" stroke-width="3"/>
      </g>
    `,
  },
  {
    filename: 'deploy-specific-dev.jpg',
    title: 'custom.servbit.com',
    graphic: `
      <!-- Precision Calibration Gauge / Solution Node -->
      <g transform="translate(330, 285)">
        <polygon points="0,-100 86,-50 86,50 0,100 -86,50 -86,-50" fill="url(#facet2)" stroke="#ffffff" stroke-width="3"/>
        <polygon points="0,-60 52,-30 52,30 0,60 -52,30 -52,-30" fill="url(#facet1)" stroke="#ffffff" stroke-width="2"/>
        <circle cx="0" cy="0" r="18" fill="#ffffff"/>
      </g>
    `,
  },
  {
    filename: 'deploy-anything-com.jpg',
    title: 'scale.servbit.com',
    graphic: `
      <!-- Global Wireframe Network Sphere -->
      <g transform="translate(330, 285)">
        <circle cx="0" cy="0" r="95" fill="none" stroke="#ffffff" stroke-width="3"/>
        <ellipse cx="0" cy="0" rx="95" ry="38" fill="none" stroke="#ffffff" stroke-width="2"/>
        <ellipse cx="0" cy="0" rx="38" ry="95" fill="none" stroke="#ffffff" stroke-width="2"/>
        <line x1="-95" y1="0" x2="95" y2="0" stroke="#ffffff" stroke-width="2" stroke-dasharray="4,4"/>
        <line x1="0" y1="-95" x2="0" y2="95" stroke="#ffffff" stroke-width="2" stroke-dasharray="4,4"/>
        <!-- Scale Hubs -->
        <circle cx="-50" cy="-20" r="7" fill="#ffffff"/>
        <circle cx="45" cy="25" r="7" fill="#ffffff"/>
        <circle cx="20" cy="-60" r="7" fill="#ffffff"/>
      </g>
    `,
  },
  {
    filename: 'deploy-zite-com.jpg',
    title: 'analytics.servbit.com',
    graphic: `
      <!-- Real-Time Observability 3D Bars & Metric Curve -->
      <g transform="translate(330, 285)">
        <!-- Axis grid -->
        <line x1="-110" y1="80" x2="110" y2="80" stroke="#ffffff" stroke-width="2.5"/>
        <line x1="-110" y1="-80" x2="-110" y2="80" stroke="#ffffff" stroke-width="2.5"/>
        <!-- 3D Bar 1 -->
        <polygon points="-90,80 -90,10 -65,-5 -65,65" fill="url(#facet3)" stroke="#ffffff" stroke-width="1.5"/>
        <polygon points="-65,65 -65,-5 -45,-5 -45,80" fill="url(#facet1)" stroke="#ffffff" stroke-width="1.5"/>
        <!-- 3D Bar 2 -->
        <polygon points="-30,80 -30,-40 -5,-55 -5,65" fill="url(#facet3)" stroke="#ffffff" stroke-width="1.5"/>
        <polygon points="-5,65 -5,-55 15,-55 15,80" fill="url(#facet1)" stroke="#ffffff" stroke-width="1.5"/>
        <!-- 3D Bar 3 -->
        <polygon points="30,80 30,-70 55,-85 55,65" fill="url(#facet3)" stroke="#ffffff" stroke-width="1.5"/>
        <polygon points="55,65 55,-85 75,-85 75,80" fill="url(#facet1)" stroke="#ffffff" stroke-width="1.5"/>
        <!-- Metric Line curve -->
        <polyline points="-100,50 -55,10 5,-50 65,-80 100,-85" fill="none" stroke="#ffffff" stroke-width="3.5"/>
        <circle cx="65" cy="-80" r="5" fill="#ffffff"/>
      </g>
    `,
  },
];

async function generateAllCards() {
  const targetDir = path.resolve('public/images/pages/home/scale-your-app');
  const vercelSrc = path.join(targetDir, 'deploy-vercel.jpg');
  const vercelRaw = await sharp(vercelSrc).raw().toBuffer({ resolveWithObject: true });

  console.log(`Starting generation of ${CARDS_CONFIG.length} authentic Servbit deploy cards...`);

  for (const card of CARDS_CONFIG) {
    const { filename, title, graphic } = card;
    const destPath = path.join(targetDir, filename);

    const svg = `
      <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="halo" cx="50%" cy="58%" r="45%">
            <stop offset="0%" stop-color="#ffffff" stop-opacity="0.28"/>
            <stop offset="55%" stop-color="#ffffff" stop-opacity="0.08"/>
            <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
          </radialGradient>
          <linearGradient id="facet1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#ffffff"/>
            <stop offset="100%" stop-color="#808080"/>
          </linearGradient>
          <linearGradient id="facet2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#e8e8e8"/>
            <stop offset="100%" stop-color="#383838"/>
          </linearGradient>
          <linearGradient id="facet3" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#b8b8b8"/>
            <stop offset="100%" stop-color="#1c1c1c"/>
          </linearGradient>
        </defs>

        <!-- Background halo glow -->
        <rect x="0" y="84" width="${width}" height="${height - 84}" fill="url(#halo)"/>

        <!-- Custom Graphic -->
        ${graphic}

        <!-- Header Title Text -->
        <text x="36" y="52" font-family="'Courier New', Courier, monospace" font-size="24" font-weight="600" fill="#ffffff" letter-spacing="0.5">
          ${title}
        </text>
      </svg>
    `;

    const { data } = await sharp(Buffer.from(svg))
      .flatten({ background: { r: 0, g: 0, b: 0 } })
      .grayscale()
      .raw()
      .toBuffer({ resolveWithObject: true });

    const outData = Buffer.alloc(width * height * 3);

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const idxOut = (y * width + x) * 3;
        const idxIn = (y * width + x) * 3;

        if (y < 84) {
          if (x >= 580 || x <= 18) {
            // Keep authentic [x] close button and border
            outData[idxOut] = vercelRaw.data[idxIn];
            outData[idxOut + 1] = vercelRaw.data[idxIn + 1];
            outData[idxOut + 2] = vercelRaw.data[idxIn + 2];
          } else {
            // Header background: authentic neutral slate gray matching original [49, 50, 54]
            const bgNoise = (hash(x * 7, y * 7) - 0.5) * 6;
            const baseR = 49 + bgNoise;
            const baseG = 50 + bgNoise;
            const baseB = 54 + bgNoise;

            let r = baseR;
            let g = baseG;
            let b = baseB;

            // Check text pixel
            const textVal = data[y * width + x];
            if (textVal > 30) {
              const n = hash(x, y);
              if (textVal > n * 160) {
                const textBrightness = Math.min(255, 210 + Math.floor(textVal * 0.18));
                r = textBrightness;
                g = textBrightness;
                b = textBrightness;
              }
            }

            // Top edge highlight
            if (y === 0) {
              r = 70;
              g = 72;
              b = 76;
            }
            if (y === 1) {
              r = 60;
              g = 62;
              b = 66;
            }
            // Bottom header border
            if (y === 82) {
              r = 35;
              g = 36;
              b = 40;
            }
            if (y === 83) {
              r = 18;
              g = 19;
              b = 22;
            }

            outData[idxOut] = Math.min(255, Math.max(0, Math.floor(r)));
            outData[idxOut + 1] = Math.min(255, Math.max(0, Math.floor(g)));
            outData[idxOut + 2] = Math.min(255, Math.max(0, Math.floor(b)));
          }
        } else {
          // Window body
          const grayVal = data[y * width + x];
          const n = hash(x, y);
          const bgNoise = (hash(x * 3, y * 3) - 0.5) * 14;
          const baseBg = Math.max(0, 8 + bgNoise);
          let finalVal = baseBg;

          if (grayVal > 5) {
            const threshold = n * 255;
            if (grayVal > threshold) {
              finalVal = Math.min(
                255,
                140 + Math.floor(grayVal * 0.45) + Math.floor(hash(y, x) * 50)
              );
            } else {
              const secondaryThresh = n * 1.8 * 255;
              if (grayVal > secondaryThresh) {
                finalVal = Math.floor(grayVal * 0.4);
              }
            }
          }

          // Window borders
          if (x <= 1 || x >= width - 2 || y >= height - 2 || y === 84) {
            finalVal = 44;
          }

          outData[idxOut] = Math.floor(finalVal);
          outData[idxOut + 1] = Math.floor(finalVal);
          outData[idxOut + 2] = Math.floor(finalVal);
        }
      }
    }

    await sharp(outData, { raw: { width, height, channels: 3 } })
      .jpeg({ quality: 90 })
      .toFile(destPath);

    console.log(`Generated: ${filename} -> ${title}`);
  }

  console.log('All 22 cards generated successfully!');
}

generateAllCards().catch(console.error);
