import {useParams, useNavigate } from "react-router-dom";
import Carousel from "../components/logement/Carousel";
import LocationLogement from "../components/logement/LocationLogement";
import Tags from "../components/logement/Tags";
import Rating from "../components/logement/Rating";
import Host from "../components/logement/Host";
import LogementId from "../data/logements.json"
import DropDown from "../components/Dropdown";
import { useEffect } from "react";




function Logement () {
    const { id } = useParams();
    const navigate = useNavigate();
    const logement = LogementId.find(logement => logement.id === id);

    useEffect(() => {
        if (!logement) {
            navigate('/Error404');
        }
    },[logement, navigate]); 

    if (!logement) {
        return null;
    }

    return (
        <div className="container-logement" >
            <Carousel />
            <LocationLogement />  
            <Tags />
            <Rating />
            <Host />
            <div className="dropDown">
                <div className="MenuDropDown">
                    <div className="container">
                        <DropDown 
                            title="Description" 
                            description={logement.description} />
                    </div>
                    <div className="container">
                        <DropDown 
                            title="Equipements" 
                            description={logement.equipments.map(equipment => <li key={equipment}>{equipment}</li>)} /> 
                    </div>
                </div>    
            </div>
        </div>   
    );   
}
export default Logement;