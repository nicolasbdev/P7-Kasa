import { useParams } from 'react-router-dom';
import RatingData from '../../data/logements.json';


function Rating() {
    const { id } = useParams();
    const rating = RatingData.find ((rating) => rating.id === id);
    {/* Ci-dessous logo des étoiles qui apparaîtront en tant que composant Ratint */}
    const starsFull = "fa-solid fa-star";
    const starsEmpty = "fa-solid fa-star";
    {/* Ci-dessous création de la fonction Rating */}
    return (
        <div className="rating">
            <div className="stars">
                {[...Array(5)].map((star, index) => {
                    return (
                        <i key={index} className={index < rating.rating ? starsFull : starsEmpty} style={{color: index < rating.rating ? '' : '#e3e3e3'}}></i>
                    )
                })}
            </div>
        </div>
    )
}
export default Rating;

// Définition du composant Rating qui apparaîtra sur la page Logement
