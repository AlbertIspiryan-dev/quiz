import { useQuiz } from "../store/quiz-context.jsx";
import { categories } from "../utility/data";
import Paragraph from "./Paragraph.jsx";
import Button from "./Button.jsx";
import { useRef } from "react";

export default function Categories() {
  const { category, selectCategory, startQuiz } = useQuiz();
  const categoriesRef = useRef();

  return (
    <div className="w-400 my-5 w-full h-full flex gap-x-8 gap-y-10 ml-0 flex-wrap items-center justify-center">
      <Paragraph>Pick a Category</Paragraph>
      <select
        onChange={() => selectCategory(categoriesRef.current.value)}
        className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        ref={categoriesRef}
      >
        {categories.map((category) => (
          <option key={category.value} value={category.value}>
            {category.text}
          </option>
        ))}
      </select>
      <div>
        <Button disabled={!category} onClick={startQuiz}>
          Start
        </Button>
      </div>
    </div>
  );
}
