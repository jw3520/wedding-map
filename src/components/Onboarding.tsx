import { useState, type FormEvent } from 'react';
import { useWedding } from '../state/WeddingContext.tsx';
import { getIsoDateAfter } from '../utils/date.ts';

export function Onboarding() {
  const { setWeddingDate } = useWedding();
  const [selectedDate, setSelectedDate] = useState(getIsoDateAfter(240));

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setWeddingDate(selectedDate);
  };

  return (
    <main className="onboarding">
      <section className="onboarding-card">
        <div className="sparkle-orbit" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="onboarding-badge" aria-hidden="true">
          WM
        </div>
        <p className="eyebrow">Wedding Map</p>
        <h1>결혼 예정일이 언제인가요?</h1>
        <p className="intro-copy">
          날짜를 입력하면 D-Day 기준으로 준비할 일과 공유용 브리핑을 자동으로 구성해요.
        </p>

        <form onSubmit={handleSubmit} className="date-form">
          <label htmlFor="wedding-date">예식 예정일</label>
          <input
            id="wedding-date"
            type="date"
            value={selectedDate}
            min={getIsoDateAfter(1)}
            onChange={(event) => setSelectedDate(event.target.value)}
            required
          />
          <button type="submit">로드맵 만들기</button>
        </form>
        <p className="onboarding-note">가입 없이 바로 시작하고, 새로고침해도 저장됩니다.</p>
      </section>
    </main>
  );
}
