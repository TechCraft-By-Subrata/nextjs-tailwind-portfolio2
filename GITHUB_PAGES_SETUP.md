# Hosting on GitHub Pages

This project uses Next.js, which must be exported as a static site to work with GitHub Pages. Follow these steps:

## 1. Update `next.config.ts`

Add `basePath` and `assetPrefix` to your config. Replace `your-repo-name` with your actual repository name:

```ts
const nextConfig = {
  basePath: "/your-repo-name",
  assetPrefix: "/your-repo-name/",
};

export default nextConfig;
```

## 2. Add Export and Deploy Scripts

Install the `gh-pages` package:

```sh
npm install --save-dev gh-pages
```

Add these scripts to your `package.json`:

```json
"scripts": {
  ...existing scripts...
  "export": "next build && next export",
  "deploy": "gh-pages -d out"
}
```

## 3. Export and Deploy

Run:

```sh
npm run export
npm run deploy
```

## 4. Configure GitHub Pages

- Go to your repository Settings > Pages.
- Set the source to the `gh-pages` branch.

Your site will be available at:
`https://your-username.github.io/your-repo-name/`

---

**Note:** Replace `your-repo-name` everywhere with your actual repository name (e.g., `portfolio3`).
