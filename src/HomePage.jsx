import headshot from './headshot.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import './HomePage.css';

const competencies = [
  'Software Engineering',
  'Cloud Computing',
  'System Architecture',
  'Generative AI',
  'Observability',
];

function HomePage() {
  return (
    <div className="card">
      <div className="profile-section">
        <img src={headshot} alt="David Klein" className="headshot" />
        <div className="blurb">
          <h1>David Klein</h1>
          <p className="title">Senior Software Engineer @ Microsoft</p>
          <p className="summary">
            I design and build scalable, observable software systems across
            cloud and on-prem environments&mdash;turning technical tradeoffs
            into reliable, stakeholder-focused delivery.
          </p>
        </div>
      </div>

      <ul className="tags">
        {competencies.map((item) => (
          <li key={item} className="tag">
            {item}
          </li>
        ))}
      </ul>

      <div className="links-section">
        <a
          href="https://github.com/dtklein7"
          className="icon-link"
          aria-label="GitHub"
        >
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </a>
        <a
          href="https://www.linkedin.com/in/dtklein7"
          className="icon-link"
          aria-label="LinkedIn"
        >
          <FontAwesomeIcon icon={faLinkedin} size="lg" />
        </a>
        <a
          href="mailto:david@kleinzone.com"
          className="icon-link"
          aria-label="Email"
        >
          <FontAwesomeIcon icon={faEnvelope} size="lg" />
        </a>
      </div>
    </div>
  );
}

export default HomePage;
