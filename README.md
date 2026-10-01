# DevStack 🚀

## 📝 Description
DevStack is a modern, minimalist web application built to help developers explore, organize, and select technology stacks for their software projects. Featuring an intuitive high-contrast UI, users can browse through various tools and technologies, compare them, and curate their custom tech stack in real-time.

---

## 🛠️ Technologies Used

- **Frontend Framework:** React (Vite)
- **Language:** TypeScript
- **Styling:** Tailwind CSS, DaisyUI
- **Data Source:** Custom JSON (`technologies.json`)

---

## ✨ Key Features

1. **Interactive Tech Catalog:** Browse through frontend, backend, database, and dev tools with clear categorization, difficulty levels, and ratings.
2. **Real-time Selected Stack Sidebar:** Easily add or remove technologies to/from your custom stack with dynamic selection counts and real-time state updates.
3. **High-Contrast Minimalist UI:** Designed with a sleek `slate`/`zinc`/`black` color palette, custom violent/purple hero accents, and responsive layout grids.








# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.
