import type {Config} from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        "6": "6px",
      },
      colors: {
        "slate": {
          "150": `color-mix(in srgb, ${colors.slate["100"]}, ${colors.slate["200"]})`,
          "250": `color-mix(in srgb, ${colors.slate["200"]}, ${colors.slate["300"]})`,
          "750": `color-mix(in srgb, ${colors.slate["700"]}, ${colors.slate["800"]})`,
          "850": `color-mix(in srgb, ${colors.slate["800"]}, ${colors.slate["900"]})`
        },
        "light-primary": colors.slate["100"],
        "dark-primary": colors.slate["900"],
      },
      typography: {
        quoteless: {
          css: {
            'blockquote p:first-of-type::before': {content: 'none'},
            'blockquote p:first-of-type::after': {content: 'none'},
          },
        },
      },
      screens: {
        'tall': { 'raw': '(min-height: 1150px)' },
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;
