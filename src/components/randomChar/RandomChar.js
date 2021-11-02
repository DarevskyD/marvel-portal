import "./randomChar.scss";
import { Component } from "react";
import MarvelServices from "../../services/MarvelService";
class RandomChar extends Component {
  constructor(props) {
    super(props);
    this.updateChar();
  }

  state = {
    char: {},
  };

  marvelServices = new MarvelServices();

  onCharLoaded = (char) => {
    this.setState({ char });
  };

  updateChar = () => {
    const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
    this.marvelServices.getCharacter(id).then(this.onCharLoaded);
  };

  render() {
    const {
      char: { name, description, thumbnail, homepage, wiki },
    } = this.state;
    return (
      <div className="randomchar">
        <div className="wrapper randomchar__wrapper">
          <div className="randomchar__container">
            <div className="randomchar__block">
              <img
                src={thumbnail}
                alt="Random character"
                className="randomchar__img"
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
                <button className="button button__main">
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

export default RandomChar;
