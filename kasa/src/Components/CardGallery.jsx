import Logements from "../data/logements.json";
import { Link } from "react-router-dom";

const CardGallery = ()=> {
  return (
    <div className="gallery">
        {/* Extraction des données du fichier JSON avec la méthode Map. Cela permet de récupérer les données pour les cards de la page Home. */}      
        {Logements.map((logement) => (
              <Link to={`/logements/${logement.id}`} className='gallery-item' key={logement.id}>
                  <img src={logement.cover} alt={logement.title} />
                  <div className="gradient-filter"></div>
                  <h3>{logement.title}</h3>
              </Link>
            ))}
        {/* Ci-dessus création du lien dirige le clic sur une card vers une page Logement correspondante */}
     
    </div>
  );
}
export default CardGallery;