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
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
      backgroundImage: {
        greenGradient: "linear-gradient(180deg, #26BC57 -30.4%, #171717 50%)",
        purpleGradient:
          "linear-gradient(140deg, rgba(127,39,255,1) 0%, rgba(196,153,243,1) 80%, rgba(243,204,243,1) 200%)",
        grayGradient:
          "linear-gradient(140deg, rgba(64,81,59,1) 0%, rgba(96,153,102,1) 50%, rgba(157,192,139,1) 100%)",
      },
    },
  },
  plugins: [],
};
