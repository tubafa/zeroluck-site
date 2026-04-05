"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useQuiz } from "./QuizProvider";
import Cal from "@calcom/embed-react";

const TOTAL_STEPS = 6;

interface QuizAnswers {
  niche: string;
  companySize: string;
  marketing: string;
  processes: string[];
  revenue: string;
  mainPain: string;
}

const INITIAL_ANSWERS: QuizAnswers = {
  niche: "",
  companySize: "",
  marketing: "",
  processes: [],
  revenue: "",
  mainPain: "",
};

export default function QuizModal() {
  const { isOpen, closeQuiz } = useQuiz();
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<QuizAnswers>(INITIAL_ANSWERS);
  const [otherText, setOtherText] = useState("");
  const [showResult, setShowResult] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Reset on open
  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setAnswers(INITIAL_ANSWERS);
      setOtherText("");
      setShowResult(false);
    }
  }, [isOpen]);

  const goNext = useCallback(() => {
    if (step < TOTAL_STEPS) {
      setStep((s) => s + 1);
      setOtherText("");
    } else {
      // Generate lead ID and save to localStorage
      const leadId = `lead_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`;
      const leadData = {
        id: leadId,
        answers: { ...answers },
        timestamp: new Date().toISOString(),
      };
      localStorage.setItem("zeroluck_lead", JSON.stringify(leadData));
      console.log("Lead created:", leadData);

      // Also save quiz data separately (legacy)
      const data = { ...answers, completedAt: new Date().toISOString() };
      localStorage.setItem("zeroluck_quiz", JSON.stringify(data));
      console.log("Quiz completed:", data);
      setShowResult(true);
    }
  }, [step, answers]);

  const goBack = useCallback(() => {
    if (showResult) {
      setShowResult(false);
    } else if (step > 1) {
      setStep((s) => s - 1);
      setOtherText("");
    }
  }, [step, showResult]);

  const selectOption = (key: keyof QuizAnswers, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
    goNext();
  };

  const selectOther = (key: keyof QuizAnswers) => {
    if (otherText.trim()) {
      setAnswers((prev) => ({ ...prev, [key]: otherText.trim() }));
      goNext();
    }
  };

  const toggleProcess = (value: string) => {
    setAnswers((prev) => {
      let processes = [...prev.processes];
      if (value === "Ничего из этого") {
        processes = ["Ничего из этого"];
      } else {
        processes = processes.filter((p) => p !== "Ничего из этого");
        if (processes.includes(value)) {
          processes = processes.filter((p) => p !== value);
        } else {
          processes.push(value);
        }
      }
      return { ...prev, processes };
    });
  };

  const progressPercent = showResult ? 100 : ((step - 1) / TOTAL_STEPS) * 100;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) closeQuiz();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[999] flex items-center justify-center"
          style={{ background: "rgba(0,0,0,0.95)" }}
          onClick={handleOverlayClick}
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.97 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-[600px] mx-4 max-h-[90vh] overflow-y-auto rounded-sm"
            style={{
              padding: "48px",
              paddingTop: "32px",
              background: "#0a0a0a",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {/* Close button */}
            <button
              onClick={closeQuiz}
              className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors text-2xl font-console"
              aria-label="Close"
            >
              &times;
            </button>

            {/* Progress bar */}
            <div className="w-full h-1 bg-white/10 rounded-full mb-10 overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ background: "#001FFF" }}
                animate={{ width: `${progressPercent}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {/* Step indicator */}
            {!showResult && (
              <p className="font-console text-xs text-white/30 uppercase tracking-wider mb-6">
                {step} / {TOTAL_STEPS}
              </p>
            )}

            <AnimatePresence mode="wait">
              <motion.div
                key={showResult ? "result" : step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
              >
                {showResult ? (
                  <ResultScreen />
                ) : (
                  <>
                    {step === 1 && (
                      <StepNiche
                        otherText={otherText}
                        setOtherText={setOtherText}
                        onSelect={(v) => selectOption("niche", v)}
                        onOther={() => selectOther("niche")}
                      />
                    )}
                    {step === 2 && (
                      <StepCompanySize onSelect={(v) => selectOption("companySize", v)} />
                    )}
                    {step === 3 && (
                      <StepMarketing
                        otherText={otherText}
                        setOtherText={setOtherText}
                        onSelect={(v) => selectOption("marketing", v)}
                        onOther={() => selectOther("marketing")}
                      />
                    )}
                    {step === 4 && (
                      <StepProcesses
                        selected={answers.processes}
                        onToggle={toggleProcess}
                        onNext={goNext}
                      />
                    )}
                    {step === 5 && (
                      <StepRevenue onSelect={(v) => selectOption("revenue", v)} />
                    )}
                    {step === 6 && (
                      <StepPain
                        otherText={otherText}
                        setOtherText={setOtherText}
                        onSelect={(v) => selectOption("mainPain", v)}
                        onOther={() => selectOther("mainPain")}
                      />
                    )}
                  </>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Back button */}
            {(step > 1 || showResult) && (
              <button
                onClick={goBack}
                className="font-console text-sm text-white/40 hover:text-white/70 transition-colors mt-8"
              >
                &larr; Назад
              </button>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ----- Option Button ----- */
function OptionBtn({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <motion.button
      onClick={onClick}
      className="w-full text-left font-console text-sm text-white/80 px-5 py-4 border border-white/10 hover:border-accent hover:bg-accent/10 transition-all duration-200"
      whileHover={{ x: 4 }}
      whileTap={{ scale: 0.98 }}
    >
      {label}
    </motion.button>
  );
}

/* ----- Toggle Button (for multi-select) ----- */
function ToggleBtn({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <motion.button
      onClick={onClick}
      className={`w-full text-left font-console text-sm px-5 py-4 border transition-all duration-200 ${
        active
          ? "border-accent bg-accent/15 text-white"
          : "border-white/10 text-white/80 hover:border-accent/50"
      }`}
      whileTap={{ scale: 0.98 }}
    >
      <span className="flex items-center gap-3">
        <span
          className={`w-4 h-4 border flex items-center justify-center shrink-0 ${
            active ? "border-accent bg-accent" : "border-white/30"
          }`}
        >
          {active && (
            <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
              <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </span>
        {label}
      </span>
    </motion.button>
  );
}

/* ----- "Other" input block ----- */
function OtherInput({
  otherText,
  setOtherText,
  onSubmit,
}: {
  otherText: string;
  setOtherText: (v: string) => void;
  onSubmit: () => void;
}) {
  return (
    <div className="space-y-3 mt-2">
      <input
        type="text"
        value={otherText}
        onChange={(e) => setOtherText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && onSubmit()}
        placeholder="Введите свой вариант..."
        autoFocus
        className="w-full font-console text-sm text-white bg-transparent border border-white/20 focus:border-accent px-5 py-4 outline-none transition-colors"
      />
      <button
        onClick={onSubmit}
        disabled={!otherText.trim()}
        className="font-console text-sm font-bold uppercase px-6 py-3 bg-accent text-white disabled:opacity-30 disabled:cursor-not-allowed transition-opacity"
      >
        Далее
      </button>
    </div>
  );
}

/* ----- Step Components ----- */

function StepNiche({
  otherText,
  setOtherText,
  onSelect,
  onOther,
}: {
  otherText: string;
  setOtherText: (v: string) => void;
  onSelect: (v: string) => void;
  onOther: () => void;
}) {
  const [showOther, setShowOther] = useState(false);
  return (
    <div>
      <h3 className="font-console text-xl md:text-2xl font-bold text-white uppercase mb-6">
        В какой сфере ваш бизнес?
      </h3>
      <div className="space-y-3">
        <OptionBtn label="Услуги (медицина, юристы, салоны, образование)" onClick={() => onSelect("Услуги")} />
        <OptionBtn label="Торговля / E-commerce" onClick={() => onSelect("Торговля / E-commerce")} />
        <OptionBtn label="HoReCa (рестораны, отели, кафе)" onClick={() => onSelect("HoReCa")} />
        <OptionBtn label="Строительство / Недвижимость" onClick={() => onSelect("Строительство / Недвижимость")} />
        <OptionBtn label="IT / Digital" onClick={() => onSelect("IT / Digital")} />
        {!showOther ? (
          <OptionBtn label="Другое" onClick={() => setShowOther(true)} />
        ) : (
          <OtherInput otherText={otherText} setOtherText={setOtherText} onSubmit={onOther} />
        )}
      </div>
    </div>
  );
}

function StepCompanySize({ onSelect }: { onSelect: (v: string) => void }) {
  return (
    <div>
      <h3 className="font-console text-xl md:text-2xl font-bold text-white uppercase mb-6">
        Сколько человек в компании?
      </h3>
      <div className="space-y-3">
        <OptionBtn label="Только я" onClick={() => onSelect("Только я")} />
        <OptionBtn label="2–5" onClick={() => onSelect("2–5")} />
        <OptionBtn label="6–20" onClick={() => onSelect("6–20")} />
        <OptionBtn label="20+" onClick={() => onSelect("20+")} />
      </div>
    </div>
  );
}

function StepMarketing({
  otherText,
  setOtherText,
  onSelect,
  onOther,
}: {
  otherText: string;
  setOtherText: (v: string) => void;
  onSelect: (v: string) => void;
  onOther: () => void;
}) {
  const [showOther, setShowOther] = useState(false);
  return (
    <div>
      <h3 className="font-console text-xl md:text-2xl font-bold text-white uppercase mb-6">
        Кто сейчас занимается маркетингом и продажами?
      </h3>
      <div className="space-y-3">
        <OptionBtn label="Я сам всё делаю" onClick={() => onSelect("Я сам всё делаю")} />
        <OptionBtn label="Есть фрилансер / подрядчик" onClick={() => onSelect("Есть фрилансер / подрядчик")} />
        <OptionBtn label="Есть штатный сотрудник или отдел" onClick={() => onSelect("Есть штатный сотрудник или отдел")} />
        <OptionBtn label="Никто, всё на сарафанке" onClick={() => onSelect("Никто, всё на сарафанке")} />
        {!showOther ? (
          <OptionBtn label="Другое" onClick={() => setShowOther(true)} />
        ) : (
          <OtherInput otherText={otherText} setOtherText={setOtherText} onSubmit={onOther} />
        )}
      </div>
    </div>
  );
}

function StepProcesses({
  selected,
  onToggle,
  onNext,
}: {
  selected: string[];
  onToggle: (v: string) => void;
  onNext: () => void;
}) {
  const options = [
    "CRM-система",
    "Настроенная воронка продаж",
    "Скрипты для менеджеров",
    "Аналитика / сквозная отчётность",
    "Ничего из этого",
  ];
  return (
    <div>
      <h3 className="font-console text-xl md:text-2xl font-bold text-white uppercase mb-2">
        Что из этого у вас есть?
      </h3>
      <p className="font-console text-sm text-white/40 mb-6">Можно выбрать несколько</p>
      <div className="space-y-3">
        {options.map((opt) => (
          <ToggleBtn
            key={opt}
            label={opt}
            active={selected.includes(opt)}
            onClick={() => onToggle(opt)}
          />
        ))}
      </div>
      <button
        onClick={onNext}
        disabled={selected.length === 0}
        className="mt-6 font-console text-sm font-bold uppercase px-6 py-3 bg-accent text-white disabled:opacity-30 disabled:cursor-not-allowed transition-opacity"
      >
        Далее
      </button>
    </div>
  );
}

function StepRevenue({ onSelect }: { onSelect: (v: string) => void }) {
  return (
    <div>
      <h3 className="font-console text-xl md:text-2xl font-bold text-white uppercase mb-6">
        Какой примерный месячный оборот?
      </h3>
      <div className="space-y-3">
        <OptionBtn label="До $10 000" onClick={() => onSelect("До $10 000")} />
        <OptionBtn label="$10 000 – $50 000" onClick={() => onSelect("$10 000 – $50 000")} />
        <OptionBtn label="$50 000 – $200 000" onClick={() => onSelect("$50 000 – $200 000")} />
        <OptionBtn label="$200 000+" onClick={() => onSelect("$200 000+")} />
      </div>
    </div>
  );
}

function StepPain({
  otherText,
  setOtherText,
  onSelect,
  onOther,
}: {
  otherText: string;
  setOtherText: (v: string) => void;
  onSelect: (v: string) => void;
  onOther: () => void;
}) {
  const [showOther, setShowOther] = useState(false);
  return (
    <div>
      <h3 className="font-console text-xl md:text-2xl font-bold text-white uppercase mb-6">
        Что сейчас больше всего тормозит рост?
      </h3>
      <div className="space-y-3">
        <OptionBtn label="Мало заявок / клиентов" onClick={() => onSelect("Мало заявок / клиентов")} />
        <OptionBtn label="Заявки есть, но не конвертируются в продажи" onClick={() => onSelect("Заявки есть, но не конвертируются в продажи")} />
        <OptionBtn label="Нет системы, всё держится на мне" onClick={() => onSelect("Нет системы, всё держится на мне")} />
        <OptionBtn label="Не понимаю куда идёт рекламный бюджет" onClick={() => onSelect("Не понимаю куда идёт рекламный бюджет")} />
        {!showOther ? (
          <OptionBtn label="Другое" onClick={() => setShowOther(true)} />
        ) : (
          <OtherInput otherText={otherText} setOtherText={setOtherText} onSubmit={onOther} />
        )}
      </div>
    </div>
  );
}

/* ----- Result Screen with Cal.com ----- */
function ResultScreen() {
  useEffect(() => {
    // Listen for Cal.com booking success via postMessage
    const handleMessage = (e: MessageEvent) => {
      if (
        e.data?.type === "CAL:bookingSuccessful" ||
        (typeof e.data === "string" && e.data.includes("bookingSuccessful"))
      ) {
        setTimeout(() => {
          window.location.href = "/thank-you";
        }, 2000);
      }
    };
    window.addEventListener("message", handleMessage);

    // Also try Cal.com's official callback API
    try {
      const Cal = (window as any).Cal;
      if (Cal) {
        Cal("on", {
          action: "bookingSuccessful",
          callback: () => {
            setTimeout(() => {
              window.location.href = "/thank-you";
            }, 2000);
          },
        });
      }
    } catch {
      // Cal global may not be available
    }

    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <div>
      <h3 className="font-console text-xl md:text-2xl font-bold text-white uppercase mb-3">
        Мы видим 2-3 точки роста в вашей ситуации
      </h3>
      <p className="font-console text-sm text-white/50 mb-8">
        Выберите удобное время для 15-минутного разбора
      </p>
      <div
        className="w-full overflow-hidden rounded-sm"
        style={{ minHeight: 400 }}
      >
        <Cal
          calLink="zeroluck.solutions/15minfree-ru"
          config={{
            theme: "dark",
            layout: "month_view",
          }}
          style={{ width: "100%", height: "100%", minHeight: 400 }}
        />
      </div>
    </div>
  );
}
