import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  swcOptions: {
    jsc: {
      transform: {
        react: {
          throwIfNamespace: false, // This disables the JSX namespace check.
        },
      },
    },
  },
});
