import { useState } from "react";

import AppPromo from "../appPromo/AppPromo";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import CharSearchForm from "../charSearchForm/CharSearchForm";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";

import decoration from "../../resources/img/Marvel-Comics.png";

const MainPage = () => {
  const [selectedChar, setSelectedChar] = useState(null);

  const onCharSelected = (id) => {
    setSelectedChar(id);
  };

  return (
    <>
      <AppPromo />
      <ErrorBoundary>
        <RandomChar />
      </ErrorBoundary>
      <div className="wrapper char__content">
        <ErrorBoundary>
          <CharList onCharSelected={onCharSelected} />
        </ErrorBoundary>
        <div className="char__container">
        <ErrorBoundary>
          <CharInfo charId={selectedChar} />
        </ErrorBoundary>
        <ErrorBoundary>
          <CharSearchForm />
        </ErrorBoundary>
        </div>
      </div>
      <img className="bg-decoration" src={decoration} alt="marvel-comics" />
    </>
  );
};

export default MainPage;
