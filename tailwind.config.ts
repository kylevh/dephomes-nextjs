import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {

      colors: {
        dep: {
          primary: "#87A03B",
          secondary: "#244200",
          textColor: "#0C1500",
          offwhite: "#FFFAF4",
        }
      },

      fontFamily: {
        moon: ['var(--font-mulish)'],
        argentum: ['var(--font-argentum)'],
        mulish: ['var(--font-mulish)']
      },
    },
  },
  plugins: [],
}
export default config
