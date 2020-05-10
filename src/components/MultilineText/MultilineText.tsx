import React from "react";

interface IProps {
  text: string;
}

const MultilineText: React.FC<IProps> = ({ text }) => {
  return (
    <>
      {text.split("\\n").map((line, index) => {
        return (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        );
      })}
    </>
  );
};

export default MultilineText;
