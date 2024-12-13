// https://tailwindcss.com/docs/configuration
/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');
export default {
   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
   darkMode: ['class'],
   theme: {
      extend: {
         container: {
            center: true,
            padding: '1rem'
         },
         colors: {
            primary: 'var(--color-primary)',
            secondary: 'var(--color-secondary)',
            white: 'var(--color-white)',
            black: 'var(--color-black)',
            gray: 'var(--color-gray)',
            success: 'var(--color-success)',
            error: 'var(--color-error)',
            shade_1: 'var(--color-shade_1)',
            shade_2: 'var(--color-shade_2)',
            shade_3: 'var(--color-shade_3)',
            shade_4: 'var(--color-shade_4)',
            shade_5: 'var(--color-shade_5)',
            backGroundGradient: {
               1: 'var(--bg-gradient1)',
               2: 'var(--bg-gradient2)',
               3: 'var(--bg-gradient3)',
            },
            modalGradient: {
               1: 'var(--modal-gradient1)',
               2: 'var(--modal-gradient2)',
               3: 'var(--modal-gradient3)',
               4: 'var(--modal-gradient4)',
               5: 'var(--modal-gradient5)',
            },
            cardGradient: {
               1: 'var(--card-graduent1)',
               2: 'var(--card-graduent2)',
               3: 'var(--card-graduent3)',
               4: 'var(--card-graduent4)',
               5: 'var(--card-graduent5)',
            }
         },
         fontSize: {
            title: ['clamp(28px, 2vw, 32px)', { lineHeight: '1.2', fontWeight: 'bold' }],
            title_sub: ['clamp(20px, 2vw, 24px)', { lineHeight: '1.2', fontWeight: 'bold' }],
            xl: ['clamp(18px, 2vw, 20px)', { lineHeight: '1.2', fontWeight: 'normal' }],
            lg: ['clamp(16px, 2vw, 18px)', { lineHeight: '1.2', fontWeight: 'normal' }],
            base: ['clamp(14px, 2vw, 16px)', { lineHeight: '1.2', fontWeight: 'normal' }],
            sm: ['clamp(12px, 2vw, 14px)', { lineHeight: '1.2', fontWeight: 'normal' }],
            xs: ['clamp(10px, 2vw, 12px)', { lineHeight: '1.2', fontWeight: 'normal' }],
         },
      },
      fontFamily: {
         service: ['Noto Sans KR', 'sans-serif'],
      },
   },
   plugins: [],
};
