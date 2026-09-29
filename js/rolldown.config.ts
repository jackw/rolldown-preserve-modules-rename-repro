import { defineConfig } from 'rolldown';

export default defineConfig({
  input: ['index.js'],
  // Add 'annotations.js' to input and the local name is kept instead.
  // input: ['index.js', 'annotations.js'],
  external: ['ext-schema'],
  output: {
    dir: 'dist',
    format: 'es',
    preserveModules: true,
  },
});
