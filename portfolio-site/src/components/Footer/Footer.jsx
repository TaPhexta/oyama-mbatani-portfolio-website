import site from "../../data/site.json";

import "./Footer.css";

function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="footer-container">
        <p className="footer-text">{site.copyright}</p>
      </div>
    </footer>
  );
}

export default Footer;
