/**
 * Reusable section header: small label → gradient heading → muted description.
 * All props are optional — omit any to skip rendering that element.
 */
const SectionHeader = ({ label, heading, description, className = "" }) => (
  <div className={`section__header ${className}`.trim()}>
    {label && <h3 className="title">{label}</h3>}
    {heading && <h2 className="sub__heading">{heading}</h2>}
    {description && <p className="description">{description}</p>}
  </div>
);

export default SectionHeader;
