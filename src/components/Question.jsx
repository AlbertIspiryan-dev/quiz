import { decodeHtmlEntities, formatNumber } from "../utility/helpers";
import Paragraph from "./Paragraph.jsx";
import Title from "./Title.jsx";
import Tooltip from "./Tooltip.jsx";

export default function Question({ question, activeIndex }) {
  return (
    <>
      <Title>Questions {formatNumber(activeIndex + 1)}</Title>
      <Tooltip>{question.difficulty}</Tooltip>
      <Paragraph>{decodeHtmlEntities(question.question)}</Paragraph>
    </>
  );
}
