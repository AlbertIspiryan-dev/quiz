export const decodeHtmlEntities = (html) => {
  const tempElement = document.createElement("textarea");
  tempElement.innerHTML = html;
  return tempElement.value;
};

export const shuffleArray = (arr) => {
  return arr.sort(() => Math.random() - 0.5);
};

export const formatNumber = (number) => {
  return number > 9 ? number : `0${number}`;
};

export const getTruthyCount = (arr, key) => {
  const truthyCount = arr.reduce((count, item) => {
    if (item[key]) return count + 1;
    return count;
  }, 0);
  return truthyCount;
};
