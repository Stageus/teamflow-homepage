// https://tailwindcss.com/docs/configuration
/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')
export default {
   // taillwind가 필요한 곳을 지정함
   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
   // 다크모드 적용하는 속성
   darkMode: 'class',
   theme: {
      // 반응형
      screens: {
         // 정해진 화면 크기에 따라 css 설정을 변경
         // ex) mobile: text 크기 변경 등등
         // fid: 일관된 네이밍과 추가적인 브레이크 포인트를 고려해보자
         mobile: {max: '640px'},
         tablet: '641px',
         desktop: '1025px',
      },
      // 기존 유틸 클래스와 사용자 지정 클랙스를 합침
      extend: {
         // 색상
         colors: {
            'primary-color': '#3578FF',
            'secondary-color': '#5B9DFF',
            'primary-white': '#FAFAFA',
            'primary-gray': '#9D9DAE',
            'primary-black': '#08080C',
            'success-color': '#0ADD66',
            'danger-color': '#F72111',
            'light-bg1': '#FAFAFA',
            'light-bg2': '#E3E3E8',
            'light-bg3': '#9d9dae42',
            'dark-bg1': '#0F0F12',
            'dark-bg2': '#17171C',
            'dark-bg3': '#26262C',
         },
         // 지원하는 크기가 없을경우 추가하여 사용가능
         spacing: {},
         // font의 묶음 처리
         fontSize: {
            'primary-title': ['clamp(28px, 2vw, 32px)', { lineHeight: '1.2', fontWeight: 'bold' }],
            'secondary-title': ['clamp(20px, 2vw, 24px)', { lineHeight: '1.2', fontWeight: 'bold' }],
            'size-xl': ['clamp(18px, 2vw, 20px)', { lineHeight: '1.2', fontWeight: 'normal' }],
            'size-lg': ['clamp(16px, 2vw, 18px)', { lineHeight: '1.2', fontWeight: 'normal' }],
            'size-base': ['clamp(14px, 2vw, 16px)', { lineHeight: '1.2', fontWeight: 'normal' }],
            'size-sm': ['clamp(12px, 2vw, 14px)', { lineHeight: '1.2', fontWeight: 'normal' }],
            'size-xs': ['clamp(10px, 2vw, 12px)', { lineHeight: '1.2', fontWeight: 'normal' }],
         },
      },
      // 폰트
      fontFamily: {
         service: ['Noto Sans KR', 'sans-serif'],
      },
   },
   // 좋은 플러그인도 많으니 찾아보자 ( Typography, Forms 등 )
   plugins: [ 
   //    plugin(function({ addComponents }) {
   //    const buttons = {
   //      '.btn': {
   //        padding: '.5rem 1rem',
   //        borderRadius: '.25rem',
   //        fontWeight: '600',
   //      },
   //      '.btn-primary': {
   //        backgroundColor: '#3490dc',
   //        color: '#fff',
   //        '&:hover': {
   //          backgroundColor: '#2779bd',
   //        },
   //      },
   //      '.btn-secondary': {
   //        backgroundColor: '#ffed4a',
   //        color: '#000',
   //        '&:hover': {
   //          backgroundColor: '#f9ca24',
   //        },
   //      },
   //    }

   //    addComponents(buttons)
   //  }),
   ],
};
