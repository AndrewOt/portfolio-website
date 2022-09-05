const exceptedCharacters = ["."];

export const convertText = (text: string) => {
  let newString: string = "";
  const words = text.split(" ");

  words.forEach((word) => {
    let exceptedCharacterIndex = -1;
    let leadingCharacter = word[0];
    exceptedCharacters.forEach((char) => {
      if (word.includes(char)) {
        exceptedCharacterIndex = word.indexOf(char);
      }
    });

    newString += leadingCharacter.toUpperCase();

    if (parseInt(leadingCharacter)) {
      newString += " ";
    }

    if (exceptedCharacterIndex > -1) {
      newString += word[exceptedCharacterIndex];
    }
  });

  return newString;
};
