# career-journey

커리어(채용 → 프론트엔드 → 다음)와 개인 프로젝트를 날짜순으로 보여주는 개인 사이트. React + TypeScript + Vite, GitHub Pages(`/career-journey/`) 배포.

- 콘텐츠는 `src/data/timeline.ts`, `src/data/profile.ts` 두 파일만 고치면 됩니다. 추가 절차는 `docs/ADD_ENTRY.md`.
- 다른 레포 조사 내용은 `docs/PROJECTS.md`. 새 행보를 추가하면 이 문서도 갱신합니다.
- **개인정보 금지**: 이름·회사명·연락처·학교명을 사이트와 문서에 쓰지 않습니다. 커밋 전 `npm run check:privacy`.
- 이력서 원본은 상위 폴더 `../profiles/`에 있으며 읽기만 합니다(복사 금지). 다른 레포(`../magic-conch-shell` 등)도 읽기 전용입니다.
- 디자인: 따뜻한 에디토리얼, CSS 변수 토큰(`src/styles/global.css`), 라이트/다크, 모바일 우선.
- 사용자에게는 쉬운 한국어로 설명합니다.
- 배포: `main`에 푸시하면 `.github/workflows/deploy.yml`이 Pages로 배포합니다.
