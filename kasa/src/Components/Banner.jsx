import PropTypes from 'prop-types';

const Banner = ({ src, text, style }) => {
Banner.propTypes = {
    src: PropTypes.string.isRequired,
    text: PropTypes.string,
    style: PropTypes.object
}
    {/* Création de la fonction pour les bannières des pages Logements. Il y aura une image et un titre pour la bannière de chaque page Logement */}
    return (
        <div className="banner">
            <img style={style} src={src} alt="Baniere du site" />  
            <h1>{text}</h1>
        </div>
    )
}
export default Banner;