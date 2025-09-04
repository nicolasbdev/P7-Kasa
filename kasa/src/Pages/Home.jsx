import Banner from "../components/Banner";
import BannerHome from "../assets/Images/banner-home.png";
import CardGallery from "../Components/CardGallery";

function Home() {
    return (
        <div className='home'>
            <Banner src={BannerHome} text='Chez vous, partout et ailleurs' />
            <CardGallery />
        </div>
    );
}
export default Home;