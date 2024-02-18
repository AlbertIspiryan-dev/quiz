import { v4 as uuidv4 } from 'uuid';
import { getTruthyCount } from "../utility/helpers.js";
import { useQuiz } from "../store/quiz-context.jsx";
import useLocalStorage from "../hooks/useStorage";
import Paragraph from "./Paragraph.jsx";
import { useEffect } from "react";
import Button from "./Button.jsx";
import Title from "./Title.jsx";

export default function Header() {
  const { answers, category, resetState } = useQuiz();
  const [quizzes, setQuizzes] = useLocalStorage("quizzes", []);

  useEffect(() => {
    const quizzeObject = {
      id: uuidv4(),
      categoryName: category.text,
      answers
    } 
    
    setQuizzes([quizzeObject, ...quizzes]);
  }, []);

  return (
    <div>
      <Title classes="mb-36">Thanks you</Title>
      <div>
        <Paragraph classes="mb-20">
          Your score: {getTruthyCount(answers, "isCorrect")} / {answers.length}
        </Paragraph>

        <Button onClick={resetState}>Back to Home</Button>
      </div>
    </div>
  );
}
