# 새 행보 추가하기

1. `src/data/timeline.ts`의 `timeline` 배열에 객체 하나를 추가합니다. 순서는 상관없고 화면에서 `date`로 정렬됩니다.

```ts
{
  id: 'my-new-thing',          // 고유 id
  date: '2026-11-03',          // 'YYYY-MM' 또는 'YYYY-MM-DD'
  endDate: '2026-11-20',       // 기간이 있을 때만
  category: 'project',         // 'career' | 'project'
  title: '제목',
  summary: '한두 문장 요약',
  points: ['핵심 성과 1', '핵심 성과 2'],   // 선택
  tags: ['React'],                          // 선택
  links: [{ label: '사이트 열기', url: 'https://…' }],  // 선택
  image: 'my-thumb.webp',      // 선택. public/thumbs/ 에 파일 추가
  milestone: false,            // 전환점이면 true (강조 카드)
}
```

2. 날짜는 해당 레포에서 `git log`로 확인합니다 (`docs/PROJECTS.md` 3번 참고).
3. 이미지는 `public/thumbs/`에 600px 너비 webp로 넣습니다.
4. `docs/PROJECTS.md` 표에 한 줄 추가합니다.
5. 개인정보 점검 후 푸시하면 GitHub Actions가 자동 배포합니다.

```bash
npm run build
npm run check:privacy
```

## 개인정보 체크리스트
- 이름, 연락처, 이메일, 실제 회사명, 학교명이 없는가 (회사는 "회사 A" 식으로 익명화)
- 이력서 파일/폴더명을 복사하지 않았는가
- 스트리머 실명이 아니라 공개 서비스명(잔디동, SBO 등)만 쓰는가
