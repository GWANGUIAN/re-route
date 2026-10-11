export interface Avatar {
  id: string
  name: string
  /** 한 줄 모티브 설명 */
  note: string
  kind: 'mascot' | 'sd'
}

/**
 * VRChat 팬캐릭터 아바타. 이미지는 public/avatars/<id>.webp (480px).
 * 새 캐릭터는 여기에 한 줄 추가하고 이미지를 넣으면 됩니다.
 */
export const avatars: Avatar[] = [
  { id: 'bbanyang', name: '빠냥이', note: '삼색 고양이', kind: 'mascot' },
  { id: 'bbogles', name: '뽀글스', note: '두건 쓴 뱁새', kind: 'mascot' },
  { id: 'binde', name: '빈대', note: '빈대', kind: 'mascot' },
  { id: 'bongbabi', name: '봉밥이', note: '밥풀', kind: 'mascot' },
  { id: 'byeolnim', name: '별님', note: '반짝이는 별', kind: 'mascot' },
  { id: 'danggo', name: '당고', note: '당고', kind: 'mascot' },
  { id: 'dolmengyi', name: '돌멩이', note: '웃는 돌멩이', kind: 'mascot' },
  { id: 'dooboo', name: '두부', note: '털모자 쓴 두부', kind: 'mascot' },
  { id: 'ggoboong', name: '꼬붕', note: '호랑이', kind: 'mascot' },
  { id: 'gureumi', name: '구르미', note: '안경 쓴 구름', kind: 'mascot' },
  { id: 'haepi', name: '해피', note: '해파리', kind: 'mascot' },
  { id: 'hetbyongyi', name: '햇뵹이', note: '병아리', kind: 'mascot' },
  { id: 'keuang', name: '크앙이', note: '크앙!', kind: 'mascot' },
  { id: 'ligel', name: '리젤', note: '올빼미 천사', kind: 'mascot' },
  { id: 'manueli', name: '마늘이', note: '마늘', kind: 'mascot' },
  { id: 'moongdoli', name: '뭉돌이', note: '뭉돌이 / 뭉순이', kind: 'mascot' },
  { id: 'myurang', name: '뮤랑이', note: '펭귄', kind: 'mascot' },
  { id: 'rapyi', name: '랖이', note: '고래', kind: 'mascot' },
  { id: 'sharke', name: '샤케', note: '아기 상어', kind: 'mascot' },
  { id: 'shibaggu', name: '시바꺼', note: '시바견', kind: 'mascot' },
  { id: 'taconyangyi', name: '타코냥이', note: '고양이 + 문어', kind: 'mascot' },
  { id: 'tamago', name: '타마고', note: '삶은 계란 고양이', kind: 'mascot' },
  { id: 'tbagyi', name: '티백이', note: '티백 강아지', kind: 'mascot' },
  { id: 'tulegi', name: '털애기', note: '털뭉치', kind: 'mascot' },
  { id: 'tulegi-v2', name: '털애기 v2', note: '털뭉치 2호', kind: 'mascot' },
  { id: 'wonyang', name: '워냥이', note: '고양이', kind: 'mascot' },
  { id: 'woogom', name: '우곰', note: '우주비행사 곰', kind: 'mascot' },
  { id: 'yikki', name: '이끼', note: '이끼', kind: 'mascot' },
  { id: 'yongboli', name: '용볼이', note: '드래곤볼 마스코트', kind: 'mascot' },
  { id: 'kanosd', name: '카노 SD', note: '야구복 SD', kind: 'sd' },
  { id: 'yushak', name: '유샥크 SD', note: '야구복 SD', kind: 'sd' },
  { id: 'nanwoni', name: '난워니 SD', note: '야구복 SD', kind: 'sd' },
  { id: 'jumengyi', name: '쥬멩이 SD', note: '축구복 SD', kind: 'sd' },
  { id: 'hiki', name: '히키 SD', note: '야구복 SD', kind: 'sd' },
  { id: 'jaenin', name: '재닌 SD', note: '골키퍼 SD', kind: 'sd' },
]
