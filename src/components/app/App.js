import { Component } from "react";
import AppHeader from "../appHeader/AppHeader";
import AppPromo from "../appPromo/AppPromo";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import AppFooter from "../appFooter/AppFooter";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import decoration from "../../resources/img/Marvel-Comics.png";

class App extends Component {
  state = {
    selectedChar: null,
  };

  onCharSelected = (id) => {
    this.setState({
      selectedChar: id,
    });
  };

  render() {
    return (
      <div className="app">
        <AppHeader />
        <AppPromo />
        <main>
          <ErrorBoundary>
            <RandomChar />
          </ErrorBoundary>
          <div className="wrapper char__content">
            <ErrorBoundary>
              <CharList onCharSelected={this.onCharSelected} />
            </ErrorBoundary>
            <ErrorBoundary>
              <CharInfo charId={this.state.selectedChar} />
            </ErrorBoundary>
          </div>
          <img className="bg-decoration" src={decoration} alt="marvel-comics" />
        </main>
        <AppFooter />
      </div>
    );
  }
}

export default App;
