Installed Packages and Their Usage

📌 Core Framework & Build System

react@^18.3.1 – Main React library for building UI components.

react-dom@^18.3.1 – Provides DOM-specific methods for React rendering.

vite@^6.0.1 – Lightning-fast build tool for modern JavaScript applications.

@vitejs/plugin-react@^4.3.4 – Enables React fast refresh and optimizations in Vite.

🎨 UI & Styling

tailwindcss@^3.4.0 – Utility-first CSS framework for quick styling.

postcss@^8.4.35 – CSS transformations and optimizations.

autoprefixer@^10.4.16 – Adds vendor prefixes for cross-browser compatibility.

clsx@^2.0.0 – Utility for conditionally joining class names.

shadcn-ui@latest – Pre-built modern UI components based on Radix UI.

📊 Charts & Data Visualization

apexcharts@^3.44.0 – Open-source, customizable charting library.

react-apexcharts@^1.4.0 – React wrapper for integrating ApexCharts into React applications.

📄 CSV Handling & Data Parsing

papaparse@^5.4.1 – Lightweight and fast CSV parser for JavaScript.

🗂️ State Management

mobx@^6.10.0 – Simple, scalable, and reactive state management.

mobx-react-lite@^3.4.0 – Lightweight bindings for using MobX in React.

🔧 TypeScript & Definitions (for Deno compatibility)

@types/react@^18.3.12 – TypeScript type definitions for React.

@types/react-dom@^18.3.1 – TypeScript type definitions for ReactDOM.

📌 Notes

All packages are installed via npm since Deno now supports npm packages natively.

Vite is used as the build system for its fast performance and seamless React integration.

ApexCharts is chosen for financial and time-series chart visualization.

MobX is used for reactive state management due to its simplicity and efficiency.

Papaparse is used for efficiently handling CSV data parsing.

📌 Next Steps

Initialize project structure with Vite and TailwindCSS.

Set up MobX store for managing parsed CSV data.

Create UI components using ShadCN.

Implement ApexCharts for time-series visualization.

🚀 Ready to start coding!