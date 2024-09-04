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
      colors: {
        gray: {
          500: '#475467',
        },
        buttonColor: {
          500: '#7F56D9',
        },
        headerColor: {
          500: '#344054',
        },
        specialheaderColor: {
          500: '#7F56D9',
        },
        descriptionColor: {
          500: '#636363',
        },
        tileTextColor: {
          500: '#98A2B3',
        },
        titleBgColor: {
          500: '#F9F5FF',
        },
        partnersbgColor: {
          500: '#F2F4F7',
        },
        countbgColor: {
          500: '#F6EBFF'
        },
        containerbgColor: {
          500: '#FCFAFF'
        },
        bgopacity: {
          500: '#F4EBFF'
        },
        overlaybg: {
          500: '#F9FAFB'
        },
        grey: {
          400: '#475467'
        },
        footercolor: {
          400: '#667085'
        }
      },
      
    },
  },
  plugins: [],
};

export default config;