import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import AppPromo from "../../appPromo/AppPromo";
import useMarvelServices from "../../../services/MarvelService";
import Spinner from "../../spinner/Spinner";
import ErrorMessage from "../../errorMessage/ErrorMessage";

import "./singleCharacterPage.scss";

const SingleCharacterPage = () => {
  const { characterId } = useParams();
  const [char, setChar] = useState(null);

  const { loading, error, getCharacter, clearError } = useMarvelServices();

  useEffect(() => {
    updateCharacter();
  }, [characterId]);

  const updateCharacter = () => {
    clearError();
    getCharacter(characterId).then(onCharacterLoaded);
  };

  const onCharacterLoaded = (char) => {
    setChar(char);
  };

  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;
  const content = !(loading || error || !char) ? <View char={char} /> : null;

  return (
    <>
      <AppPromo />
      {errorMessage}
      {spinner}
      {content}
    </>
  );
};

const View = ({ char }) => {
  const { name, description, thumbnail } = char;
  return (
    <div className="single-character">
      <Helmet>
        <meta name="description" content={`This page is about ${name}`} />
        <title>{name}</title>
      </Helmet>
      <div className="single-character__wrapper wrapper">
        <img src={thumbnail} alt={name} className="single-character__img" />
        <div className="single-character__info">
          <h2 className="single-character__name">{name}</h2>
          <p className="single-character__descr">{description}</p>
        </div>
        <Link to="/marvel-portal/" className="single-character__back">
          Back to home
        </Link>
      </div>
    </div>
  );
};

export default SingleCharacterPage;
