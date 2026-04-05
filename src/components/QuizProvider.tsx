"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";

interface QuizContextType {
  isOpen: boolean;
  openQuiz: () => void;
  closeQuiz: () => void;
}

const QuizContext = createContext<QuizContextType>({
  isOpen: false,
  openQuiz: () => {},
  closeQuiz: () => {},
});

export function useQuiz() {
  return useContext(QuizContext);
}

export default function QuizProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openQuiz = useCallback(() => setIsOpen(true), []);
  const closeQuiz = useCallback(() => setIsOpen(false), []);

  return (
    <QuizContext.Provider value={{ isOpen, openQuiz, closeQuiz }}>
      {children}
    </QuizContext.Provider>
  );
}
