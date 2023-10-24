/** @type {import('tailwindcss').Config} */
export default {
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        mainBg: "url('./public/images/desktop/main_bg.png')",
        tubeBg: "url('./public/images/desktop/tube_bg.png')",
        textBg: "url('./public/images/mobile/text_bg.png')",
        shSBg: "url('./public/images/mobile/shS_bg.png')",
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
