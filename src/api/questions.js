import axios from "../services/axios";

export const fetchQuestions = async ({ queryKey }) => {
  const response = await axios.get(`/api.php`, {
    params: { amount: 2, category: queryKey[1] },
  });
  return response.data;
};
