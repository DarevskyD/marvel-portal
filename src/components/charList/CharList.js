import { Component } from "react";
import MarvelServices from "../../services/MarvelService";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";

import "./charList.scss";
class CharList extends Component {
  state = {
    charList: [],
    loading: true,
    error: false,
    newCharLoading: false,
    offset: 230,
    charEnded: false,
  };

  marvelServices = new MarvelServices();

  componentDidMount() {
    this.onRequest();
  }

  onRequest = (offset) => {
    this.onCharListLoading();
    this.marvelServices
      .getAllCharacters(offset)
      .then(this.onCharAllLoaded)
      .catch(this.onError);
  };

  onCharAllLoaded = (newCharList) => {
    let ended = false;
    if (newCharList.length < 9) {
      ended = true;
    }

    this.setState(({ offset, charList }) => ({
      charList: [...charList, ...newCharList],
      loading: false,
      newCharLoading: false,
      offset: offset + 9,
      charEnded: ended,
    }));
  };

  onCharListLoading = () => {
    this.setState({
      newCharLoading: true,
    });
  };

  onError = () => {
    this.setState({
      loading: false,
      error: true,
    });
  };

  render() {
    const { charList, loading, error, newCharLoading, offset, charEnded } =
      this.state;

    const allCharList = charList.map((char) => {
      const { thumbnail } = char;

      const imageNotAvailable1 = "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg";
      const imageNotAvailable2 = "http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708.gif";

      let imgStyle = { objectFit: "cover" };
      if (thumbnail === imageNotAvailable1 || thumbnail === imageNotAvailable2) {
        imgStyle = { objectFit: "fill" };
      }

      return (
        <li
          className="char__item"
          key={char.id}
          onClick={() => this.props.onCharSelected(char.id)}
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
          onClick={() => this.onRequest(offset)}
        >
          <div className="inner">load more</div>
        </button>
      </div>
    );
  }
}

export default CharList;
