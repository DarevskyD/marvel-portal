import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import AppBanner from "../../appBanner/AppBanner";
import useMarvelServices from "../../../services/MarvelService";
import Spinner from "../../spinner/Spinner";
import ErrorMessage from "../../errorMessage/ErrorMessage";

import "./singleComicPage.scss";

const SingleComicPage = () => {
  const { comicId } = useParams();
  const [comic, setComic] = useState(null);

  const { loading, error, getComic, clearError } = useMarvelServices();

  useEffect(() => {
    updateComic();
  }, [comicId]);

  const updateComic = () => {
    clearError();
    getComic(comicId).then(onComicLoaded);
  };

  const onComicLoaded = (comic) => {
    setComic(comic);
  };

  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;
  const content = !(loading || error || !comic) ? <View comic={comic} /> : null;

  return (
    <>
      <AppBanner />
      {errorMessage}
      {spinner}
      {content}
    </>
  );
};

const View = ({ comic }) => {
  const { title, description, thumbnail, pageCount, language, price } = comic;
  return (
    <div className="single-comic">
      <Helmet>
        <meta name="description" content={`${title} comics book`} />
        <title>{title}</title>
      </Helmet>
      <div className="single-comic__wrapper wrapper">
        <img src={thumbnail} alt={title} className="single-comic__img" />
        <div className="single-comic__info">
          <h2 className="single-comic__name">{title}</h2>
          <p className="single-comic__descr">{description}</p>
          <p className="single-comic__descr">{pageCount}</p>
          <p className="single-comic__descr">Language: {language}</p>
          <div className="single-comic__price">{price}</div>
        </div>
        <Link to="/marvel-portal/comics" className="single-comic__back">
          Back to all
        </Link>
      </div>
    </div>
  );
};

export default SingleComicPage;
