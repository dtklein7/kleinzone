import headshot from './headshot.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import './HomePage.css';

function HomePage() {
  return (
    <div className="container">
      <div className='combo'>
        <div className="profile-section">
          <img src={headshot} alt="Headshot" className="headshot" />
          <div className="blurb">
            <h1>David Klein</h1>
            <p>Welcome to my webpage!</p>
          </div>
        </div>
        <div className="links-section">
          <a href="https://github.com/dtklein7" className="icon-link">
            <FontAwesomeIcon icon={faGithub} size="4x" />
          </a>
          <a href="mailto:david@kleinzone.com" className="icon-link">
            <FontAwesomeIcon icon={faEnvelope} size="4x" />
          </a>
          <a href="https://www.linkedin.com/in/dtklein7" className="icon-link">
            <FontAwesomeIcon icon={faLinkedin} size="4x" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default HomePage;