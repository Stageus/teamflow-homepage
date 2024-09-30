// Js 관련
import js from '@eslint/js'
// 브라우저 환경 전역 변수
import globals from 'globals'
// React Hooks의 올바른 규칙을 검사
import reactHooks from 'eslint-plugin-react-hooks'
// React Fast Refresh의 기능 검사
import reactRefresh from 'eslint-plugin-react-refresh'
// TS에서 ESlint사용할수 있게 해주며, Ts문법 분석으함
import tseslint from 'typescript-eslint'

export default tseslint.config(
  // ESLint가 검사하지 않을 파일이나 폴더를 설정하는 부분
  { ignores: ['dist'] },
  {
    // ESLint의 기본 권장 설정을 확장함
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    // 검사할 파일 확장자
    files: ['**/*.{ts,tsx}'],
    // ECMAScript의 버전과 글로벌 객체 설정
    languageOptions: {
      // 버전을 설정하여, 해당 버전의 이상의 문법을 사용할수 있도록 설정
      ecmaVersion: 2020,
      // 브라우저 환경에서 사용한 전역객체를 허용
      globals: globals.browser,
    },
    // 플러그인 설정
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    // ESLint 규칙을 설정하는 부분
    rules: {
      // Reack-Hooks의 권장 규칙을 확장하여 적용함
      ...reactHooks.configs.recommended.rules,
      // React Fast Refresh에서 컴포넌트만 내보내도록 하는 규칙
      // 경고만 하는 수준으로
      // 개발환경에서 적용되며, 프로덕션 환경에서는 적용되지 않는다?
      // React Fast Refresh의 목적은 컴포넌트만을 업데이트하는 것이 기본 목적
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
)
