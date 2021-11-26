import { useState, useEffect } from "react";
import MarvelServices from "../../services/MarvelService";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";

import "./randomChar.scss";

const RandomChar = () => {
  const [char, setChar] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const marvelServices = new MarvelServices();

  useEffect(() => {
    updateChar();
  }, []);

  const onCharLoaded = (char) => {
    setChar(char);
    setLoading(false);
  };

  const onCharLoading = () => {
    setLoading(true);
  };

  const onError = () => {
    setLoading(false);
    setError(true);
  };

  const updateChar = () => {
    const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
    onCharLoading();
    marvelServices.getCharacter(id).then(onCharLoaded).catch(onError);
  };

  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;
  const content = !(loading || error) ? <View char={char} /> : null;

  return (
    <div className="randomchar">
      <div className="wrapper randomchar__wrapper">
        <div className="randomchar__container">
          <div className="randomchar__block">
            {errorMessage}
            {spinner}
            {content}
          </div>
          <div className="randomchar__static">
            <div>
              <p className="randomchar__title">
                Random character for today!
                <br />
                Do you want to get to know him better?
              </p>
              <p className="randomchar__title">Or choose another one</p>
            </div>
            <div>
              <button onClick={updateChar} className="button button__main">
                <div className="inner">try it</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const View = ({ char }) => {
  const { name, description, thumbnail, homepage, wiki } = char;
  const imageNotAvailable1 =
    "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg";
  const imageNotAvailable2 =
    "http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708.gif";
  let imgStyle = { objectFit: "cover" };
  if (thumbnail === imageNotAvailable1 || thumbnail === imageNotAvailable2) {
    imgStyle = { objectFit: "fill" };
  }

  return (
    <>
      <img
        src={thumbnail}
        alt="Random character"
        className="randomchar__img"
        style={imgStyle}
      />
      <div className="randomchar__info">
        <p className="randomchar__name">{name}</p>
        <p className="randomchar__descr">{description}</p>
        <div className="randomchar__btns">
          <a href={homepage} className="button button__main">
            <div className="inner">homepage</div>
          </a>
          <a href={wiki} className="button button__secondary">
            <div className="inner">Wiki</div>
          </a>
        </div>
      </div>
    </>
  );
};

export default RandomChar;
