import React from "react";
import { ReadMore, Button } from "./styles/index";

const ReadMoreButton = ({ picsPerPostHandler }) => {
  return (
    <ReadMore>
      <Button onClick={picsPerPostHandler}>Show more ...</Button>
    </ReadMore>
  );
};

export default ReadMoreButton;
