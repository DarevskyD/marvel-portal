import { useState, useEffect } from "react";
import Skeleton from "../skeleton/Skeleton";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";
import MarvelServices from "../../services/MarvelService";
import PropTypes from "prop-types";

import "./charInfo.scss";

const CharInfo = (props) => {
  const [char, setChar] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const marvelServices = new MarvelServices();

  useEffect(() => {
    updateChar();
  }, [props.charId]);

  const updateChar = () => {
    const { charId } = props;
    if (!charId) {
      return;
    }

    onCharLoading();
    marvelServices.getCharacter(charId).then(onCharLoaded).catch(onError);
  };

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

  const sceleton = char || loading || error ? null : <Skeleton />;
  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;
  const content = !(loading || error || !char) ? <View char={char} /> : null;

  return (
    <div className="char__info">
      {sceleton}
      {errorMessage}
      {spinner}
      {content}
    </div>
  );
};

const View = ({ char }) => {
  const { name, description, thumbnail, homepage, wiki, comics } = char;
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
      <div className="char__basics">
        <img src={thumbnail} alt={name} style={imgStyle} />
        <div>
          <div className="char__info-name">{name}</div>
          <div className="char__btns">
            <a href={homepage} className="button button__main">
              <div className="inner">homepage</div>
            </a>
            <a href={wiki} className="button button__secondary">
              <div className="inner">Wiki</div>
            </a>
          </div>
        </div>
      </div>
      <div className="char__descr">{description}</div>
      <div className="char__comics">Comics:</div>
      <ul className="char__comics-list">
        {comics.length > 0 ? null : "No comics found with this character"}
        {comics.map((item, i) => {
          // eslint-disable-next-line array-callback-return
          if (i > 9) return;
          return (
            <li className="char__comics-item" key={i}>
              {item.name}
            </li>
          );
        })}
      </ul>
    </>
  );
};

CharInfo.propTypes = {
  charId: PropTypes.number,
};

export default CharInfo;
