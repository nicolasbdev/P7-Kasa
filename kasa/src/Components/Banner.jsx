import PropTypes from 'prop-types';

const Banner = ({ src, text, style }) => {
Banner.propTypes = {
    src: PropTypes.string.isRequired,
    text: PropTypes.string,
    style: PropTypes.object
}
    {/* Ci-dessous création de la fonction banner pour réaliser la bannière apparaissant sur la page Home  */}
    return (
        <div className="banner">
            <img style={style} src={src} alt="Baniere du site" />  
            <h1>{text}</h1>
        </div>
    )
}
export default Banner;