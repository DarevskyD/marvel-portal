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
  };

  marvelServices = new MarvelServices();

  componentDidMount() {
    this.marvelServices
      .getAllCharacters()
      .then(this.onCharAllLoaded)
      .catch(this.onError);
  }

  onCharAllLoaded = (charList) => {
    this.setState({ charList, loading: false });
  };

  onError = () => {
    this.setState({ loading: false, error: true });
  };

  render() {
    const { charList, loading, error } = this.state;

    const allCharList = charList.map((char) => {
			const { thumbnail } = char;

			const imageNotAvailable = 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg';
			let imgStyle = { 'objectFit': 'cover'};
			if(thumbnail === imageNotAvailable) {
				imgStyle = {'objectFit': 'fill'};
			}

      return (
        <li className="char__item" key={char.id} onClick = {() => this.props.onCharSelected(char.id)}>
          <img src={char.thumbnail} alt={char.name} style={imgStyle}/>
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
        <button className="button button__main button__long">
          <div className="inner">load more</div>
        </button>
      </div>
    );
  }
}

export default CharList;
