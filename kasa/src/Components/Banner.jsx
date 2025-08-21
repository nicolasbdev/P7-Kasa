import PropTypes from 'prop-types';

const Banner = ({ src, text, style }) => {
Banner.propTypes = {
    src: PropTypes.string.isRequired,
    text: PropTypes.string,
    style: PropTypes.object
}
    return (
        <div className="banner">
            <img style={style} src={src} alt="Baniere du site" />  
            <h1>{text}</h1>
        </div>
    )
}
export default Banner;