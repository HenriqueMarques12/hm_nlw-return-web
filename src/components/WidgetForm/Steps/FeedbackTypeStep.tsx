import React from "react";
import { FeedbackType, feedbackTypes } from "..";
import { ClosedButton } from "../../ClosedButton";

interface FeedbackTypeStepProps {
  onFeedbackTypeChange: (type: FeedbackType) => void;
}

export function FeedbackTypeStep({
  onFeedbackTypeChange,
}: FeedbackTypeStepProps) {
  return (
    <>
      <header>
        <span className="text-xl leading-6">Deixe seu comentário</span>
        <ClosedButton />
      </header>
      <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button
              className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
              type="button"
              key={key}
              onClick={() => onFeedbackTypeChange(key as FeedbackType)}
            >
              <img src={value.Image.source} alt={value.Image.alt} />
              <span>{value.title}</span>
            </button>
          );
        })}
      </div>
    </>
  );
}
