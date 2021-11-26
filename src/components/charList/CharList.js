import { useState, useEffect } from "react";
import MarvelServices from "../../services/MarvelService";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";
import PropTypes from "prop-types";

import "./charList.scss";

const CharList = (props) => {
  const [charList, setCharList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [newCharLoading, setNewCharLoading] = useState(false);
  const [offset, setOffset] = useState(230);
  const [charEnded, setCharEnded] = useState(false);

  const marvelServices = new MarvelServices();

  useEffect(() => {
    onRequest();
  }, []);

  const onRequest = (offset) => {
    onCharListLoading();
    marvelServices
      .getAllCharacters(offset)
      .then(onCharAllLoaded)
      .catch(onError);
  };

  const onCharListLoading = () => {
    setNewCharLoading(true);
  };

  const onCharAllLoaded = (newCharList) => {
    let ended = false;
    if (newCharList.length < 9) {
      ended = true;
    }

    setCharList((charList) => [...charList, ...newCharList]);
    setLoading(false);
    setNewCharLoading((newCharLoading) => false);
    setOffset((offset) => offset + 9);
    setCharEnded((charEnded) => ended);
  };

  const onError = () => {
    setLoading(false);
    setError((error) => true);
  };

  const allCharList = charList.map((char) => {
    const { thumbnail } = char;

    const imageNotAvailable1 =
      "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg";
    const imageNotAvailable2 =
      "http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708.gif";

    let imgStyle = { objectFit: "cover" };
    if (thumbnail === imageNotAvailable1 || thumbnail === imageNotAvailable2) {
      imgStyle = { objectFit: "fill" };
    }

    return (
      <li
        className="char__item"
        key={char.id}
        onClick={() => props.onCharSelected(char.id)}
      >
        <img src={char.thumbnail} alt={char.name} style={imgStyle} />
        <div className="char__name">{char.name}</div>
      </li>
    );
  });

  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;
  const content = !(loading || error) ? allCharList : null;

  return (
    <div className="char__list">
      <ul className="char__flex">
        {errorMessage}
        {spinner}
        {content}
      </ul>
      <button
        className="button button__main button__long"
        disabled={newCharLoading}
        style={{ display: charEnded ? "none" : "block" }}
        onClick={() => onRequest(offset)}
      >
        <div className="inner">load more</div>
      </button>
    </div>
  );
};

CharList.propTypes = {
  onCharSelected: PropTypes.func.isRequired,
};

export default CharList;
