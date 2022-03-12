import { ReactComponent as GithubIcon } from "assets/img/github.svg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <nav className="container">
        <div className="dsmovie-nav-content">
          <Link to="/">
            <h1>DSMovie</h1>
          </Link>
          <a
            href="https://github.com/brunomdrrosa"
            target="_blank"
            rel="noreferrer"
          >
            <div className="dsmovie-contact-container">
              <GithubIcon />
              <p className="dsmovie-contact-link">/brunomdrrosa</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
