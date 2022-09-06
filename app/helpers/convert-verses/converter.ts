const exceptedCharacters = [".", ",", ";", ":", "!", "?", '"', "\n"];

const parsePunct = (punct: string) => {
  if (exceptedCharacters.includes(punct)) {
    if (punct === "-" || punct === '"' || punct === "\n") {
      return `${punct}`;
    } else {
      return `${punct} `;
    }
  }

  return "";
};

export const convertText = (text: string) => {
  let newString = "";
  const words = text.split(" ");

  words.forEach((word, index) => {
    const scrubbedWordMatch = word.match(/[a-zA-Z]+/);
    let leadingCharacter = word[0];

    // 1. Get punctuation at beginning
    if (exceptedCharacters.includes(leadingCharacter)) {
      newString += parsePunct(leadingCharacter);
    }

    if (parseInt(leadingCharacter)) {
      newString += `${leadingCharacter} `;
    }

    // 2. Get the first letter of the word anc cap it or the number
    if (scrubbedWordMatch) {
      const scrubbedWord = scrubbedWordMatch[0];
      leadingCharacter = scrubbedWord[0];
      newString += leadingCharacter.toUpperCase();

      // 3. Get any ending punctuation
      const lastCharacter = word[word.length - 1];
      if (exceptedCharacters.includes(lastCharacter)) {
        if (words[index + 1] === "\n") {
          newString += parsePunct(lastCharacter).trim();
        } else {
          newString += parsePunct(lastCharacter);
        }
      }
    }
  });

  const trimmedString = newString.trim();
  return trimmedString;
};
