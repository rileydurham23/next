// deselectCharacter should remove given character from a sentence if it is the first character in that sentence
const deselectCharacter = (char: string, text: string): string => {
  const textArr = text.split("\n");
  for (let i = 0; i < textArr.length; i++) {
    // keep the whitespace count which we need to re-add while constructing sentence at last.
    const wsCounter = textArr[i].length - textArr[i].trimLeft().length;
    const txt = textArr[i].trimLeft();
    if (txt.charAt(0) === char) {
      const subs = txt.substring(2);
      textArr[i] = " ".repeat(wsCounter) + subs;
    }
  }

  return textArr.join("\n");
};

export default deselectCharacter;
