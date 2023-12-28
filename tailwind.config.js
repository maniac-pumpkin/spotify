/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    fontFamily: {
      regular: "font-book",
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
      md: "576px",
      lg: "778px",
      xl: "992px",
    },
    extend: {
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
        hoverGreen: "#3Ca214",
        hoverWhite: "#dddddd",
      },
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
        greenGradient: "linear-gradient(180deg, #26BC57 -30.4%, #171717 37.7%)",
        purpleGradient:
          "radial-gradient(231.5% 188.27% at 18.75% 18.13%, #4100F5 0%, rgba(193, 237, 216, 0.00) 100%)",
      },
    },
  },
  plugins: [],
};
