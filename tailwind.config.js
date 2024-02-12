/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    fontFamily: {
      medium: "font-medium",
      bold: "font-bold",
    },
    fontSize: {
      tn: "1rem",
      xsm: "1.2rem",
      sm: "1.4rem",
      md: "1.6rem",
      lg: "2rem",
      xl: "2.4rem",
      "2xl": "3.2rem",
      "3xl": "4.8rem",
      "4xl": "6.4rem",
    },
    screens: {
      sm: "380px",
      md: "700px",
      lg: "780px",
      xl: "992px",
    },
    colors: {
      pureBlack: "#000000",
      charcoalBlack: "#171717",
      gunMetalBlack: "#1E1E1E",
      neroBlack: "#252525",
      slateGray: "#383838",
      silverGray: "#9C9C9C",
      pureWhite: "#FEFEFE",
      green: "#26BC57",
      whiteBackground: "rgba(221, 221, 221, 0.3)",
      hoverGreen: "#1E9C48 ",
      hoverWhite: "#dddddd",
    },
    extend: {
      width: () => {
        const values = {};
        for (let i = 1; i <= 1000; i++) {
          const rem = parseFloat((i * 0.1).toFixed(1));
          values[rem] = `${rem}rem`;
        }
        return values;
      },
      height: () => {
        const values = {};
        for (let i = 1; i <= 1000; i++) {
          const rem = parseFloat((i * 0.1).toFixed(1));
          values[rem] = `${rem}rem`;
        }
        values["screen"] = "100dvh";
        return values;
      },
      minHeight: {
        screen: "100dvh",
      },
      margin: {
        1: "0.8rem",
        2: "1.4rem",
        3: "1.6rem",
        4: "2rem",
        5: "4rem",
        7: "8rem",
      },
      padding: {
        1: "0.8rem",
        2: "1.4rem",
        3: "1.6rem",
        4: "2rem",
        5: "4rem",
        6: "8rem",
      },
      gap: {
        1: "0.8rem",
        2: "1.4rem",
        3: "1.6rem",
        4: "2rem",
        5: "4rem",
        6: "8rem",
      },
      borderRadius: {
        md: "0.5rem",
      },
      boxShadow: {
        thinBorder: "0 0 0 0.02rem #9c9c9c",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
      backgroundImage: {
        greenGradient: "linear-gradient(180deg, #26BC57 -30.4%, #171717 50%)",
        yellowGradient:
          "linear-gradient(135deg, #61876e 0%, #61876e 7.23%, #779878 39.08%, #a6bb8d 87.2%, #b7d1b7 100%, #a6bb8d 100%)",
        purpleGradient:
          "linear-gradient(135deg, #a31acb 0%, #9f70fd 60%, #c1edd8 120%)",
      },
    },
  },
  plugins: [],
};
