export const capitalize = (word) => {
  //letter => Letter
  const firstLetter = word.charAt(0).toUpperCase;
  const restWord = word.slice(1, word.length);
  return firstLetter + restWord;
};
