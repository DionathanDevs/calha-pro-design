import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const clientDir = path.resolve(__dirname, "../dist/client");

if (fs.existsSync(clientDir)) {
  // 1. Create .nojekyll so GitHub Pages doesn't ignore files starting with underscores
  const nojekyllPath = path.join(clientDir, ".nojekyll");
  fs.writeFileSync(nojekyllPath, "");
  console.log("✓ Created .nojekyll in dist/client");

  // 2. Duplicate index.html as 404.html for SPA routing on GitHub Pages
  const indexPath = path.join(clientDir, "index.html");
  const notFoundPath = path.join(clientDir, "404.html");
  if (fs.existsSync(indexPath)) {
    fs.copyFileSync(indexPath, notFoundPath);
    console.log("✓ Created 404.html fallback from index.html");
  }
} else {
  console.warn("⚠️ dist/client directory not found, skipping GitHub Pages post-build preparation.");
}
