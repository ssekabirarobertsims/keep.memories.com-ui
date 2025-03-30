# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

# Keep Memories Gallery UI Template

This project is a **React + TypeScript** template built with **Vite**. It provides a foundation for creating modern, fast, and scalable user interfaces for gallery or memory-keeping applications. The template is designed to streamline development with a minimal setup, while offering flexibility for customization and expansion.

## Features

- **React 18**: Leverages the latest features of React for building dynamic and interactive UIs.
- **TypeScript**: Ensures type safety and better developer experience.
- **Vite**: A fast and modern build tool for blazing-fast development and optimized production builds.
- **Hot Module Replacement (HMR)**: Instant updates during development without losing state.
- **ESLint Integration**: Pre-configured linting rules for maintaining code quality and consistency.
- **SWC or Babel Support**: Choose between SWC or Babel for fast refresh and transpilation.

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/keep-memories-gallery-ui-template.git
   cd keep-memories-gallery-ui-template
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

5. Preview the production build:
   ```bash
   npm run preview
   ```

## Recommended Plugins

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react): Uses Babel for Fast Refresh.
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc): Uses SWC for Fast Refresh.
- [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react): Provides React-specific linting rules.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use and modify it for your own projects.

## Contributing

Contributions are welcome! If you have suggestions or improvements, feel free to open an issue or submit a pull request.