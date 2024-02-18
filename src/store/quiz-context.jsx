import { createContext, useReducer, useContext } from "react";
import { actions } from "../utility/data";

const initialState = {
  activeQuestionIndex: 0,
  answers: [],
  category: null,
  quizStarted: false,
};

const QuizContext = createContext({
  activeQuestionIndex: 0,
  answers: [],
  category: null,
  quizStarted: false,
  addAnswer: () => {},
  selectCategory: () => {},
  startQuiz: () => {},
  resetState: () => {},
});

export const useQuiz = () => useContext(QuizContext);

function quizReducer(state, action) {
  if (action.type === actions.SELECT_CATEGORY) {
    return {
      ...state,
      category: action.payload,
    };
  }

  if (action.type === actions.START_QUIZ) {
    return {
      ...state,
      quizStarted: true,
    };
  }

  if (action.type === actions.ADD_ANSWER) {
    const updatedAnswers = [...state.answers];
    updatedAnswers.push({ ...action.payload });
    const newIndex = state.activeQuestionIndex + 1;
    return {
      ...state,
      answers: updatedAnswers,
      activeQuestionIndex: newIndex,
    };
  }

  if (action.type === actions.RESET_STATE) {
    return initialState;
  }

  return state;
}

export default function QuizContextProvider({ children }) {
  const [quizState, quizDispatch] = useReducer(quizReducer, initialState);

  function handleSelectCategory(category) {
    quizDispatch({
      type: actions.SELECT_CATEGORY,
      payload: category,
    });
  }

  function handleStartQuiz() {
    quizDispatch({
      type: actions.START_QUIZ,
    });
  }

  function handleAddAnswer(answer) {
    quizDispatch({
      type: actions.ADD_ANSWER,
      payload: answer,
    });
  }

  function handleResetState() {
    quizDispatch({
      type: actions.RESET_STATE,
    });
  }

  const values = {
    answers: quizState.answers,
    activeQuestionIndex: quizState.activeQuestionIndex,
    category: quizState.category,
    quizStarted: quizState.quizStarted,
    addAnswer: handleAddAnswer,
    selectCategory: handleSelectCategory,
    startQuiz: handleStartQuiz,
    resetState: handleResetState,
  };

  return <QuizContext.Provider value={values}>{children}</QuizContext.Provider>;
}
