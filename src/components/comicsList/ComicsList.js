import { useState, useEffect } from "react";
import useMarvelServices from "../../services/MarvelService";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";
import PropTypes from "prop-types";

import "./comicsList.scss";

const ComicsList = () => {
  const [comicsList, setComicsList] = useState([]);
  const [newComicsLoading, setNewComicsLoading] = useState(false);
  const [offset, setOffset] = useState(230);
  const [comicsEnded, setComicsEnded] = useState(false);

  const { loading, error, getAllComics } = useMarvelServices();

  useEffect(() => {
    onRequest(offset, true);
  }, []);

  const onRequest = (offset, initial) => {
    initial ? setNewComicsLoading(false) : setNewComicsLoading(true);
    getAllComics(offset).then(onComicsAllLoaded);
  };

  const onComicsAllLoaded = (newComicsList) => {
    let ended = false;
    if (newComicsList.length < 8) {
      ended = true;
    }

    setComicsList((ComicsList) => [...comicsList, ...newComicsList]);
    setNewComicsLoading((newCharLoading) => false);
    setOffset((offset) => offset + 8);
    setComicsEnded((charEnded) => ended);
  };

  const allComics = comicsList.map((comics, i) => {
    // const { thumbnail } = comics;

    // const imageNotAvailable1 =
    //   "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg";
    // const imageNotAvailable2 =
    //   "http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708.gif";

    // let imgStyle = { objectFit: "cover" };
    // if (thumbnail === imageNotAvailable1 || thumbnail === imageNotAvailable2) {
    //   imgStyle = { objectFit: "fill" };
    // }

    return (
      <li className="comics__item" key={i}>
        <a href="#">
          <img
            src={comics.thumbnail}
            alt={comics.title}
            className="comics__item-img"
          />
          <div className="comics__item-name">{comics.title}</div>
          <div className="comics__item-price">{comics.price}</div>
        </a>
      </li>
    );
  });

  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading && !newComicsLoading ? <Spinner /> : null;

  return (
    <div className="comics">
      <div className="wrapper comics__wrapper">
        <ul className="comics__list">
          {errorMessage}
          {spinner}
          {allComics}
        </ul>
        <button 
          className="button button__main button__long"
          disabled={newComicsLoading}
          style={{ display: comicsEnded ? "none" : "block" }}
          onClick={() => onRequest(offset)}
          >
          <div className="inner">load more</div>
        </button>
      </div>
    </div>
  );
};

export default ComicsList;
