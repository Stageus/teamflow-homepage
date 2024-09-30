// https://tailwindcss.com/docs/configuration
/** @type {import('tailwindcss').Config} */
export default {
  // taillwind가 필요한 곳을 지정함
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // 다크모드 적용하는 속성
  darkMode: 'class',
  theme: {
    // 반응형
    screens: {
      // 정해진 화면 크기에 따라 css 설정을 변경
      // ex) mobile: text 크기 변경 등등
      // fid: 일관된 네이밍과 추가적인 브레이크 포인트를 고려해보자
      mobile: "767px",
      tablet: "1023px",
      desktop: "1024px" 
    },
    // 색상
    colors:{
      'primary-color': '#3578FF',
      'primary-white': '#FAFAFA',
      'primary-gray': '#9D9DAE',
      'primary-black': '#08080C',
      'success-color': '#0ADD66',
      'danger-color': '#F72111',
      'hover-color': '#5B9DFF',
      'light-bg1':"#FAFAFA",
      'light-bg2':"#E3E3E8",
      'light-bg3':"#9D9DAE",
      'dark-bg1':"#0F0F12",
      'dark-bg2':"#17171C",
      'dark-bg3':"#26262C",
    },
    // 기존 유틸 클래스와 사용자 지정 클랙스를 합침
    extend: {
      // 지원하는 크기가 없을경우 추가하여 사용가능
      spacing: {
        "aside": "400px",
        "header": "70px",
      },

      // font의 묶음 처리
      fontSize: {
        'primary-title': ['32px', { lineHeight: '40px', fontWeight: 'bold', fontStyle: 'italic' }],
        'secondary-title': ['24px', { lineHeight: '32px', fontWeight: 'bold' }],
        'size-xl': ['18px', { lineHeight: '26px', fontWeight: 'normal' }],
        'size-lg': ['16px', { lineHeight: '24px', fontWeight: 'normal' }],
        'size-body': ['14px', { lineHeight: '22px', fontWeight: 'normal' }],
        'size-sm': ['12px', { lineHeight: '20px', fontWeight: 'normal' }],
        'size-xs': ['10px', { lineHeight: '18px', fontWeight: 'normal' }],
      }

    },
    // 폰트
    fontFamily: {
      service: ["Noto Sans KR", "sans-serif"]
    }
  },
  // 좋은 플러그인도 많으니 찾아보자 ( Typography, Forms 등 )
  plugins: [],
}

