import "./SectionTitle.css";

function SectionTitle({ title }) {
  return (
    <div id="section-title" className="section-title-container">
      <h2 className="section-title">{title}</h2>
    </div>
  );
}
// Title prop will be passed depending on which page is being deplayed through the router.

export default SectionTitle;
