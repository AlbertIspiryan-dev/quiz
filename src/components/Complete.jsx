import { getTruthyCount } from "../utility/helpers.js";
import { useQuiz } from "../store/quiz-context.jsx";
import useLocalStorage from "../hooks/useStorage";
import Paragraph from "./Paragraph.jsx";
import { useEffect } from "react";
import Button from "./Button.jsx";
import Title from "./Title.jsx";

export default function Header() {
  const { answers, resetState } = useQuiz();
  const [quizzes, setQuizzes] = useLocalStorage("quizzes", []);

  useEffect(() => {
    setQuizzes([answers, ...quizzes]);
  }, []);

  return (
    <div className="w-full h-full flex gap-x-8 gap-y-10 ml-0 flex-wrap items-center justify-center">
      <Title>Thanks you</Title>
      <Paragraph>
        Your score is {getTruthyCount(answers, "isCorrect")} / {answers.length}
      </Paragraph>

      <div>
        <Button onClick={resetState}>Back to Home</Button>
      </div>
    </div>
  );
}
