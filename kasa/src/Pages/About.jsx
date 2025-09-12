import Banner from '../components/Banner';
import img from '../assets/Images/banner-about.png'
import Dropdown from '../components/Dropdown';
import Info from'../data/apropos.json'
import PropTypes from "prop-types";


function About ({ style }) {
    About.propTypes = {
        style: PropTypes.object,
    };

    return (
        <div className="home">
            <Banner src={img} style={{...style, filter: 'brightness(70%)' }}/>
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