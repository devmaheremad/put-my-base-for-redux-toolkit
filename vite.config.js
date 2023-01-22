import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/put-my-base-for-redux-toolkit/",
  plugins: [react()],
})
