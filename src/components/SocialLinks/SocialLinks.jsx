import "./SocialLinks.css";

function SocialLinks({ socials }) {
  return (
    <div id="social-links" className="social-links">
      {socials.map((social) => (
        <a
          key={social.id}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          {social.platform}
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;
