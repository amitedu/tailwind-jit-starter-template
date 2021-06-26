const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    purge: [
        './public/**/*.html'
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        screens: {
            'xs': '475px',
            ...defaultTheme.screens,
        },
        extend: {
            fontFamily: {
                sans: ['Inter var'],
                poppins: ['Poppins', 'sans-serif'],
            },
            colors: {
                "theme-green": "#00b140",
                "theme-aquamarine": "#64ffda",
                "theme-blue-deep": "#0a192f",
                "theme-gray-light": "#ccd6f6",
                "theme-gray-deep": "#8892b0",
            },
            stroke: ['hover', 'focus'],
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
