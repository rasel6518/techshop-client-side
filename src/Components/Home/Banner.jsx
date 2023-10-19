import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
    };

    return (
        <div className="w-full" >
            <Slider className=" mx-auto  h-[80vh] " {...settings}>
                <div>
                    <img className="w-full h-[75vh]" src="https://i.ibb.co/5nW2kcp/samsung-for-slider.png" alt="Slide 1" />
                </div>
                <div>
                    <img className="w-full h-[75vh]" src="https://i.ibb.co/XYt2LTx/realme-for-slider.png" alt="Slide 2" />
                </div>
                <div>
                    <img className=" w-full h-[75vh]" src="https://i.ibb.co/DwStRFR/20230704-1688464611-563256.png" alt="Slide 3" />
                </div>
            </Slider>
        </div>
    );
};
export default Banner;