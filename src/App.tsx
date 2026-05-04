import { useMemo, useState } from 'react';
import { Dashboard } from './components/Dashboard.tsx';
import { Onboarding } from './components/Onboarding.tsx';
import { Timeline } from './components/Timeline.tsx';
import { useWedding } from './state/WeddingContext.tsx';

type ViewMode = 'timeline' | 'share';

export function App() {
  const { weddingDate, resetPlan } = useWedding();
  const [viewMode, setViewMode] = useState<ViewMode>('timeline');

  const formattedDate = useMemo(() => {
    if (!weddingDate) {
      return '';
    }

    return new Intl.DateTimeFormat('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'short',
    }).format(new Date(`${weddingDate}T00:00:00`));
  }, [weddingDate]);

  if (!weddingDate) {
    return <Onboarding />;
  }

  return (
    <main className="app-shell">
      <section className="hero-card">
        <div>
          <p className="eyebrow">Wedding Map</p>
          <h1>우리의 결혼 준비 로드맵</h1>
          <p className="hero-date">{formattedDate}</p>
        </div>
        <button className="ghost-button" type="button" onClick={resetPlan}>
          다시 설정
        </button>
      </section>

      <nav className="tab-bar" aria-label="화면 전환">
        <button
          className={viewMode === 'timeline' ? 'active' : ''}
          type="button"
          onClick={() => setViewMode('timeline')}
        >
          로드맵
        </button>
        <button
          className={viewMode === 'share' ? 'active' : ''}
          type="button"
          onClick={() => setViewMode('share')}
        >
          공유 뷰
        </button>
      </nav>

      {viewMode === 'timeline' ? <Timeline /> : <Dashboard />}
    </main>
  );
}
