import React, { Fragment, useEffect } from "react";
import SideMenu from "./Components/Layout/SideMenu/SideMenu";
import { useSelector, useDispatch } from "react-redux";
import { getCatCategories } from "./store/actions/catCategoriesActions";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import PicGallery from "./Pages/PicGallery";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding:0;
  }
`;

const App = () => {
  const dispatch = useDispatch();

  const categories = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(getCatCategories());
  }, [dispatch]);

  return (
    <Fragment>
      <GlobalStyle />
      <Container>
        <SideMenu categories={categories} />
        <PicGallery />
      </Container>
    </Fragment>
  );
};

export default App;
