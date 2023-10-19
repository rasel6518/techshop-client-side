import Slider from "react-slick";


const Ads = () => {
    const settings = {

        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
    }

    return (
        <div>
            <div className="mx-auto mb-10  w-full">

                <Slider {...settings}>
                    <div>
                        <h3><img className="w-full h-[75vh]" src="https://i.ibb.co/tzWMqcX/Apple-Watch-Series-9-Web-Slider-9874.webp" alt="" /></h3>
                    </div>
                    <div>
                        <h3><img className="w-full h-[75vh]" src="https://i.ibb.co/51MkGhZ/Pixel-8-8-Pro-Slider-1-4701.webp" alt="" /></h3>
                    </div>
                    <div>
                        <h3><img className="w-full h-[75vh]" src="https://i.ibb.co/Hgv1fn0/Iphone-15-Pro-Max-Web-Slider-2722.webp" alt="" /></h3>
                    </div>

                </Slider>
            </div>
        </div>
    );
};

export default Ads;