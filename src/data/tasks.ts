export type WeddingTask = {
  id: string;
  milestone: string;
  offsetDays: number;
  title: string;
  description: string;
  tag: '필수' | '추천';
};

export const weddingTasks: WeddingTask[] = [
  {
    id: 'family-meeting',
    milestone: 'D-365',
    offsetDays: 365,
    title: '양가 상견례 진행',
    description:
      '양가 일정과 예산 방향을 초기에 맞춰두면 이후 웨딩홀, 스드메, 혼수 결정에서 불필요한 조율 비용을 줄일 수 있어요.',
    tag: '필수',
  },
  {
    id: 'venue-contract',
    milestone: 'D-365',
    offsetDays: 365,
    title: '웨딩홀 투어 및 계약 확정',
    description:
      '인기 날짜와 시간대는 빠르게 마감됩니다. 원하는 지역과 하객 동선을 기준으로 1년 전부터 후보를 좁히는 편이 안전해요.',
    tag: '필수',
  },
  {
    id: 'studio-dress-makeup',
    milestone: 'D-180',
    offsetDays: 180,
    title: '스드메 예약',
    description:
      '스튜디오, 드레스, 메이크업은 업체별 피크 시즌 예약 경쟁이 큽니다. 촬영 일정과 드레스 셀렉까지 고려해 6개월 전 확정이 좋아요.',
    tag: '필수',
  },
  {
    id: 'snap-dvd',
    milestone: 'D-180',
    offsetDays: 180,
    title: '본식 스냅 및 DVD 예약',
    description:
      '인기 작가와 영상 업체는 일찍 마감됩니다. 스튜디오 촬영본이 나와야 청첩장을 만들 수 있으므로 전체 제작 일정을 함께 봐야 해요.',
    tag: '추천',
  },
  {
    id: 'invitation',
    milestone: 'D-90',
    offsetDays: 90,
    title: '종이/모바일 청첩장 제작',
    description:
      '주소 취합, 문구 검수, 시안 수정, 인쇄 배송까지 시간이 필요합니다. 모바일 청첩장도 사진 보정본 확보 후 제작하는 흐름이 자연스러워요.',
    tag: '필수',
  },
  {
    id: 'wedding-band',
    milestone: 'D-90',
    offsetDays: 90,
    title: '웨딩 밴드 맞춤',
    description:
      '반지는 사이즈 조정과 각인, 제작 기간이 필요합니다. 촬영 소품으로 활용하려면 본식보다 더 앞당겨 준비하는 것이 좋아요.',
    tag: '추천',
  },
];
