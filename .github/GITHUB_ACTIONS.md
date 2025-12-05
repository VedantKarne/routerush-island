# GitHub Actions - Automated Builds

This repository uses **GitHub Actions** to automatically build installers for Windows, macOS, and Linux.

## 🚀 How It Works

The workflow (`.github/workflows/build.yml`) automatically:

1. **Builds** installers for all three platforms (Windows, macOS, Linux)
2. **Tests** the build process on GitHub's servers
3. **Creates** a GitHub Release with all installers attached
4. **Generates** a macOS icon automatically if missing

## 📦 How to Create a Release

### Option 1: Create a Tag (Recommended)

1. **Commit and push your changes** to GitHub:
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```

2. **Create and push a version tag**:
   ```bash
   git tag v1.0.0
   git push origin v1.0.0
   ```

3. **Wait for the build** (takes ~10-15 minutes)

4. **Download installers** from the "Releases" page

### Option 2: Manual Trigger

1. Go to your repository on GitHub
2. Click **Actions** tab
3. Select **Build and Release** workflow
4. Click **Run workflow**
5. Choose the branch and click **Run workflow**

This will build the installers but won't create a release (only tags create releases).

## 📥 Finding Your Installers

### For Tagged Releases:

1. Go to your repository on GitHub
2. Click **Releases** (right sidebar)
3. Find your version (e.g., `v1.0.0`)
4. Download the installer for your platform:
   - **Windows**: `RouteRush-Island-Setup-1.0.0.exe`
   - **macOS**: `RouteRush-Island-1.0.0.dmg` or `.zip`
   - **Linux**: `RouteRush-Island-1.0.0.AppImage`

### For Manual Runs:

1. Go to **Actions** tab
2. Click on the workflow run
3. Scroll to **Artifacts** section at the bottom
4. Download:
   - `windows-installer`
   - `macos-installer`
   - `linux-installer`

## 🔄 Version Numbering

Follow [Semantic Versioning](https://semver.org/):

- **v1.0.0** - First stable release
- **v1.1.0** - New features, backward compatible
- **v1.0.1** - Bug fixes only
- **v2.0.0** - Breaking changes

## ⚙️ What the Workflow Does

### Build Jobs (Parallel):

1. **Windows Job** (`windows-latest`):
   - Installs Node.js and dependencies
   - Runs minification (`npm run minify`)
   - Builds Windows installer (`.exe`)
   - Uploads artifact

2. **macOS Job** (`macos-latest`):
   - Installs Node.js and dependencies
   - Generates `.icns` icon from `.png` automatically
   - Runs minification
   - Builds macOS installer (`.dmg`)
   - Uploads artifact

3. **Linux Job** (`ubuntu-latest`):
   - Installs Node.js and dependencies
   - Runs minification
   - Builds Linux installer (`.AppImage`)
   - Uploads artifact

### Release Job:

4. **Create Release** (runs after all builds complete):
   - Downloads all artifacts
   - Creates GitHub Release
   - Attaches all installers to the release
   - Auto-generates release notes from commits

## 🛠️ Troubleshooting

### Build Failed?

1. Check the **Actions** tab for error logs
2. Common issues:
   - Missing `package-lock.json` (run `npm install` locally)
   - Syntax errors in `package.json`
   - Missing files referenced in build config

### No Release Created?

- Releases are only created for **tags** (starting with `v`)
- Manual workflow runs create artifacts but not releases
- Make sure you pushed the tag: `git push origin v1.0.0`

### Icon Issues on macOS?

The workflow automatically generates `icon.icns` from your `build/icon.png`, so you don't need to create it manually.

## 📝 Customizing the Workflow

Edit `.github/workflows/build.yml` to:

- Change Node.js version (currently 18)
- Modify artifact retention days (currently 7)
- Adjust platform targets
- Add additional build steps

## 🔒 Permissions

The workflow uses `GITHUB_TOKEN` which is automatically provided by GitHub. No additional secrets needed!

## 📚 Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Electron Builder](https://www.electron.build/)
- [Semantic Versioning](https://semver.org/)

---

**Happy Releasing! 🎉**
