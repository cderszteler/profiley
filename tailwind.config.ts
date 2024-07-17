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
          "850": `color-mix(in srgb, ${colors.slate["800"]}, ${colors.slate["900"]})`
        },
        "light-primary": colors.slate["100"],
        "dark-primary": colors.slate["900"],
      },
    },
  },
  plugins: [],
};
export default config;
