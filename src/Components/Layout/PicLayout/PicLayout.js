import React, { useState, useEffect } from "react";
import { Container, PicturesBlocK, Pictures, Images } from "./styles/index";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPicturesData } from "../../../store/actions/catPicturesActuions";
import ReadMoreButton from "../../../UI/ReadMoreButton/ReadMoreButton";

const PicLayout = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const catPictures = useSelector((state) => state.pictures);
  const [perPage, setPerPage] = useState(1);

  useEffect(() => {
    dispatch(
      getPicturesData({
        params: { category_ids: id, limit: 10, perPage, order: "desc" },
      })
    );
  }, [dispatch, id, perPage]);

  useEffect(() => {
    setPerPage(1);
  }, [id]);

  const picsPerPostHandler = () => {
    setPerPage(perPage + 1);
  };

  return (
    <Container>
      <PicturesBlocK>
        {catPictures?.map((cat, i) => (
          <Pictures key={i}>
            <Images src={cat.url} alt={cat.title} />
          </Pictures>
        ))}
      </PicturesBlocK>
      <ReadMoreButton picsPerPostHandler={picsPerPostHandler} />
    </Container>
  );
};

export default PicLayout;
