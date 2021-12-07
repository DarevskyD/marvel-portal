import { useState } from "react";
import AppHeader from "../appHeader/AppHeader";
import AppBanner from "../appBanner/AppBanner";
import AppPromo from "../appPromo/AppPromo";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ComicsList from "../comicsList/ComicsList";
import SingleComic from "../singleComic/SingleComic";
import AppFooter from "../appFooter/AppFooter";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import decoration from "../../resources/img/Marvel-Comics.png";

const App = () => {
  const [selectedChar, setSelectedChar] = useState(null);

  const onCharSelected = (id) => {
    setSelectedChar(id);
  };

  return (
    <div className="app">
      <AppHeader />
      {/* <AppPromo /> */}
      <AppBanner />
      <main>
        {/* <ErrorBoundary>
          <RandomChar />
        </ErrorBoundary>
        <div className="wrapper char__content">
          <ErrorBoundary>
            <CharList onCharSelected={onCharSelected} />
          </ErrorBoundary>
          <ErrorBoundary>
            <CharInfo charId={selectedChar} />
          </ErrorBoundary>
        </div>
        <img className="bg-decoration" src={decoration} alt="marvel-comics" /> */}
        <ComicsList />
        {/* <SingleComic /> */}
      </main>
      <AppFooter />
    </div>
  );
};

export default App;
