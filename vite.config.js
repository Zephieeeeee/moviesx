import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    base: '/react-movies/',
})


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
