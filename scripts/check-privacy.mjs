// 사이트·문서에 개인정보가 들어갔는지 검사한다. 금칙어는 로컬 파일 .privacy-terms (git 제외, 한 줄에 하나)에서 읽는다.
// 금칙어 자체가 개인정보이므로 레포에 커밋하지 않는다.
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'

const termsFile = '.privacy-terms'
const generic = [/\b01\d-?\d{3,4}-?\d{4}\b/, /[\w.+-]+@(gmail|naver|hanmail|daum)\.\w+/i]
const terms = existsSync(termsFile)
  ? readFileSync(termsFile, 'utf8').split(/\r?\n/).map((s) => s.trim()).filter(Boolean)
  : []
if (!terms.length) console.warn(`경고: ${termsFile} 없음 — 이름/회사명 검사는 건너뜁니다. (한 줄에 하나씩 적어두세요)`)

const walk = (dir) =>
  readdirSync(dir).flatMap((n) => {
    const p = join(dir, n)
    return statSync(p).isDirectory() ? walk(p) : [p]
  })

const files = [...walk('src'), ...walk('docs'), 'index.html', 'README.md', 'CLAUDE.md']
let bad = 0
for (const f of files) {
  const text = readFileSync(f, 'utf8')
  for (const t of terms) if (text.includes(t)) (console.error(`${f}: 금칙어 포함`), bad++)
  for (const re of generic) if (re.test(text)) (console.error(`${f}: 연락처 패턴 ${re}`), bad++)
}
if (bad) process.exit(1)
console.log('개인정보 검사 통과')
