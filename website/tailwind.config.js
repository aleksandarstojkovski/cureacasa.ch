/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            brand: {
                blue: '#00476b',
                green: '#8fb44b',
            },
            primary: {
                50: '#e6f0f5',
                100: '#cce3eb',
                200: '#99c7d7',
                300: '#66aac3',
                400: '#338eae',
                500: '#00719a',
                600: '#00476b',
                700: '#003956',
                800: '#002b40',
                900: '#001c2b',
            },
            secondary: {
                DEFAULT: '#8fb44b',
                50: '#f4f9ed',
                100: '#e9f3db',
                500: '#8fb44b',
                600: '#72903c',
                700: '#566c2d',
            }
        }
    },
},
plugins: [],
}
