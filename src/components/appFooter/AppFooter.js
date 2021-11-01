import "./appFooter.scss";
import SocialFollow from "../socialFollow/SocialFollow";

const AppFooter = () => {
  return (
    <header className="app__footer">
      <div className="wrapper app__footer-wrapper">
        <h1 className="app__title">
          <a href="#">
            <span>Marvel</span>
          </a>
        </h1>
        <SocialFollow/>
      </div>      
    </header>
  );
};

export default AppFooter;