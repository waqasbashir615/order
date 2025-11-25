// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '18': '4.5rem', // 72px
      }
    },
  },
  plugins: [],
}

export default config