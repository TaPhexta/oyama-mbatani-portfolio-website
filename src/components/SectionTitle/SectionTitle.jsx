import "./SectionTitle.css";

function SectionTitle({ children }) {
  return (
    <div id="section-title" className="section-title-container">
      <h2 className="section-title">{children}</h2>
    </div>
  );
}
// Title prop will be passed depending on which page is being deplayed through the router.

export default SectionTitle;
