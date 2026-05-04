import { weddingTasks } from '../data/tasks.ts';
import { useWedding } from '../state/WeddingContext.tsx';
import { formatShortDate, getDaysUntil, getDueDate } from '../utils/date.ts';

export function Dashboard() {
  const { weddingDate, completedTaskIds, progress } = useWedding();
  const completedTasks = weddingTasks.filter((task) => completedTaskIds.includes(task.id));
  const nextTask = weddingTasks.find((task) => !completedTaskIds.includes(task.id));

  return (
    <section className="dashboard-view">
      <article className="share-card">
        <p className="eyebrow">Read-only Briefing</p>
        <h2>가족과 파트너에게 공유하기 좋은 현황판</h2>
        <p>
          수정 기능은 비활성화된 브리핑 화면입니다. 지금까지의 준비율과 다음 액션만 빠르게
          확인할 수 있어요.
        </p>
      </article>

      <article className="progress-card">
        <div className="progress-topline">
          <span>전체 준비 달성률</span>
          <strong>{progress}%</strong>
        </div>
        <div className="progress-track" aria-label={`전체 준비 달성률 ${progress}%`}>
          <span style={{ width: `${progress}%` }} />
        </div>
      </article>

      <article className="next-card">
        <p className="eyebrow">Next Up</p>
        {nextTask ? (
          <>
            <h3>{nextTask.title}</h3>
            <p>{nextTask.description}</p>
            <span>
              {formatShortDate(getDueDate(weddingDate, nextTask.offsetDays))}까지,{' '}
              {getDaysUntil(getDueDate(weddingDate, nextTask.offsetDays))}일 남음
            </span>
          </>
        ) : (
          <>
            <h3>핵심 일정 준비 완료</h3>
            <p>공유 대상에게 전체 준비가 순조롭게 마무리되었다고 보여줄 수 있어요.</p>
            <span>완료</span>
          </>
        )}
      </article>

      <article className="readonly-list">
        <div className="section-heading compact">
          <h3>완료된 핵심 일정</h3>
          <span>{completedTasks.length}개</span>
        </div>
        {completedTasks.length > 0 ? (
          completedTasks.map((task) => (
            <div className="readonly-item" key={task.id}>
              <span>✓</span>
              <p>{task.title}</p>
            </div>
          ))
        ) : (
          <p className="empty-state">아직 완료된 일정이 없습니다. 로드맵에서 준비 상태를 체크하세요.</p>
        )}
      </article>
    </section>
  );
}
