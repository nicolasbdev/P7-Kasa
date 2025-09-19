import { useParams } from "react-router-dom"; 
import { useState } from "react";
import logement from '../../data/logements.json';

//  creation d' un carousel
const SlideShow = () => {
    //récupérer l'id du logement
    const { id } = useParams();

    // récupéreration des données du logement en fonction de l'id
    const logementData = logement.find((logement) => logement.id === id);

    // change l'image du carousel
    const [index, setIndex] = useState(0); 
    const chevronLeft = "fa-solid fa-chevron-left";
    const chevronRight = "fa-solid fa-chevron-right";
  
    // next picture
    const right = () => { 
      setIndex((nextIndex) => {
        let newIndex = nextIndex + 1;
        if (newIndex >= logementData.pictures.length) {
          newIndex = 0;
        }
        return newIndex;
      });
    };

    // previous picture
    const left = () => { 
      setIndex((prevIndex) => {
        let newIndex = prevIndex - 1;
        if (newIndex < 0) {
          newIndex = logementData.pictures.length - 1;
        }
        return newIndex;
      });
    };

  // affichage du carousel
    return (
        <div className="carousel">
          <img src={logementData.pictures[index]} alt={logementData.title} /> 
          {logementData.pictures.length > 1 && ( 
            
            // affichage du numéro de l'image et des flèches de navigation
            <>
              <p>{index + 1}/{logementData.pictures.length}</p>
              <div className="arrow">
                <i className={chevronLeft} onClick={left}></i> 
                <i className={chevronRight} onClick={right}></i> 
              </div>
            </>
          )}
        </div>
    );
  }
  
  export default SlideShow;
  