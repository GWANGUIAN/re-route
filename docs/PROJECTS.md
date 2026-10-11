# 프로젝트 조사 문서

다른 컴퓨터에서도 이어 작업할 수 있도록, 타임라인 소재가 된 레포를 조사해 정리한 문서입니다.
날짜는 `git log` 기준이며 조사일은 **2026-10-11** 입니다. 새 컴퓨터에서는 아래 "갱신 명령"으로 다시 확인하세요.

> 개인정보 규칙: 이 레포(공개)에는 이름·회사명·연락처를 적지 않습니다. 회사는 "회사 A/B"처럼 익명화합니다.
> 이력서 원본은 이 레포 **바깥** 상위 폴더 `profiles/`(HTML/PDF)에만 있으며 절대 복사하지 않습니다.

## 1. 커리어 (이력서 기반)

| 구분 | 기간 | 내용 |
|---|---|---|
| 채용 업무 | 시기 비공개 | 인턴 1년 → 계약직 6개월. 이력서에 없는 내용이라 기간만 표기 |
| 부트캠프 | 2021.06 ~ 2021.12 | 소프트웨어 엔지니어링 부트캠프 수료, 개발자로 전환 |
| 회사 A | 2022.03 ~ 2023.12 (1년 10개월) | 매칭 서비스 웹·CRM, 병원 홈페이지·CMS. Next.js/TS/React Query/Redux/Emotion. GitHub Actions 빌드 시간 30% 단축 |
| 회사 B | 2024.01 ~ 2026.04 (2년 4개월) | 접근제어 솔루션(2024.01~2025.11): AI 민감정보 마스킹 단독 개발, FSD 리팩토링, SBOM 라이선스 고지 자동화. LLM 채팅 플랫폼(2025.12~2026.04): 어드민 구성형 채팅, MCP App 연동 |
| 퇴사 | 2026.04 | LLM 도입으로 "AI에게 시키고 리뷰"하는 업무 방식이 재미없고 무기력해져 퇴사 |

전환 이유: 상상한 기능이 실제로 구현되는 게 재미있었고, 좋은 사수에게 들은 "일은 무조건 재미있어야 한다"에 공감.

## 2. 개인 프로젝트 (퇴사 후)

모든 레포는 이 레포와 같은 상위 폴더(`../`)에 있습니다. 각 레포는 같은 GitHub 계정 아래에 있습니다.

| 폴더 | 한 줄 소개 | 커밋 범위 / 개수 | 배포 주소 |
|---|---|---|---|
| `../magic-conch-shell` | 스폰지밥 마법의 소라고동 패러디. 퇴사 후 개인 프로젝트의 시작 | 2026-07-28 ~ 07-29 / 6 | https://gwanguian.github.io/magic-conch-shell/ (GitHub Pages) |
| `../fc26-division-dashboard` | 스트리머 동아리 "잔디동" 지원자 디비전·활동 대시보드. 카페 글 자동 수집(AWS Lambda, 현재 일시 중지), Gemini Vision 전적 판독, 미니게임·도트 RPG 월드. 팬 조공용 | 2026-08-16 ~ 10-04 / 912 (8월 480, 9월 425, 10월 7) | https://wakjandy.stream |
| `../google-ads` | AdSense 수익화용 정적 유틸 사이트 모노레포(pnpm+Turborepo+Astro, Cloudflare Pages). 앱 14개. 심사 탈락/대기 중이라 **보류** | 2026-09-04 ~ 09-13 / 58 | https://loomfile.com, https://pwcheckup.com, https://hexnook.dev, https://kcalc.site (img-convertor 등 나머지는 배포 URL 미확인) |
| `../3d-avator` (레포명은 `3d-avatar`) | AI로 스트리머용 VRChat SD 아바타 제작. 캐릭터 레퍼런스 약 36종(`refs/`), 납품 6종(`deliveries/<id>/<id>-thumbnail-1200x900.png`: kanosd, yushak, nanwoni, jumengyi, hiki, jaenin) | 2026-09-29 ~ 10-10 / 200 | 없음(납품용) |
| `../kano-sbo` | VRChat 야구 대회 SBO에 지원한 스트리머의 어필 사이트. React 19, three.js 3D, 픽셀 애니메이션, 응원 메시지, 놀이터. 상세는 그 레포 `docs/PROJECT.md` | 2026-10-05 ~ (진행 중) / 117 | https://sbo.kano.stream |

### google-ads 앱별 첫 커밋일
hexnook·loomfile·pwcheckup·img-convertor·font-tools·localpdf·qr-tools·video-tools 2026-09-04, image-compressor·image-resizer 09-05, remove-bg 09-06, k-calculator 09-07.
(chromeai-kit, guitar-tuner는 커밋 이력 없음 = 미커밋/초기 상태)

## 3. 갱신 명령

```bash
# 레포별 첫/마지막 커밋일과 개수
cd ../<repo> && git log --reverse --format='%ad|%s' --date=short | head -1 && git log --format='%ad|%s' --date=short | head -1 && git rev-list --count HEAD
# 일자별 커밋 분포
git log --format='%ad' --date=short | sort | uniq -c
```

`scripts/git-ranges.sh`가 위 레포들을 한 번에 출력합니다.

## 4. 사이트에 쓰는 썸네일

`public/thumbs/*.webp` 는 `../3d-avator/deliveries/*/…-thumbnail-1200x900.png` 와 `../magic-conch-shell/public/shell.webp` 를 600px webp로 줄인 것입니다. 원본은 수정하지 않습니다.
