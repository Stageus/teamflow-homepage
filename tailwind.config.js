// https://tailwindcss.com/docs/configuration
/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');
export default {
   // taillwind가 필요한 곳을 지정함
   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
   // 다크모드 적용하는 속성
   darkMode: ['class'],
   theme: {
      // 기존 유틸 클래스와 사용자 지정 클랙스를 합침
      extend: {
         container: {
            center: true,
            padding: '1rem'
         },
         // 색상
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
         },
         // 지원하는 크기가 없을경우 추가하여 사용가능
         spacing: {},
         // font의 묶음 처리
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
      // 폰트
      fontFamily: {
         service: ['Noto Sans KR', 'sans-serif'],
      },
   },
   // 좋은 플러그인도 많으음
   plugins: [],
};
