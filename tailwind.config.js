const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: [
        "./app//*.{js,ts,jsx,tsx,mdx}",
        "./pages//.{js,ts,jsx,tsx,mdx}",
        "./components/**/.{js,ts,jsx,tsx,mdx}",

        // Or if using src directory:
        "./src/*/.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: 'media',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    variants: {
        extend: {
            opacity: ['disabled'],
        },
    },
    plugins: [require('@tailwindcss/forms')],
}
