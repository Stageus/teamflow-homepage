[마크다운]
1. https://gist.github.com/ihoneymon/652be052a0727ad59601
2. https://www.heropy.dev/p/B74sNE

[React]
1. https://react.dev/

[React-router-dom]
1. https://reactrouter.com/en/main

[React-query]
1. https://tanstack.com/query/latest/docs/framework/react/guides/migrating-to-react-query-4#react-query-is-now-tanstackreact-query
2. https://kyounghwan01.github.io/blog/React/react-query/basic/

[React-cookie]
1. https://www.npmjs.com/package/react-cookie

[react-icons]
1. https://react-icons.github.io/react-icons/

[TypeScript]
1. https://www.typescriptlang.org/docs/

[tsconfig]
1. https://www.typescriptlang.org/tsconfig/#moduleResolution

[ESLint]
1. https://eslint.org/docs/latest/use/getting-started

[Postcss]
1. https://postcss.org/docs/

[Taillwind]
1. https://tailwindcss.com/docs/installation

[Vite]
1. https://ko.vitejs.dev/guide/

[immer]
1. https://immerjs.github.io/immer/

[socket.io-client]
1. https://socket.io/docs/v4/client-api/



TeamFlow 구조
=============

>| Layer | Slice | description |
>|---|:---|:---:|
>| `app` | `App.tsx` | 프로젝트의<br> 진입점 |
>| `app` | `global.css` | 프로젝트의 css |
>| `app` | `Layout.tsx` | 프로젝트의<br> 레이아웃 |
>| `app` | `Router.tsx` | 페이지라우터 |
>| `app` | `/header` | Header |
>| `app` | `/header/alarmModal` | 알람모달 |
>| `app` | `/aside` | Aside |
>| `app` | `/aside/profileModal` | 프로필모달 |
>| `pages` | `/login` | 로그인 페이지 |
>| `pages` | `/signup` | 회원가입 페이지 |
>| `pages` | `/teamspaceList` | TeamSpace 선택 페이지 |
>| `pages` | `/teamspaceList/myTeamSpaceList` | 내가만든 TeamSpace 컴포넌트 |
>| `pages` | `/teamspaceList/inviteTeamSpaceList` | 참여중인 TeamSpace 컴포넌트 |
>| `pages` | `/teamspace` | TeamSpace<br> 공지채널 페이지 |
>| `pages` | `/teamspacePublic` | TeamSpace 공개채널 페이지 |
>| `pages` | `/teamspacePrivate` | TeamSpace 비공개채널 페이지|
>| `widgets` | `/inputFrom` | 유효성검사InputFrom |
>| `widgets` | `/drawerModal` | 드로어 모달 |
>| `features` | `/thread` | thread 컴포넌트 |
>| `features` | `/threadModal` | thread 모달 |
>| `features` | `/userSearch` | 유저검색 모달 |
>| `shared` | `/assets` | 정적파일 |
>| `shared` | `/hook` | 커스텀 hooks |
>| `shared` | `/store` | 전역상태? |
>| `shared` | `/util` | 유틸리티 함수 |
>| `shared` | `/consts` | 상수 |
>| `shared` | `/ui` | 재사용 UI컴포넌트 |
>| `shared` | `/ui/defaultBtn` | 기본버튼 |
>| `shared` | `/ui/profile` | 프로필이미지 컴포넌트 |
>| `shared` | `/ui/fullScreenModal` | 전체화면 모달 |
