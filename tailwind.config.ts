import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      strokeDasharray: {
        '1000': '1000',
      },
      strokeDashoffset: {
        '1000': '1000',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        dash: {
          to: {
            strokeDashoffset: '0',
          },
          from: {
            strokeDashoffset: '1000',
          }
        }
      },
      animation: {
        dash: 'dash 2s linear alternate infinite',
      }
    }
  },
  plugins: [
    function({ addUtilities }: { addUtilities: Function }) {
      const newUtilities = {
        '.stroke-dash-1000': {
          'stroke-dasharray': '1000',
        },
        '.stroke-dash-offset-1000': {
          'stroke-dash-offset': '1000',
        },
      }
      addUtilities(newUtilities)
    },
    tailwindcssAnimate
  ],
} satisfies Config;
