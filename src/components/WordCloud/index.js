import React from "react";
import ReactWordcloud from "react-wordcloud";

const WordCloud = ({ words }) => {
  return (
    <ReactWordcloud
      words={words}
      options={{
        rotations: 1,
        rotationAngles: [0],
        fontFamily: "Prompt",
        fontSizes: [14, 38],
      }}
    />
  );
};

export default WordCloud;
