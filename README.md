<div align="center">
  
# Kaustav's Portfolio
  
  [![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
  [![Three.js](https://img.shields.io/badge/Three.js-black?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
  [![License](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)
  
  <h3>A modern developer portfolio with 3D animations and feature flags</h3>
  
  **[View Live Demo →](https://kaustavsarkar.dev)**
  
</div>

---

## Features

- **3D Earth Animation** - Interactive Three.js globe on the contact page
- **Feature Flags** - Enable/disable sections via configuration without code changes
- **Responsive Design** - Optimized for all devices
- **Performance Focused** - Code splitting and lazy loading for fast load times

## Tech Stack

- React.js
- Three.js / React Three Fiber
- CSS Modules
- React Router

## Quick Start

```bash
# Clone repository
git clone https://github.com/Kaustav-Sarkar/Kaustav-Portfolio.git
cd Kaustav-Portfolio

# Install dependencies
npm install

# Start development server
npm start
```

## Customization

### Personal Information

Update your details in `src/portfolio.js`:

```javascript
const greeting = {
  title: "Your Name",
  logo_name: "YourName",
  subTitle: "Your tagline",
  // ... other details
};
```

### Feature Flags

Control visible sections in `src/featureFlags.js`:

```javascript
const featureFlags = {
  sections: {
    home: true,
    skills: true,
    projects: true,
    blogs: false,  // Enable when ready
    // ... other sections
  }
};
```

Disabled sections show a "Work in Progress" page, keeping the code ready for future use.

### Theme

Customize colors in `src/theme.js`.

## Project Structure

```
src/
├── components/     # Reusable UI components
├── containers/     # Page sections
├── pages/          # Route pages
├── portfolio.js    # Content configuration
├── featureFlags.js # Feature toggles
└── theme.js        # Styling configuration
```

## Build

```bash
npm run build
```

Creates optimized production build in `build/` directory.

## License

MIT License - see [LICENSE](LICENSE) file for details.
