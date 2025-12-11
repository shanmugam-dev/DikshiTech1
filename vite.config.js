// Vite config in CommonJS format so it works without enabling ES modules
const { defineConfig } = require('vite');
const react = require('@vitejs/plugin-react-swc').default;

// Vite configuration for React project
module.exports = defineConfig({
  plugins: [react()],
  server: {
    port: 5173
  }
});


