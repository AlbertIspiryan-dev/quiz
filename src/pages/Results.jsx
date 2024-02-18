import useLocalStorage from "../hooks/useStorage";
import Result from "../components/Result";

export default function Results() {
  const [quizzes] = useLocalStorage("quizzes", []);
  return (
    <>
      {quizzes.map((questions, i) => {
        return <Result key={i} data={questions}></Result>;
      })}
    </>
  );
}
