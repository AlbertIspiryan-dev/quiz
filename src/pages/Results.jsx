import useLocalStorage from "../hooks/useStorage";
import { Disclosure } from "@headlessui/react"
// import Result from "../components/Result";
import Title from "../components/Title";
import { getTruthyCount } from "../utility/helpers";

export default function Results() {
  const [quizzes] = useLocalStorage("quizzes", []);

  return (
    <div className="max-w-5xl mx-auto py-32 px-4">
      <Title classes="mb-24 text-center">Results</Title>
      {quizzes.map((quiz) => {
        <Disclosure key={quiz.id}>
          {() => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                <span>What is your refund policy?</span>
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                If you're unhappy with your purchase for any reason, email us
                within 90 days and we'll refund you in full, no questions asked.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      
        return <div className="w-full p-6 bg-neutral-50 border border-gray-200 rounded-lg mb-4" key={quiz.id}>
          <div className="flex items-ceter justify-between gap-4 mb-6">
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {quiz.categoryName}
            </h2>

            <span>
              Result: {getTruthyCount(quiz.answers, 'isCorrect')} / { quiz.answers.length }
            </span>
          </div>
          
          <Disclosure key={quiz.id}>
            {() => (
              <>
                <Disclosure.Button className="flex justify-between rounded-lg bg-neutral-100 hover:bg-emerald-light hover:border-emerald-light hover:text-primary-dark border-emerald text-slate-900 font-semibold px-4 py-2">
                  Show my answers
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pb-2 pt-4">
                  {quiz.answers.map((question) => {
                    return <div key={quiz.id + question.answer} className="mb-8">
                      <p className={`text-lg font-bold ${question.isCorrect ? 'text-primary' : 'text-red-700'}`}>{ question.question }</p>

                      <div className="mt-2">
                        <p className="mb-2">
                          <b>Answer:</b> {question.correctAnswer}
                        </p>
                        {!question.isCorrect && <p><b>Your answer:</b> {question.answer}</p>}
                      </div>
                    </div>
                  })}

                  

                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      })}

      
    </div>
  );
}
