import { useQuiz } from "../store/quiz-context.jsx";
import Categories from "../components/Categories";
import Quiz from "../components/Quiz";
import FloatingButton from '../components/FloatingButton.jsx';

export default function Home() {
  const { quizStarted } = useQuiz();
  return <div className="container text-center mx-auto py-32">
    {quizStarted ? <Quiz /> : <Categories />}

    <FloatingButton />
  </div>;
}
