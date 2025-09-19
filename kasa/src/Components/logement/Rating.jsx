import { useParams } from 'react-router-dom';
import RatingData from '../../data/logements.json';

function Rating() {
    const { id } = useParams();
    const rating = RatingData.find ((rating) => rating.id === id);

    const starsFull = "fa-solid fa-star";
    const starsEmpty = "fa-solid fa-star";
    
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