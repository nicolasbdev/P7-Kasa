import { useParams } from 'react-router-dom';
import locationData from '../../data/logements.json';

function LocationLogement() {
    const { id } = useParams();
    const location = locationData.find ((location) => location.id === id);
    
    return (
        <div className="location">
            <h1>{location.title}</h1>
            <p>{location.location}</p>
        </div>
    )
}

export default LocationLogement;