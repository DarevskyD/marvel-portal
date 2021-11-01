import {
  FaFacebookSquare,
  FaYoutube,
  FaPinterest,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import '../../style/variables.scss';
import "./socialFollow.scss"

const SocialFollow = () => {
  return (    
      <div class="app__footer-navigation">
        <h4 class="app__footer-navigation-title">FOLLOW MARVEL</h4>
        <ul class="app__footer-navigation-links">
          <li>
            <a href="#">
              <FaFacebookSquare className="link"/>
            </a>
          </li>
          <li>
            <a href="#">
              <FaTwitter className="link"/>
            </a>
          </li>
          <li>
            <a href="#">
              <FaYoutube className="link"/>
            </a>
          </li>
          <li>
            <a href="#">
              <FaInstagram className="link"/>
            </a>
          </li>
          <li>
            <a href="#">
              <FaPinterest className="link"/>
            </a>
          </li>
        </ul>
      </div>    
  );
};

export default SocialFollow;
