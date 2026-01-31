# 👻 Ghost Comments

![Version](https://img.shields.io/badge/version-0.0.1-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Editor](https://img.shields.io/badge/VS%20Code-007ACC?logo=visual-studio-code&logoColor=white)

**Ghost Comments** is an ultra-lightweight VS Code extension designed to reduce visual noise in your code. It allows you to make comments invisible (or transparent) instantly via a keyboard shortcut, letting you focus on the pure logic of the code.

> "Love comments but hate how they pollute your code?" — Ghost Comments is the solution.

## ✨ Features

- 👁️ **Instant Toggle**: Hide/Show comments in a split second.
- 💨 **Zero Latency**: Uses VS Code's native decoration API (no text modification).
- 🧹 **Visual Code Folding**: Reduces comment font size to near-zero to simulate line deletion.
- 🌐 **Multi-Language**: Works with C, C++, Java, JavaScript, TypeScript, and many more (`//` and `/* */` detection).

## 🚀 Installation


Since the extension is still in development (and not yet on the Marketplace), here are the two easiest ways to get it:

### 🚀 Option 1: The "Flash" Method (Recommended)
If you are comfortable with the terminal, simply copy-paste the following command to automatically download and install the latest version:

#### Linux / macOS
```bash
curl -L -o ghost-comments.vsix [https://github.com/Pucci17PinkerZ/ghost-comments/releases/latest/download/ghost-comments-0.0.1.vsix](https://github.com/Pucci17PinkerZ/ghost-comments/releases/latest/download/ghost-comments-0.0.1.vsix)
code --install-extension ghost-comments.vsix
rm ghost-comments.vsix 
```

#### Windows
```bash
Invoke-WebRequest -Uri "[https://github.com/Pucci17PinkerZ/ghost-comments/releases/latest/download/ghost-comments-0.0.1.vsix](https://github.com/Pucci17PinkerZ/ghost-comments/releases/latest/download/ghost-comments-0.0.1.vsix)" -OutFile "ghost-comments.vsix"
code --install-extension ghost-comments.vsix
Remove-Item ghost-comments.vsix
```