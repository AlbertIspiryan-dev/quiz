import { useQuiz } from "../store/quiz-context.jsx";
import { fetchQuestions } from "../api/questions";
import { useQuery } from "react-query";
import Questions from "./Questions";
import Complete from "./Complete";
import Loading from "./Loading";
import Error from "./Error";

export default function Quiz() {
  const { activeQuestionIndex, category } = useQuiz();
  const { isError, isLoading, data } = useQuery(
    ["questions", category.value],
    fetchQuestions
  );

  if (isLoading) return <Loading />;
  if (isError) return <Error />;
  if (data && activeQuestionIndex === data.results.length) return <Complete />;
  return (
    <div>
      {data && <Questions questions={data.results} />}
    </div>
  );
}
