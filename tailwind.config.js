/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                'company-color-primary': '#ee2526',
                'company-color-secondary': '#166a37',
                'auth-form-color': 'rgba(0, 0, 0, 0.487)'
            },
            backgroundImage: {
                'custom-gradient': 'linear-gradient(3deg, rgb(0, 0, 0) 0%, #166a37 0%, #ee2526 100%)',
                'custom-gradient2': 'linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent)'
            },

            
            backdropBlur: {
                'custom': '40px',  // Adds a custom blur of 40px
            },

            keyframes: {
                bounceIn: {
                    '0%': { transform: 'scale(0.3); opacity: 0;' },
                    '50%': { transform: 'scale(1.3); opacity: 1;' },
                    '70%': { transform: 'scale(0.9); opacity: 1;' },
                    '100%': { transform: 'scale(1); opacity: 1;' },
                },
                jelloEffect: {
                    '0%': { transform: 'scale3d(1, 1, 1)' },
                    '30%': { transform: 'scale3d(0.75, 1.25, 1)' },
                    '40%': { transform: 'scale3d(1.25, 0.75, 1)' },
                    '50%': { transform: 'scale3d(0.85, 1.15, 1)' },
                    '65%': { transform: 'scale3d(1.05, 0.95, 1)' },
                    '75%': { transform: 'scale3d(0.95, 1.05, 1)' },
                    '100%': { transform: 'scale3d(1, 1, 1)' },
                },
                rotascaling: {
                    '0%': { transform: 'scale(1) rotate(0deg)', opacity: 0 },
                    '50%': { transform: 'scale(1.5) rotate(180deg)', opacity: 0.9 },
                    '100%': { transform: 'scale(1) rotate(360deg)', opacity: 0 }
                },
            },

            animation: {
                bounceIn: 'bounceIn 0.4s ease-in',
                jelloEffect: 'jelloEffect 1s ease-in-out',
                rotascaling: 'rotascaling 2s linear infinite'
            },
        },
    },
    plugins: [],
}