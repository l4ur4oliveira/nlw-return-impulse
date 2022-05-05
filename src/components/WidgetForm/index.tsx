import { useState } from "react";

import bugImageUrl from '../../assets/bug.svg'
import ideaImageUrl from '../../assets/idea.svg'
import thoughtImageUrl from '../../assets/thought.svg'
import { FeedbackType } from "./Steps/FeedbackType";
import { FeedbackContent } from "./Steps/FeedbackContent";
import { FeedbackSuccess } from "./Steps/FeedbackSuccess";

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      soucer: bugImageUrl,
      alt: 'Imagem de um inseto'
    }
  },
  IDEA: {
    title: 'Ideia',
    image: {
      soucer: ideaImageUrl,
      alt: 'Imagem de uma lâmpada'
    }
  },
  OTHER: {
    title: 'Outro',
    image: {
      soucer: thoughtImageUrl,
      alt: 'Imagem de um balão de pensamento'
    }
  }
}

export type FeedbackTypes = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackTypes | null>(null)
  const [feedbackSent, setFeedbackSent] = useState(false);

  function handleRestartFeedback() {
    setFeedbackSent(false);
    setFeedbackType(null);
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

      { feedbackSent ? (
        <FeedbackSuccess onFeedbackRestart={handleRestartFeedback} />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackType onFeedbackTypeChanged={setFeedbackType} />
          ) : (
            <FeedbackContent
              feedbackType={feedbackType}
              onFeedbackRestart={handleRestartFeedback}
              onFeedbackSent={() => setFeedbackSent(true)}
            />
          )}
        </>
      )}

      <footer className="text-xs text-neutral-400">
        Feito com ♥ pela <a className="underline underline-offset-2" href="#">Rocketseat</a>
      </footer>
    </div>
  )
}