import { decodeHtmlEntities } from "../utility/helpers";

export default function Answers({ answer, onSelectAnswer }) {
  return (
    <button 
      className="transition-colors border-2 text-lg p-4 hover:bg-emerald-light hover:border-emerald-light hover:text-primary-dark border-emerald text-slate-900 font-bold rounded-lg"
      onClick={() => onSelectAnswer(answer)}
    >
      {decodeHtmlEntities(answer)}
    </button>
  );
}
