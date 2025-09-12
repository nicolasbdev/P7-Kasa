import { useParams } from 'react-router-dom';
import tagData from '../../data/logements.json';

function Tags() {
    const { id } = useParams();
    const tag = tagData.find ((tags) => tags.id === id);
    
    return (
        <div className="tags">
            {tag.tags.length > 0 && (
                <ul>
                    {tag.tags.map((tag, index) => (
                        <li key={index}>{tag}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}
export default Tags;