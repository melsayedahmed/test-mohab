# Deployment Guide

This portfolio website is production-ready and can be deployed to various hosting platforms.

## Prerequisites

- Node.js 16+ and npm installed

## Build for Production

```bash
npm run build
```

This creates an optimized `dist/` folder with:
- Minified JavaScript and CSS
- Optimized image loading
- Tree-shaking for smaller bundles
- No source maps (security)

## Deployment Options

### 1. **Vercel** (Recommended - Free tier available)
```bash
npm i -g vercel
vercel
```
- Auto-deploys on git push
- Automatic HTTPS

### 2. **Netlify**
```bash
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```
- Or connect GitHub repo for auto-deploys

### 3. **GitHub Pages**
1. Update `vite.config.ts` with your repo name as base
2. `npm run build`
3. Push `dist/` folder to `gh-pages` branch

### 4. **Traditional Hosting (Shared Hosting/VPS)**
1. Build: `npm run build`
2. Upload `dist/` folder to your server
3. Configure your web server to serve `index.html` for all routes (SPA routing)

**Nginx Example:**
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

**Apache Example:**
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

## Quality Checks Before Deployment

```bash
# Type checking
npm run typecheck

# Linting
npm run lint

# Build verification
npm run build
```

## Performance Optimization

- ✓ Tree-shaking enabled
- ✓ Minified output
- ✓ No source maps in production
- ✓ Lazy loading animations
- ✓ Optimized images from Pexels
- ✓ CSS purging with Tailwind

## Security

- No secrets in code
- No console logs in production
- HTTPS recommended for deployment
- Static assets only (frontend-only application)

## Monitoring & Maintenance

- Monitor build logs for errors
- Check browser console for runtime errors
- Test all links and external services

## Support

For issues or questions:
1. Check browser console for errors
2. Ensure all dependencies are installed: `npm install`
3. Clear cache and rebuild: `rm -rf dist node_modules && npm install && npm run build`
