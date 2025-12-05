# Contributing to RouteRush Island

First off, thank you for considering contributing to RouteRush Island! 🎉

This document provides guidelines for contributing to this project. Following these guidelines helps communicate that you respect the time of the developers managing and developing this open source project.

## 🤝 How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues to avoid duplicates. When you create a bug report, include as many details as possible:

- **Use a clear and descriptive title**
- **Describe the exact steps to reproduce the problem**
- **Provide specific examples** to demonstrate the steps
- **Describe the behavior you observed** and what you expected to see
- **Include screenshots or animated GIFs** if applicable
- **Specify your OS and version** (Windows/macOS/Linux)
- **Include the version of RouteRush Island** you're using

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion:

- **Use a clear and descriptive title**
- **Provide a detailed description** of the suggested enhancement
- **Explain why this enhancement would be useful** to most users
- **Include mockups or examples** if applicable

### Pull Requests

1. **Fork the repository** and create your branch from `main`:
   ```bash
   git checkout -b feature/AmazingFeature
   ```

2. **Make your changes**:
   - Follow the existing code style
   - Add comments where necessary
   - Update documentation if needed

3. **Test your changes**:
   - Run the app in development mode (`npm start`)
   - Test on your platform (Windows/macOS/Linux)
   - Verify no existing features are broken

4. **Commit your changes**:
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
   - Use clear, descriptive commit messages
   - Reference issue numbers if applicable

5. **Push to your fork**:
   ```bash
   git push origin feature/AmazingFeature
   ```

6. **Open a Pull Request**:
   - Provide a clear description of the changes
   - Link related issues
   - Add screenshots/GIFs for UI changes

## 📋 Development Guidelines

### Code Style

- Use **consistent indentation** (spaces, not tabs)
- Follow **JavaScript best practices**
- Keep functions **small and focused**
- Use **meaningful variable and function names**
- Add **comments for complex logic**

### Algorithm Implementations

This is an **educational visualization tool**. When implementing or modifying algorithms:

- Prioritize **clarity and readability** over micro-optimizations
- Include **comments explaining the algorithm logic**
- Update the **README.md** if adding new algorithms
- Add appropriate **complexity analysis** in documentation

### UI/UX Changes

- Maintain the **tropical island theme**
- Ensure changes are **responsive** and work at different zoom levels
- Test **color contrast** for accessibility
- Keep animations **smooth** (60 FPS target)

### Testing

Before submitting a PR:

- ✅ Test in **development mode** (`npm start`)
- ✅ Test the **build process** (`npm run build`)
- ✅ Verify the **installer works** on your platform
- ✅ Check for **console errors** in DevTools
- ✅ Test **edge cases** (invalid inputs, boundary conditions)

## 🏗️ Project Structure

Understanding the project structure will help you contribute effectively:

- `src/` - Source HTML file with embedded CSS and JavaScript
- `main.js` - Electron main process entry point
- `build-scripts/` - Build and minification scripts
- `dist/` - Minified production files (generated)
- `release/` - Built installers (generated)

## 📝 Commit Message Guidelines

Good commit messages help maintain project history:

- **Use the imperative mood** ("Add feature" not "Added feature")
- **First line**: Brief summary (50 chars or less)
- **Body**: Detailed explanation if needed
- **Reference issues**: Use `Fixes #123` or `Closes #123`

Examples:
```
Add Bellman-Ford visualization with step-by-step animation

- Implement Bellman-Ford algorithm
- Add color-coded edge relaxation visualization
- Update metrics panel to display iterations
- Add algorithm complexity info to README

Fixes #42
```

## 🎯 Areas for Contribution

We especially welcome contributions in these areas:

- **Algorithm implementations** - Add new pathfinding algorithms
- **Visualization improvements** - Enhance animations and visual feedback
- **Performance optimization** - Make the app faster and more responsive
- **Accessibility** - Improve keyboard navigation, screen reader support
- **Documentation** - Improve README, add tutorials, create examples
- **Testing** - Add automated tests, improve manual testing procedures
- **Bug fixes** - Fix reported issues
- **Platform support** - Improve cross-platform compatibility

## ⚠️ Important Notes

### Educational Tool Disclaimer

This project is an **educational visualization tool**, not a production-grade implementation:

- The BMSSP implementation is **didactic/illustrative**
- Focus is on **learning and intuition**, not research-grade performance
- See the **Technical Disclaimer** in README.md for details

### License

By contributing, you agree that your contributions will be licensed under the MIT License.

## 💬 Getting Help

- **Questions?** Open an issue with the `question` label
- **Discussion?** Use GitHub Discussions (if enabled)
- **Stuck?** Don't hesitate to ask for help in your PR

## 🌟 Recognition

Contributors will be recognized in the project! Significant contributions may be highlighted in release notes.

---

Thank you for contributing to RouteRush Island! Every contribution, no matter how small, helps make this project better for everyone. 🏝️🚗
