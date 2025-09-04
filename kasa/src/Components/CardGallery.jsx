import Logements from "../data/logements.json";
import { Link } from "react-router-dom";

const CardGallery = ()=> {
  return (
    <div className="gallery">
        {Logements.map((logement) => (
              <Link to={`/logements/${logement.id}`} className='gallery-item' key={logement.id}>  
                <img src={logement.cover} alt={logement.title} />
                <h3>{logement.title}</h3>
              </Link>
            ))}
      
    </div>
  );
}
export default CardGallery;