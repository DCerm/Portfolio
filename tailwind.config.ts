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
        'dark-overlay' : 'linear-gradient(180deg, #c5e4f633, #10294bbb), url("/blue.avif")',
        'planetin' : 'linear-gradient(180deg, #00000000, #00000000), url("/planetin.svg")',
        'planetfade' : 'linear-gradient(180deg, #10294b, #00000000)',
        'project' : 'url("/astronaut.png")',
        'astro' : 'url("/astronauts.png")',

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
        'dark': '#1f1f1f',
        'ox' : '#10294b',
        'col' : '#c5e4f6',
      },
      textColor: {
        'oaf' : '#0af',
      },
      borderColor: {
        'grey' : '#999',
      }
    },
  },
  plugins: [],
} satisfies Config;
