import { decodeHtmlEntities } from "../utility/helpers";

export default function Answers({ answer, onSelectAnswer }) {
  return (
    <div className="w-full h-full flex gap-x-8 gap-y-10 ml-0 flex-wrap items-center justify-center">
      <button onClick={() => onSelectAnswer(answer)}>
        {decodeHtmlEntities(answer)}
      </button>
    </div>
  );
}
