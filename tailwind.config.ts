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
        '20': '20',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        dash: {
          to: {
            strokeDashoffset: '1000',
          }
        }
      },
      animation: {
        dash: 'dash 15s linear infinite',
      }
    }
  },
  plugins: [
    function({ addUtilities }: { addUtilities: Function }) {
      const newUtilities = {
        '.stroke-dash-20': {
          'stroke-dasharray': '20',
        },
      }
      addUtilities(newUtilities)
    },
    tailwindcssAnimate
  ],
} satisfies Config;
