/** @type {import('tailwindcss').Config} */
export default {
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        mainBg: "url('./src/assets/images/desktop/main_bg.png')",
        tubeBg: "url('./src/assets/images/desktop/tube_bg.png')",
        textBg: "url('./src/assets/images/mobile/text_bg.png')",
        shSBg: "url('./src/assets/images/mobile/shS_bg.png')",
      },
      backgroundColors: {
        shSbg:
          "(90deg, rgba(198, 255, 249, 0.25) 0%, rgba(198, 255, 249, 0.20) 0.01%, rgba(255, 255, 255, 0.01) 100%)",
        text_bg:
          "rgba(198, 255, 249, 0.2), rgba(208, 255, 250, 0.17), rgba(255, 255, 255, 0)",
      },
    },
  },
  plugins: [],
};
