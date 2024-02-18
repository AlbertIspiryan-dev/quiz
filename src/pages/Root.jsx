import { Outlet } from "react-router-dom";
import { useQuiz } from "../store/quiz-context.jsx";
import Header from "../components/Header";

export default function RootLayout() {
  const { quizStarted } = useQuiz();

  return (
    <>
      {!quizStarted && <Header />}
      <Outlet />
    </>
  );
}
