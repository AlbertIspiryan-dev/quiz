import { useQuiz } from "../store/quiz-context.jsx";
import { shuffleArray } from "../utility/helpers";
import { useCallback } from "react";
import Question from "./Question";
import Answer from "./Answer";

export default function Questions({ questions }) {
  const { activeQuestionIndex, addAnswer } = useQuiz();
  const activeQuestion = questions[activeQuestionIndex];
  const activeQuestionAnswers = [
    ...activeQuestion.incorrect_answers,
    activeQuestion.correct_answer,
  ];

  const handelSelectAnswer = useCallback(
    (answer) => {
      const answerResule = {
        answer,
        correctAnswer: activeQuestion.correct_answer,
        question: activeQuestion.question,
        isCorrect: answer === activeQuestion.correct_answer,
      };
      addAnswer(answerResule);
    },
    [activeQuestionIndex]
  );

  return (
    <>
      <Question question={activeQuestion} activeIndex={activeQuestionIndex} />
      <div className="w-full h-full flex gap-x-8 gap-y-10 ml-0 flex-wrap items-center justify-center">
        {shuffleArray(activeQuestionAnswers).map((answer) => (
          <Answer
            key={answer}
            answer={answer}
            onSelectAnswer={handelSelectAnswer}
          />
        ))}
      </div>
    </>
  );
}
