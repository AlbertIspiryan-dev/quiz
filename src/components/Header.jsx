import { Link } from "react-router-dom";
import Title from "./Title.jsx";

export default function Header() {
  return (
    <div className="w-full h-full flex gap-x-8 gap-y-10 ml-0 flex-wrap items-center justify-center">
      <Title>Trivia App</Title>

      <p>
        <Link to="/"> Home </Link>
      </p>
      <p>
        <Link to="/results"> Results </Link>
      </p>
    </div>
  );
}
