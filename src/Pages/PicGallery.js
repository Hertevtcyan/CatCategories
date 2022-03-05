import React from "react";
import { Switch, Route } from "react-router-dom";
import PicLayout from "../Components/Layout/PicLayout/PicLayout";

const PicGallery = () => {
  return (
    <Switch>
      <Route path={["/", "/:id"]} exact={true} component={PicLayout} />
    </Switch>
  );
};

export default PicGallery;
