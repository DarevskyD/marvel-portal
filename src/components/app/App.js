import AppHeader from "../appHeader/AppHeader";
import AppPromo from "../appPromo/AppPromo";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import AppFooter from "../appFooter/AppFooter";

const App = () => {
  return (
    <div className="app">
      <AppHeader />
      <AppPromo />
      <main>
        <RandomChar />
        <div className="wrapper char__content">          
            <CharList />
            <CharInfo />         
        </div>
      </main>
      <AppFooter />
    </div>
  );
};

export default App;
