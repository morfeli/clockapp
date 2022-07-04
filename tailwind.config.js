/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "day-time-mobile": "url('/public/assets/mobile/bg-image-daytime.jpg')",
        "day-time-tablet": "url('/public/assets/tablet/bg-image-daytime.jpg')",
        "day-time-desktop":
          "url('/public/assets/desktop/bg-image-daytime.jpg')",
        "night-time-mobile":
          "url('/public/assets/mobile/bg-image-nighttime.jpg')",
        "night-time-tablet":
          "url('/public/assets/tablet/bg-image-nighttime.jpg')",
        "night-time-desktop":
          "url('/public/assets/desktop/bg-image-nighttime.jpg')",
      },

      backgroundSize: {
        "100%": "100%",
      },
      backgroundPosition: {
        bottom: "center bottom",
      },
      backgroundColor: {
        lightBackground: "hsla(0,0%,100%,.75)",
        darkBackground: "rgba(0,0,0,0.75)",
        overLay: "rgba(0,0,0,0.30)",
      },
    },
  },
  plugins: [],
};
