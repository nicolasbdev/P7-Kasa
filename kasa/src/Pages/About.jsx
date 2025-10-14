import Banner from '../components/Banner';
import img from '../assets/Images/banner-about.png'
import Dropdown from '../components/Dropdown';
import Info from'../data/apropos.json'
import PropTypes from "prop-types";

//Définition de page About.jsx

function About ({ style }) {
    About.propTypes = {
        style: PropTypes.object,
    };

    return (
        <div className="home">
            {/* Ci-dessous changement de l'image de fond de la banière sur notre page About */}
            <Banner src={img} style={{...style, filter: 'brightness(70%)' }}/>
            {/*Ci-dessous création des chevrons montant et descendant pour mettre en forme les descriptions des services proposés. Création d'une liste grâce à la méthode Map */}
            <div className='MenuDropDown' style={{...style, flexDirection: 'column', alignItems: 'center', gap:'0'}}>
                {[...Info].map((info, index) => {
                    return (
                        <div className='container' key={index}>
                        <Dropdown  
                            title={info.title}
                            className="title-style-about" 
                            description={info.description}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default About;