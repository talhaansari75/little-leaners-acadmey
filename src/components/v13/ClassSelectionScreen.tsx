import { useState } from "react";
import {
  LEARNING_CLASSES,
  setSelectedClass,
  type LearningClass,
} from "@/lib/academy/classSelection";

type Props = {
  onSelected?: (className: LearningClass) => void;
  allowCancel?: boolean;
  onCancel?: () => void;
};

const CLASS_INFO: Record<
  LearningClass,
  { emoji: string; subtitle: string }
> = {
  Playgroup: {
    emoji: "🧸",
    subtitle: "Play, colors, shapes and first discoveries",
  },
  Nursery: {
    emoji: "🌱",
    subtitle: "Letters, numbers, colors and rhymes",
  },
  "KG-1": {
    emoji: "📚",
    subtitle: "Phonics, words, reading and early maths",
  },
  "KG-2": {
    emoji: "🚀",
    subtitle: "Spelling, reading, maths and science",
  },
  "Class 1": {
    emoji: "⭐",
    subtitle: "Reading, writing, grammar, maths and science",
  },
};

export function ClassSelectionScreen({
  onSelected,
  allowCancel = false,
  onCancel,
}: Props) {
  const [selected, setSelected] = useState<LearningClass | null>(null);

  const choose = (className: LearningClass) => {
    setSelected(className);
    setSelectedClass(className);
    onSelected?.(className);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-auto bg-slate-950/90 p-4">
      <section className="panel w-full max-w-2xl rounded-[2rem] p-5 shadow-2xl">
        <div className="text-center">
          <div className="text-6xl">🎓</div>
          <h1 className="mt-2 font-display text-3xl text-fg">
            Choose Your Class
          </h1>
          <p className="mt-2 text-sm text-muted">
            Choose your child&apos;s class. Academy content and progress will
            stay separate for each class.
          </p>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {LEARNING_CLASSES.map((className) => {
            const info = CLASS_INFO[className];
            const active = selected === className;

            return (
              <button
                key={className}
                type="button"
                onClick={() => choose(className)}
                className={`rounded-3xl border p-4 text-left transition ${
                  active
                    ? "border-primary bg-primary/10 ring-2 ring-primary"
                    : "border-slate-200 bg-white"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-4xl">{info.emoji}</span>
                  <span>
                    <strong className="block text-lg text-fg">
                      {className}
                    </strong>
                    <span className="block text-xs text-muted">
                      {info.subtitle}
                    </span>
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {allowCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="mt-4 w-full rounded-2xl bg-slate-100 px-4 py-3 font-bold text-slate-700"
          >
            Cancel
          </button>
        )}
      </section>
    </div>
  );
}
