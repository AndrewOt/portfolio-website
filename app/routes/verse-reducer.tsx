import React, { useState } from "react";
import { convertText } from "~/helpers/convert-verses/converter";

export default () => {
  const [verse, setVerse] = useState("");
  const [reducedVerse, setReducedVerse] = useState("");
  const handleVerseInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVerse(e.target.value);
  };

  const handleReduceClick = () => {
    setReducedVerse(convertText(verse));
  };

  return (
    <div>
      <input type="text" onChange={handleVerseInput} />
      <input
        className="button"
        type="button"
        onClick={handleReduceClick}
        value="Reduce"
      />

      <div>{reducedVerse}</div>
    </div>
  );
};
