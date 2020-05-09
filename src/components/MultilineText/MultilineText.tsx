import React from "react";
import PageContainer from "../PageContainer/PageContainer";
import Grid from "@material-ui/core/Grid";
import { MapStateToProps, connect, ConnectedProps } from "react-redux";
import { IState } from "../../redux/interfaces/IState";
import { IAnimeBase } from "../../interfaces/IAnime";
import PopularCard from "../PopularCard/PopularCard";

interface IProps {
  text: string;
}

const MultilineText: React.FC<IProps> = ({ text }) => {
  return (
    <>
      {text.split("\\n").map((line, index) => {
        return (
          <>
            <React.Fragment key={index}>{line}</React.Fragment>
            <br />
          </>
        );
      })}
    </>
  );
};

export default MultilineText;
