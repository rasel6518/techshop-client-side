import { Link, useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import NewProducts from "./NewProducts";
import BestSeller from "./BestSeller";


const Home = () => {

    const brands = useLoaderData()
    console.log(brands)
    return (
        <div className="w-9/12 mx-auto">
            <Banner></Banner>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 my-10 gap-5  ">
                {
                    brands?.map(brand =>
                    (<div key={brand.id}>

                        <Link to={`/${brand.name.toLowerCase()}`}>

                            <div className="w-full h-40 m-5">
                                <img className="w-full h-full" src={brand.image_url} alt="" />
                                <p className="text-center font-serif font-extrabold text-3xl">{brand.name}</p>
                            </div>

                        </Link>

                    </div>)

                    )
                }
            </div>

            <NewProducts></NewProducts>

            <BestSeller></BestSeller>

        </div>
    );
};

export default Home;