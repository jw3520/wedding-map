import { useMemo, useState } from 'react';
import { weddingTasks } from '../data/tasks.ts';
import { useWedding } from '../state/WeddingContext.tsx';
import { formatShortDate, getDaysUntil, getDueDate } from '../utils/date.ts';

export function Timeline() {
  const { weddingDate, completedTaskIds, toggleTask } = useWedding();
  const [openTaskId, setOpenTaskId] = useState<string>(weddingTasks[0]?.id ?? '');

  const groupedTasks = useMemo(() => {
    return weddingTasks.reduce<Record<string, typeof weddingTasks>>((groups, task) => {
      groups[task.milestone] = [...(groups[task.milestone] ?? []), task];
      return groups;
    }, {});
  }, []);

  return (
    <section className="timeline-view">
      <div className="section-heading">
        <div>
          <p className="eyebrow">D-Day Roadmap</p>
          <h2>지금부터 순서대로 준비하세요</h2>
        </div>
        <span>{completedTaskIds.length}/{weddingTasks.length}</span>
      </div>

      <div className="timeline-list">
        {Object.entries(groupedTasks).map(([milestone, tasks]) => {
          const dueDate = getDueDate(weddingDate, tasks[0].offsetDays);
          const daysUntil = getDaysUntil(dueDate);

          return (
            <article className="milestone-card" key={milestone}>
              <header className="milestone-header">
                <div>
                  <p>{milestone}</p>
                  <h3>{formatShortDate(dueDate)}까지</h3>
                </div>
                <span className={daysUntil < 0 ? 'late' : 'soon'}>
                  {daysUntil < 0 ? '지났어요' : `${daysUntil}일 남음`}
                </span>
              </header>

              <div className="task-stack">
                {tasks.map((task) => {
                  const isDone = completedTaskIds.includes(task.id);
                  const isOpen = openTaskId === task.id;

                  return (
                    <div className={`task-card ${isDone ? 'done' : ''}`} key={task.id}>
                      <button
                        className="task-main"
                        type="button"
                        onClick={() => setOpenTaskId(isOpen ? '' : task.id)}
                        aria-expanded={isOpen}
                      >
                        <span className="task-copy">
                          <span className="task-tag">{task.tag}</span>
                          <strong>{task.title}</strong>
                        </span>
                        <span className="chevron">{isOpen ? '접기' : '이유'}</span>
                      </button>

                      {isOpen && <p className="task-detail">{task.description}</p>}

                      <label className="done-toggle">
                        <input
                          type="checkbox"
                          checked={isDone}
                          onChange={() => toggleTask(task.id)}
                        />
                        <span>{isDone ? '완료됨' : '완료 체크'}</span>
                      </label>
                    </div>
                  );
                })}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
