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
        <div >
            <Slider className=" mx-auto h-[80vh] " {...settings}>
                <div>
                    <img className="w-full h-[80vh]" src="https://i.ibb.co/XDKNX14/sony-vector-logo.jpg" alt="Slide 1" />
                </div>
                <div>
                    <img className="w-full h-[80vh]" src="https://i.ibb.co/t4fyR31/Free-Vector-Intel-Logo.jpg" alt="Slide 2" />
                </div>
                <div>
                    <img className=" w-full h-[80vh]" src="https://i.ibb.co/gWwPx8Z/Apple.jpg" alt="Slide 3" />
                </div>
            </Slider>
        </div>
    );
};
export default Banner;