const fs = require('fs');
const path = require('path');

const { glob } = require('glob');
const matter = require('gray-matter');

const getExcerpt = require('./get-excerpt');

const postCache = new Map();
const slugCache = new Map();

const shouldUseCache = () => process.env.NODE_ENV !== 'development';

const getPostSlugs = async (pathname) => {
  if (shouldUseCache() && slugCache.has(pathname)) {
    return slugCache.get(pathname);
  }

  const normalizedPathname = pathname.replace(/\\/g, '/');
  const files = glob.sync(`${normalizedPathname}/**/*.md`, {
    ignore: ['**/README.md', '**/unused/**', '**/shared-content/**', '**/GUIDE_TEMPLATE.md'],
    posix: true,
  });
  const slugs = files.map((file) =>
    file.replace(/\\/g, '/').replace(normalizedPathname, '').replace(/\.md$/, '')
  );

  if (shouldUseCache()) {
    slugCache.set(pathname, slugs);
  }

  return slugs;
};

const getPostBySlug = (slug, pathname) => {
  const cacheKey = `${pathname}:${slug}`;

  if (shouldUseCache() && postCache.has(cacheKey)) {
    return postCache.get(cacheKey);
  }

  try {
    const cleanSlug = String(slug).replace(/\\/g, '/').replace(/^\//, '');
    const cleanPathname = String(pathname).replace(/\\/g, '/').replace(/^\//, '');
    const fullPath = path.join(process.cwd(), cleanPathname, `${cleanSlug}.md`);
    const source = fs.readFileSync(fullPath, 'utf-8');
    const { data, content } = matter(source);
    const excerpt = getExcerpt(content, 200);
    const post = { data, content, excerpt };

    if (shouldUseCache()) {
      postCache.set(cacheKey, post);
    }

    return post;
  } catch (_e) {
    return null;
  }
};

module.exports = {
  getPostSlugs,
  getPostBySlug,
};
