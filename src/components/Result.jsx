export default function Result({ data }) {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Question</th>
            <th>Answer</th>
            <th>Correct answer</th>
            <th>Is correct</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr key={item.question}>
                <td>{item.question}</td>
                <td>{item.answer}</td>
                <td>{item.correctAnswer}</td>
                <td>{item.isCorrect ? "Correct" : "Incorrect"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
