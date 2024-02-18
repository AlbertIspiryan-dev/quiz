import { decodeHtmlEntities, formatNumber } from "../utility/helpers";
import Paragraph from "./Paragraph.jsx";
import Title from "./Title.jsx";
import Badge from "./Badge.jsx";

export default function Question({ question, activeIndex }) {
  return (
    <div>
      <div className="mb-20">
        <Title classes="mb-6">Questions {formatNumber(activeIndex + 1)}</Title>
        <Badge variant={question.difficulty}>{question.difficulty}</Badge>
      </div>
      <Paragraph>{decodeHtmlEntities(question.question)}</Paragraph>
    </div>
  );
}
