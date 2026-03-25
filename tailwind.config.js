/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'], // نفس الإعدادات القديمة
  darkMode: 'class',
  theme: {
    extend: {
      // إضافة keyframes للـ glow
      keyframes: {
        glow: {
          '0%, 100%': { opacity: 0.5, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.3)' },
        },
      },
      // إضافة animation لاستخدام الـ glow
      animation: {
        glow: 'glow 1.5s ease-in-out infinite',
      },
      
    },
  },
  plugins: [],
};
