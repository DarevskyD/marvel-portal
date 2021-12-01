import { useState, useEffect } from "react";
import useMarvelServices from "../../services/MarvelService";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";
import PropTypes from "prop-types";

import "./charList.scss";

const CharList = (props) => {
  const [charList, setCharList] = useState([]);
  const [newCharLoading, setNewCharLoading] = useState(false);
  const [offset, setOffset] = useState(230);
  const [charEnded, setCharEnded] = useState(false);

  const { loading, error, getAllCharacters } = useMarvelServices();

  useEffect(() => {
    onRequest(offset, true);
  }, []);

  const onRequest = (offset, initial) => {
    initial ? setNewCharLoading(false) : setNewCharLoading(true);    
    getAllCharacters(offset).then(onCharAllLoaded);
  };

  const onCharAllLoaded = (newCharList) => {
    let ended = false;
    if (newCharList.length < 9) {
      ended = true;
    }

    setCharList((charList) => [...charList, ...newCharList]);
    setNewCharLoading((newCharLoading) => false);
    setOffset((offset) => offset + 9);
    setCharEnded((charEnded) => ended);
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
  const spinner = loading && !newCharLoading ? <Spinner /> : null;

  return (
    <div className="char__list">
      <ul className="char__flex">
        {errorMessage}
        {spinner}
        {allCharList}
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
