import {
  FaFacebookSquare,
  FaYoutube,
  FaPinterest,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import "../../style/variables.scss";
import "./socialFollow.scss";

const SocialFollow = () => {
  return (
    <div className="app__footer-navigation">
      <h4 className="app__footer-navigation-title">FOLLOW MARVEL</h4>
      <ul className="app__footer-navigation-links">
        <li>
          <a
            href="https://www.facebook.com/Marvel/"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookSquare className="link" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/marvel" target="_blank" rel="noreferrer">
            <FaTwitter className="link" />
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/marvel"
            target="_blank"
            rel="noreferrer"
          >
            <FaYoutube className="link" />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/marvel/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram className="link" />
          </a>
        </li>
        <li>
          <a
            href="https://www.pinterest.com/marvelofficial/"
            target="_blank"
            rel="noreferrer"
          >
            <FaPinterest className="link" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialFollow;
