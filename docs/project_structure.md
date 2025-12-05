# 📁 Project Structure

This document provides a detailed overview of the RouteRush Island project structure and organization.

---

## Directory Overview

```text
traffic-simulator-desktop/
├── .github/                           # GitHub configuration
│   ├── workflows/                     # GitHub Actions CI/CD
│   │   └── build.yml                  # Build workflow for releases
│   ├── ISSUE_TEMPLATE/                # Issue templates
│   ├── images/                        # Documentation images
│   └── PULL_REQUEST_TEMPLATE.md       # PR template
├── src/                               # Source files
│   ├── Gamified_Traffic_Simulator_Premium.html  # Main application file
│   └── add_dynamic_effects.ps1        # Build helper script
├── docs/                              # Documentation
│   ├── algorithms.md                  # Algorithm details
│   ├── bmssp_disclaimer.md            # BMSSP technical disclaimer
│   └── project_structure.md           # This file
├── dist/                              # Minified/production files
├── release/                           # Built installers (local only, gitignored)
├── build/                             # Build assets
│   └── icon.png                       # Application icon
├── build-scripts/                     # Build automation
│   └── minify.js                      # HTML/CSS/JS minification script
├── node_modules/                      # Dependencies (gitignored)
├── main.js                            # Electron main process entry point
├── package.json                       # Node.js project configuration
├── package-lock.json                  # Dependency lock file
├── README.md                          # Main documentation
├── CONTRIBUTING.md                    # Contribution guidelines
├── CHANGELOG.md                       # Version history
├── LICENSE                            # MIT License
└── .gitignore                         # Git ignore rules
```

---

## Key Files Explained

### Application Core

#### `main.js`
- **Purpose**: Electron main process entry point
- **Responsibilities**:
  - Creates the browser window
  - Loads the main HTML file from `dist/`
  - Manages application lifecycle
  - Handles window events

#### `src/Gamified_Traffic_Simulator_Premium.html`
- **Purpose**: Main application file containing all HTML, CSS, and JavaScript
- **Components**:
  - HTML structure for the UI
  - Embedded CSS for styling (glassmorphism, tropical theme)
  - JavaScript for canvas rendering and algorithms
  - Pathfinding algorithm implementations
  - Map generation and interaction logic
  - Sound effects integration (Tone.js)

---

## Build System

### Build Scripts

#### `build-scripts/minify.js`
- **Purpose**: Minifies HTML, CSS, and JavaScript for production
- **Process**:
  1. Reads `src/Gamified_Traffic_Simulator_Premium.html`
  2. Minifies HTML structure
  3. Minifies embedded CSS
  4. Minifies embedded JavaScript
  5. Outputs to `dist/` directory

#### `src/add_dynamic_effects.ps1`
- **Purpose**: PowerShell helper script for build enhancements
- **Used during**: Development and build process

### Build Commands

| Command | Description |
|---------|-------------|
| `npm start` | Launch in development mode with DevTools |
| `npm run build` | Build for all platforms |
| `npm run build:win` | Build Windows installer (.exe) |
| `npm run build:mac` | Build macOS installer (.dmg) |
| `npm run build:linux` | Build Linux installer (.AppImage) |

---

## Configuration Files

### `package.json`

Defines:
- Project metadata (name, version, description)
- npm scripts for development and building
- Dependencies (Electron, Tone.js, etc.)
- Electron Builder configuration
- Build targets for each platform

**Key sections**:
```json
{
  "name": "routerush-island",
  "version": "1.0.0",
  "main": "main.js",
  "scripts": {
    "start": "electron .",
    "build": "electron-builder"
  },
  "build": {
    "appId": "com.routerush.island",
    "productName": "RouteRush Island",
    "files": [...],
    "directories": {...}
  }
}
```

### `.gitignore`

Excludes from Git:
- `node_modules/` - Dependencies
- `dist/` - Minified files
- `release/` - Built installers
- Platform-specific build artifacts

---

## GitHub Integration

### `.github/workflows/build.yml`

**Purpose**: Automated CI/CD pipeline

**Triggers**: 
- Push to main branch
- Pull requests
- Manual workflow dispatch

**Jobs**:
1. **Build** on multiple platforms (Windows, macOS, Linux)
2. **Test** the build process
3. **Create releases** with installers attached

**Platforms supported**:
- Windows (latest)
- macOS (latest)
- Ubuntu (latest)

### Issue and PR Templates

- **Bug Report Template**: Standardized bug reporting
- **Feature Request Template**: Consistent feature proposals
- **Pull Request Template**: PR guidelines and checklist

---

## Output Directories

### `dist/`
- **Contents**: Minified production HTML
- **Generated by**: `build-scripts/minify.js`
- **Used by**: Electron Builder during packaging
- **Gitignored**: No (committed for deployment)

### `release/`
- **Contents**: Platform-specific installers
- **Generated by**: Electron Builder
- **Platforms**:
  - Windows: `.exe` (NSIS installer)
  - macOS: `.dmg` (disk image)
  - Linux: `.AppImage` (portable executable)
- **Gitignored**: Yes (too large for Git, published via GitHub Releases)

### `build/`
- **Contents**: Build assets (icons, resources)
- **Used by**: Electron Builder for app icons
- **Gitignored**: No (required for builds)

---

## Development Workflow

### 1. **Local Development**
```bash
npm install          # Install dependencies
npm start            # Run in development mode
```

### 2. **Making Changes**
- Edit `src/Gamified_Traffic_Simulator_Premium.html`
- Test changes with `npm start`
- Restart Electron to see updates

### 3. **Building for Production**
```bash
npm run build        # Build for all platforms
# or
npm run build:win    # Build for specific platform
```

### 4. **Testing Builds**
- Built installers are in `release/`
- Test installation on target platform
- Verify application runs correctly

---

## Dependencies

### Production Dependencies

| Package | Purpose |
|---------|---------|
| Electron | Desktop application framework |
| Tone.js | Audio synthesis and effects |

### Development Dependencies

| Package | Purpose |
|---------|---------|
| electron-builder | Application packaging and distribution |
| html-minifier-terser | HTML/CSS/JS minification |

---

## Best Practices

### Adding New Features

1. Edit source files in `src/`
2. Test with `npm start`
3. Update relevant documentation
4. Build and test installer
5. Update `CHANGELOG.md`

### Modifying Build Process

1. Update `build-scripts/minify.js` for minification changes
2. Update `package.json` for Electron Builder config
3. Update `.github/workflows/build.yml` for CI/CD changes
4. Test builds on all platforms

### Documentation Updates

1. Update `README.md` for user-facing changes
2. Update `docs/` for technical details
3. Update `CONTRIBUTING.md` for contributor guidelines

---

## Size Optimization

The build process includes several optimizations:

- **HTML minification**: Removes whitespace and comments
- **CSS minification**: Reduces stylesheet size
- **JavaScript minification**: Minifies code while preserving functionality
- **Asset optimization**: Icons and images optimized for size

**Typical sizes**:
- Source HTML: ~500KB
- Minified HTML: ~350KB
- Windows installer: ~150MB (includes Electron runtime)
- macOS installer: ~180MB
- Linux AppImage: ~170MB

---

## Platform-Specific Notes

### Windows
- Uses NSIS installer
- Includes auto-updater support
- Creates Start Menu shortcuts

### macOS
- DMG disk image format
- Code signing (if configured)
- Supports both Intel and Apple Silicon

### Linux
- AppImage portable format
- No installation required
- Single executable file

---

[← Back to README](../README.md)
