import { Component } from "react";
import MarvelServices from "../../services/MarvelService";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";

import "./randomChar.scss";
class RandomChar extends Component {

  state = {
    char: {},
    loading: true,
    error: false,
  };

  marvelServices = new MarvelServices();

  componentDidMount() {
    this.updateChar();
  };

  componentWillUnmount() {
    console.log('unmount')
  };

  onCharLoaded = (char) => {
    this.setState({ char, loading: false });
  };

  onCharLoading = () => {
    this.setState({
      loading: true
    })
  }

  onError = () => {
    this.setState({ loading: false, error: true });
  };

  updateChar = () => {
    const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
    this.onCharLoading();
    this.marvelServices
      .getCharacter(id)
      .then(this.onCharLoaded)
      .catch(this.onError);
  };

  render() {   
    const { char, loading, error } = this.state;
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
                <button onClick={this.updateChar} className="button button__main">
                  <div className="inner">try it</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const View = ({ char }) => {
  const { name, description, thumbnail, homepage, wiki } = char;
  const imageNotAvailable = 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg';
  let imgStyle = { 'objectFit': 'cover'};
  if(thumbnail === imageNotAvailable) {
    imgStyle = {'objectFit': 'fill'};
  }

  return (
    <>
      <img src={thumbnail} alt="Random character" className="randomchar__img" style={imgStyle}/>
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
