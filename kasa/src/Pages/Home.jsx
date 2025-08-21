import Banner from "../Components/Banner";
import BannerHome from "../assets/Images/banner-home.png";

function Home() {
    return (
        <div className='home'>
            <Banner src={BannerHome} text='Chez vous, partout et ailleurs' />
        </div>
    );
}
export default Home;