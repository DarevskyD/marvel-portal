import "./appBanner.scss";
import insider from "../../resources/img/marvel-insider.png";

const AppBanner = () => {
  return (
    <div className="app__banner">
      <div className="wrapper app__banner-wrapper">
        <img className="app__banner-img" src={insider} alt="marvel-insider" />
        <p className="app__banner-text">
          MARVEL COMICS
        </p>        
      </div>
    </div>
  );
};

export default AppBanner;
