import { defineConfig } from 'rolldown';
import { dts } from 'rolldown-plugin-dts';

export default defineConfig({
  input: ['src/index.ts'],
  // Add 'src/annotations.ts' to input and the interface keeps its name.
  // input: ['src/index.ts', 'src/annotations.ts'],
  external: ['ext-schema'],
  plugins: [dts({ emitDtsOnly: true })],
  output: {
    dir: 'dist',
    format: 'es',
    preserveModules: true,
  },
});
