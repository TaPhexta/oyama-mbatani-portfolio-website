import "./Footer.css";

function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <p>© 2026 Oyama Mbatani</p>
        </div>

        <div className="footer-center">
          <p>Built with React & Vite</p>
        </div>

        <div className="footer-right">
          <p>South Africa</p>
        </div>
      </div>
    </footer>
  );
}
// Creates a footer component that can be used throughout the application.
export default Footer;
