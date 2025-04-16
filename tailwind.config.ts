import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'home-hero' : 'linear-gradient(180deg, #9fddfe33, #00000033), url("/blue.avif")',
        'dark-overlay' : 'linear-gradient(180deg, #c5e4f633, #10294bbb), url("/blue.avif")',
        'noise' : 'linear-gradient(180deg, #00000055, #000000bb), url("/noise.png")',
        'planetin' : 'linear-gradient(180deg, #00000000, #00000000), url("/planetin.svg")',
        'planetfade' : 'linear-gradient(180deg, #10294b, transparent)',

      },
      fontSize: {
        'sm' : '12px',
        'base' : '15px',
        'md' : '16px',
        'lg' : '17px',
        'xl' : '20px',
        '2xl' : '3vw',
        '25px': '25px',
        '30px': '30px',
        '3xl' : '6vw',
        '4xl' : '8vw',
        'mxl' : '12vw',
      },
      spacing: {
        'pw-full': 'calc(100vw - 20px)',
        'ph-full': 'calc(100vh - 20px)',
        '10p' : '10%',
        '20p' : '20%',
      },
      backgroundColor: {
        'grey' : '#eeeeee99',
        'light-grey' : '#dddddd99',
        'gold' : '#DC9F42',
        'golden' : '#F0CEA0',
        'light-gold': '#F0CEA055',
        'dark': '#1f1f1f',
        'ox' : '#10294b',
        'col' : '#c5e4f6',
        'thistle' : '#dacee2',
        'mint-green' : '#dbf3ee',
      },
      textColor: {
        'gold' : '#DC9F42',
        'golden' : '#F0CEA0',
        'grey' : '#777',
        'wine' : '#772F1A',
        'oaf' : '#0af',
      },
      borderColor: {
        'gold' : '#DC9F42',
        'golden' : '#F0CEA0',
        'grey' : '#999',
      }
    },
  },
  plugins: [],
} satisfies Config;
