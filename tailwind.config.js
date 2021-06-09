module.exports = {
    purge: [
        './public/**/*.html'
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter var'],
                poppins: ['Poppins', 'sans-serif'],
            },
            colors: {
                "theme-green": "#00b140",
                "theme-aquamarine": "#44dbb2",
                "theme-blue-deep": "#0a192f",
                "theme-gray-light": "#ccd6f6",
                "theme-gray-deep": "#8892b0",
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
