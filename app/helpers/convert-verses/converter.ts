const exceptedCharacters = [".", ',', ';', ':', '!', '?', '"', '\n'];

const parsePunct = (punct: string) => {
  if (exceptedCharacters.includes(punct)) {
    if (punct === '.' || punct === '-' || punct === '"') {
      return `${punct}`;
    } else {
      return `${punct} `;
    }
  }

  return '';
};

// const parseWordPunct = (word: string) => {
//   let exceptedCharacterIndex = -1;
//   let stringToAdd = "";

//   exceptedCharacters.forEach((char) => {
//     if (word.includes(char)) {
//       exceptedCharacterIndex = word.indexOf(char);
//       if (char === '.' || char === '-' || char === '"') {
//         // console.log('char len', char.length);
//         // console.log('char', char);
//         stringToAdd = `${word[exceptedCharacterIndex]}`;
//         // console.log('stringtoadd len', stringToAdd.length);
//         // console.log('stringtoadd', stringToAdd);
//       } else {
//         stringToAdd = `${word[exceptedCharacterIndex]} `;
//       }
//     }
//   });

//   return stringToAdd;
// }


export const convertText = (text: string) => {
  let newString = "";
  const words = text.split(" ");

  words.forEach((word) => {
    const scrubbedWordMatch = word.match(/[a-zA-Z]+/);
    let leadingCharacter;

    // 1. Get punctuation at beginning


    // 2. Get the first letter of the word anc cap it or the number
    if (scrubbedWordMatch) {
      const scrubbedWord = scrubbedWordMatch[0];
      leadingCharacter = scrubbedWord[0];
      // console.log('leadingCharacter', leadingCharacter);

      // If the word has no punctuation at the beginning
      if (leadingCharacter === word[0]) {
        newString += leadingCharacter.toUpperCase();
      } else {
        newString += parsePunct(word);
      }

      if (parseInt(leadingCharacter)) {
        newString += " ";
      }

      // 3. Get any ending punctuation
    }
  });

  return newString;

  // words.forEach((word) => {});

  // Array.from(text).forEach((character, index) => {
  //   if (exceptedCharacters.includes(character)) {
  //     newString += parsePunct(character);
  //   } else if (parseInt(character)) {
  //     newString += `${character} `;
  //   } else {
  //     newString += `${character.toUpperCase()}`;
  //     index = Array.from(character).findIndex((char) => char === ' ', index) + 1;
  //   }
  // });

  // return newString;

  // let nextWordIndex = -1;

  // return Array.from(text).reduce((newString, currentValue, index, textArray) => {
  //   if (nextWordIndex <= index) {
  //     if (exceptedCharacters.includes(currentValue)) {
  //       newString += parsePunct(currentValue);
  //     } else if (parseInt(currentValue)) {
  //       newString += `${currentValue} `;
  //     } else {
  //       newString += `${currentValue.toUpperCase()}`;
  //       const currentGlobalIndex = index;
  //       const trimmedTextArray = textArray.slice(index);
  //       nextWordIndex = trimmedTextArray.findIndex((char) => {
  //         if (char === ' ' || exceptedCharacters.includes(char)) {
  //           return true;
  //         }
  //         return false;
  //       }) + currentGlobalIndex + 1;
  //     }
  //   }

  //   return newString;
  // }, '');
};
