import "./SocialLinks.css";

function SocialLinks({ children }) {
  return (
    <div id="social-links" className="social-links">
      {children}
    </div>
  ); // Children props will be passed via mapping.
} 

export default SocialLinks;
