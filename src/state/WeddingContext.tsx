/* eslint-disable react-refresh/only-export-components */
import { createContext, type ReactNode, useContext, useEffect, useMemo, useState } from 'react';
import { weddingTasks } from '../data/tasks.ts';

type WeddingState = {
  weddingDate: string;
  completedTaskIds: string[];
};

type WeddingContextValue = WeddingState & {
  setWeddingDate: (date: string) => void;
  toggleTask: (taskId: string) => void;
  resetPlan: () => void;
  progress: number;
};

const STORAGE_KEY = 'wedding-map-state-v1';

const WeddingContext = createContext<WeddingContextValue | null>(null);

const initialState: WeddingState = {
  weddingDate: '',
  completedTaskIds: [],
};

function readStoredState(): WeddingState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);

    if (!raw) {
      return initialState;
    }

    const parsed = JSON.parse(raw) as Partial<WeddingState>;

    return {
      weddingDate: typeof parsed.weddingDate === 'string' ? parsed.weddingDate : '',
      completedTaskIds: Array.isArray(parsed.completedTaskIds) ? parsed.completedTaskIds : [],
    };
  } catch {
    return initialState;
  }
}

export function WeddingProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<WeddingState>(readStoredState);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const value = useMemo<WeddingContextValue>(() => {
    const completedCount = state.completedTaskIds.length;
    const progress = Math.round((completedCount / weddingTasks.length) * 100);

    return {
      ...state,
      progress,
      setWeddingDate: (date) => {
        setState((current) => ({ ...current, weddingDate: date }));
      },
      toggleTask: (taskId) => {
        setState((current) => {
          const isCompleted = current.completedTaskIds.includes(taskId);

          return {
            ...current,
            completedTaskIds: isCompleted
              ? current.completedTaskIds.filter((id) => id !== taskId)
              : [...current.completedTaskIds, taskId],
          };
        });
      },
      resetPlan: () => {
        setState(initialState);
      },
    };
  }, [state]);

  return <WeddingContext.Provider value={value}>{children}</WeddingContext.Provider>;
}

export function useWedding() {
  const value = useContext(WeddingContext);

  if (!value) {
    throw new Error('useWedding must be used inside WeddingProvider');
  }

  return value;
}
