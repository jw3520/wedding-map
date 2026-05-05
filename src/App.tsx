import { useMemo, useState } from 'react';
import { Dashboard } from './components/Dashboard.tsx';
import { Onboarding } from './components/Onboarding.tsx';
import { Timeline } from './components/Timeline.tsx';
import { useWedding } from './state/WeddingContext.tsx';

type ViewMode = 'timeline' | 'share';

export function App() {
  const { weddingDate, progress, resetPlan } = useWedding();
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
        <span className="hero-glow" aria-hidden="true" />
        <div>
          <p className="eyebrow">Wedding Map</p>
          <h1>우리의 결혼 준비 로드맵</h1>
          <div className="hero-meta">
            <p className="hero-date">{formattedDate}</p>
            <span>{progress}% 준비</span>
          </div>
        </div>
        <button className="ghost-button" type="button" onClick={resetPlan}>
          다시 설정
        </button>
      </section>

      {viewMode === 'timeline' ? <Timeline /> : <Dashboard />}

      <button
        className="floating-action"
        type="button"
        onClick={() => setViewMode('share')}
        aria-label="공유 브리핑 열기"
      >
        <span aria-hidden="true">↗</span>
      </button>

      <nav className="bottom-tab-bar" aria-label="화면 전환">
        <button
          className={viewMode === 'timeline' ? 'active' : ''}
          type="button"
          onClick={() => setViewMode('timeline')}
        >
          <span aria-hidden="true">⌁</span>
          로드맵
        </button>
        <button
          className={viewMode === 'share' ? 'active' : ''}
          type="button"
          onClick={() => setViewMode('share')}
        >
          <span aria-hidden="true">◌</span>
          공유 뷰
        </button>
      </nav>
    </main>
  );
}
