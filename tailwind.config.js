/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray1: {
          "100": "#101828",
          "200": "rgba(29, 41, 57, 0.7)",
        },
        darkgray: {
          "100": "#98a2b3",
          "200": "#969696",
        },
        "gray-200": "#eaecf0",
        whitesmoke: {
          "100": "#f9fafb",
          "200": "#f5f5f4",
          "300": "#f2f4f7",
        },
        lavenderblush: {
          "100": "#fdf2fa",
          "200": "#fce7f6",
        },
        mediumvioletred: "#c11574",
        aliceblue: {
          "100": "#f0f9ff",
          "200": "#eef4ff",
        },
        darkblue: "#3538cd",
        ghostwhite: "#f9f5ff",
        slateblue: "#6941c6",
        slategray: "#667085",
        steelblue: "#026aa2",
        honeydew: "#ecfdf3",
        seagreen: "#027a48",
        lightgray: "#d0d5dd",
        mediumslateblue: "#7f56d9",
        gainsboro: "rgba(216, 216, 216, 0.4)",
        dimgray: "#646464",
        lavender: {
          "100": "#f4ebff",
          "200": "#e0eaff",
        },
        "gray-700": "#344054",
        mediumseagreen: "rgba(36, 187, 140, 0.02)",
        darkslategray: "#0a2b43",
      },
      spacing: {},
      fontFamily: {
        "text-md-normal": "Inter",
      },
      borderRadius: {
        "181xl": "200px",
        "21xl": "40px",
        "12xs-5": "0.5px",
        "3xs": "10px",
        "lg-4": "18.4px",
        "669xl-5": "688.5px",
      },
    },
    fontSize: {
      base: "16px",
      sm: "14px",
      xs: "12px",
      xl: "20px",
      "5xl": "24px",
      lg: "18px",
      "29xl": "48px",
      "17xl": "36px",
      "7xl": "26px",
      "6xl": "25px",
      mini: "15px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
