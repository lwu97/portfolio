/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                mon: ["MonumentGrotesk-Regular", "sans-serif"], // Default to your custom font
                basement: ["BasmentGrotesque", "sans-serif"],
            },
            colors: {
                primary: "#191919",
                secondary: "#d3d2d6",
                tertiary: "#444444",
                "black-100": "#100d25",
                "black-200": "#090325",
                "white-100": "#f3f3f3",
                green: "#b2d74c",
                beige: "#f1f1ee",
            },
            boxShadow: {
                card: "0px 35px 120px -15px #211e35",
            },
            screens: {
                xs: "450px",
            },
        },
    },
    plugins: [],
    function({ addUtilities, theme }) {
        addUtilities({
            ".text-outline": {
                "-webkit-text-stroke": `1px ${theme("#FFF")}`,
                color: "transparent",
            },
        });
    },
};
