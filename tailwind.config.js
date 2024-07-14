// tailwind.config.js
const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        // ...
        // make sure it's pointing to the ROOT node_module
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            animation: {
                'gradient-flow': 'gradient-flow 3s infinite linear',
            },
            keyframes: {
                'gradient-flow': {
                    '0%': {
                        'background-position': '0% 50%',
                    },
                    '50%': {
                        'background-position': '100% 50%',
                    },
                    '100%': {
                        'background-position': '0% 50%',
                    },
                },
            },
        },
    },
    darkMode: "class",
    plugins: [nextui()],
};