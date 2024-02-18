import { useQuiz } from "../store/quiz-context.jsx";
import Categories from "../components/Categories";
import Quiz from "../components/Quiz";

export default function Home() {
  const { quizStarted } = useQuiz();
  return <>{quizStarted ? <Quiz /> : <Categories />}</>;
}
