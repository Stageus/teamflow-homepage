# Package Link

[마크다운 참조:GitHub](https://www.heropy.dev/p/B74sNE)

[마크다운 참조:블로그](https://gist.github.com/ihoneymon/652be052a0727ad59601)

[React 공식문서](https://react.dev/)

[React-router-dom 공식문서](https://reactrouter.com/en/main)

[React-query 공식문서](https://tanstack.com/query/latest/docs/framework/react/guides/migrating-to-react-query-4#react-query-is-now-tanstackreact-query)

[React-query 참조문서](https://kyounghwan01.github.io/blog/React/react-query/basic/)

[React-cookie Npm](https://www.npmjs.com/package/react-cookie)

[React-icons 공식문서](https://react-icons.github.io/react-icons/)

[react-tolltip](https://react-tooltip.com/docs/examples/styling)
[react-tooltipNpm](https://www.npmjs.com/package/react-tooltip)

[react-responsiveNpm](https://www.npmjs.com/package/react-responsive)

[TypeScript 공식문서](https://www.typescriptlang.org/docs/)

[TypeScript Config 공식문서](https://www.typescriptlang.org/tsconfig/#moduleResolution)

[ESLint 공식문서](https://eslint.org/docs/latest/use/getting-started)

[PostCss 공식문서](https://postcss.org/docs/)

[PostCss-nested 공식문서](https://github.com/postcss/postcss-nested#readme)

[Taillwind 공식문서](https://tailwindcss.com/docs/installation)

[Vite 공식문서](https://ko.vitejs.dev/guide/)

[immer 공식문서](https://immerjs.github.io/immer/)

[socket.io-client 공식문서](https://socket.io/docs/v4/client-api/)

[Graapad](http://ourownthing.co.uk/gradpad.html#)

---

# TeamFlow 구조

> | Layer      | Slice                                |          Description          |
> | ---------- | :----------------------------------- | :---------------------------: |
> | `app`      | `App.tsx`                            |     프로젝트의<br> 진입점     |
> | `app`      | `global.css`                         |        프로젝트의 css         |
> | `app`      | `Layout.tsx`                         |    프로젝트의<br> 레이아웃    |
> | `app`      | `Router.tsx`                         |         페이지라우터          |
> | `app`      | `/header`                            |            Header             |
> | `app`      | `/header/alarmModal`                 |           알람모달            |
> | `app`      | `/aside`                             |             Aside             |
> | `app`      | `/aside/profileModal`                |          프로필모달           |
> | `pages`    | `/login`                             |         로그인 페이지         |
> | `pages`    | `/signup`                            |        회원가입 페이지        |
> | `pages`    | `/teamspaceList`                     |     TeamSpace 선택 페이지     |
> | `pages`    | `/teamspaceList/myTeamSpaceList`     |  내가만든 TeamSpace 컴포넌트  |
> | `pages`    | `/teamspaceList/inviteTeamSpaceList` |  참여중인 TeamSpace 컴포넌트  |
> | `pages`    | `/teamspace`                         | TeamSpace<br> 공지채널 페이지 |
> | `pages`    | `/teamspacePublic`                   |   TeamSpace 공개채널 페이지   |
> | `pages`    | `/teamspacePrivate`                  |  TeamSpace 비공개채널 페이지  |
> | `widgets`  | `/inputFrom`                         |      유효성검사InputFrom      |
> | `widgets`  | `/drawerModal`                       |          드로어 모달          |
> | `features` | `/thread`                            |        thread 컴포넌트        |
> | `features` | `/threadModal`                       |          thread 모달          |
> | `features` | `/userSearch`                        |         유저검색 모달         |
> | `shared`   | `/assets`                            |           정적파일            |
> | `shared`   | `/hook`                              |         커스텀 hooks          |
> | `shared`   | `/store`                             |           전역상태?           |
> | `shared`   | `/util`                              |         유틸리티 함수         |
> | `shared`   | `/consts`                            |             상수              |
> | `shared`   | `/ui`                                |       재사용 UI컴포넌트       |
> | `shared`   | `/ui/defaultBtn`                     |           기본버튼            |
> | `shared`   | `/ui/profile`                        |     프로필이미지 컴포넌트     |
> | `shared`   | `/ui/fullScreenModal`                |         전체화면 모달         |

---

# Git Commit Convention

> | Name(scope) | Description           | Example                  |
> | :---------- | :-------------------- | :----------------------- |
> | `Feat`      | `새로운 기능 추가`    | `Feat(Header): 내용`     |
> | `Fix`       | `버그수정`            | `Fix(Header): 내용`      |
> | `Docs`      | `문서수정`            | `Docs(Package): 내용`    |
> | `Design`    | `Css관련 수정`        | `Design(Header): 내용`   |
> | `Refactor`  | `코드 리팩토링 관련`  | `Refactor(Header): 내용` |
> | `Rename`    | `파일 및 폴더명 변경` | `Rename(Header): 내용`   |
> | `Remove`    | `파일 및 폴더 삭제`   | `Remove: 내용`           |
> | `file`      | `파일관련`            | `move: 내용`             |
> | `dir`       | `폴더관련`            | `dir: 내용`              |

---

# Code Convention

> | Type       |       Description        |        Example        |
> | :--------- | :----------------------: | :-------------------: |
> | `dir`      |           `-`            |   `channel-public`    |
> | `CompFile` |       `PascalCase`       |  `TeamSpace.확장자`   |
> | `funFile`  |       `camelCase`        |  `teamSpace.확장자`   |
> | `hookFile` |       `camelCase`        | `useTeamSpace.확장자` |
> | `변수`     | `명사 + 명사(camelCase)` | `useTeamSpace.확장자` |
> | `function` | `동사 + 명사(camelCase)` | `useTeamSpace.확장자` |



[예정package]
@mdx-js/loader / @mdx-js/react / @next/mdx:
MDX 파일(마크다운과 JSX의 조합)을 처리하고 React 컴포넌트로 렌더링할 수 있게 합니다.

@radix-ui/react-icons / @radix-ui/react-slot:
Radix UI 라이브러리로 접근성과 유연성을 갖춘 UI 컴포넌트에서 아이콘과 슬롯 기능을 제공합니다.

@tanstack/react-query:
서버 상태 관리를 위한 라이브러리로, API 요청의 캐싱 및 동기화를 지원합니다.

class-variance-authority / clsx:
조건부로 CSS 클래스를 병합하거나 동적으로 관리할 수 있도록 도와줍니다.

tailwind-merge:
Tailwind CSS의 클래스를 병합하고 충돌을 방지합니다.

lucide-react:
다양한 SVG 기반 아이콘을 제공하는 라이브러리입니다.

nuqs:
유틸리티 기반 React 관련 기능을 제공하는 라이브러리입니다.

react-infinite-scroll-component:
무한 스크롤을 구현하기 위한 컴포넌트를 제공합니다.

usehooks-ts / @uidotdev/usehooks:
자주 사용하는 React Hooks를 제공하는 라이브러리입니다.

zod:
데이터를 검증하고 구조를 정의하기 위한 타입스크립트 기반 라이브러리입니다.


