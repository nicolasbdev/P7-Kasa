import { useState } from "react";
import PropTypes from "prop-types";


 function Dropdown({ title, description, className}) {
  Dropdown.propTypes = {
  title: PropTypes.string,
  description: PropTypes.node,
  className: PropTypes.string,
};

  const [isDisplayed, setIsDisplayed] = useState(false);
  const [chevron] = useState("fa-solid fa-chevron-up");

  const toggleDisplay = () => {
    setIsDisplayed(previous => !previous);
  };

  return <>
    <button>
      <h2 className={className}>{title}</h2>
      <i onClick={toggleDisplay} className={`${chevron} ${isDisplayed ? 'rotate' : ''}`}></i>
    </button>
    <div className={`dropdown-content ${isDisplayed ? 'show' : ''}`}>
    {Array.isArray(description) ? <ul>{description}</ul> : <p>{description}</p>}
     
    </div>
  </>;
}
export default Dropdown;