export const getQuestions = async (difficulty) => {
  const url = `https://opentdb.com/api.php?amount=10&difficulty=${difficulty}`;
  return fetch(url).then(res => res.json());
}

