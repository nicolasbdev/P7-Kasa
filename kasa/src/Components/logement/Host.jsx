import { useParams } from 'react-router-dom';
import HostData from '../../data/logements.json';

function Host () {
    const { id } = useParams();
    const host = HostData.find ((host) => host.id === id);
    return (
        <div className="host">
            <div className="host-name">
                <span>{host.host.name}</span>
            </div>
            <div className="host-avatar">
                <img src={host.host.picture} alt={host.host.name} />
            </div>
        </div>
    )
}
export default Host;