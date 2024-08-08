import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      keyframes: {
        slideInRight: {
          '0%': { transform: 'translateX(50%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1', visibility: "visible" },
        },
        // Add other animations as needed
        slideInBottom: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1', visibility: "visible" },
        },
        slideInTop: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1', visibility: "visible" },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-50%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1', visibility: "visible" },
        },
        slideIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1', visibility: "visible" },
        },
        slideInGradientLine: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1', visibility: "visible" },
        },
      },
      animation: {
        slideInRight: 'slideInRight 1s ease-out forwards',
        // Define other animations as needed
        slideInBottom: 'slideInBottom 1s ease-out forwards',
        slideInTop: 'slideInTop 1s ease-out forwards',
        slideInLeft: 'slideInLeft 1s ease-out forwards',
        slideIn: 'slideIn 1.5s ease-out forwards',
        slideInGradientLine: 'slideInGradientLine 1s ease-out forwards',

        // combining all the slide ins to be "slideInTransition" and defining the starting position in the element className's doesn't work if you put "translate-x-full", but rather "translate-x-3/4". This is because it would never be in the viewport if you translate it fully but with this, it starts off as in viewport, then transforms away, and then transforms to normal position
      },
    },
  },
  plugins: [
    require("tailwindcss-animation-delay"),
  ],
};
export default config;
