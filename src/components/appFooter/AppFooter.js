import "./appFooter.scss";
import { Link } from "react-router-dom";
import SocialFollow from "../socialFollow/SocialFollow";

const AppFooter = () => {
  return (
    <footer className="app__footer">
      <div className="wrapper app__footer-wrapper">
        <h1 className="app__footer-title">
          <Link to="/">
            <span>Marvel</span>
          </Link>
        </h1>
        <SocialFollow />
      </div>
    </footer>
  );
};

export default AppFooter;
