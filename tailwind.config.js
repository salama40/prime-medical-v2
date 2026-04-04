/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#0A5C95',
                secondary: '#14B8A6',
                accent: '#2ecc71',
            },
            fontFamily: {
                'tajawal': ['Tajawal', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
