// import { useEffect, useState } from "react";
import { MdStarRate } from "react-icons/md";
import { Link, useLoaderData, useParams } from "react-router-dom";


const DetailsProduct = () => {
    const { id } = useParams()
    const brands = useLoaderData()
    // const [brand, setBrand] = useState({})

    // console.log(brands);





    // useEffect(() => {

    //     if (brands && Array.isArray(brands)) {
    //         const findBrand = brands.find(brnd => brnd._id == id);
    //         setBrand(findBrand);
    //     }

    // }

    //     , [id, brands])

    return (
        <div>
            <div className="card my-10 w-9/12 mx-auto  bg-base-100 shadow-xl">
                <figure><img src={brands.photo} alt="Shoes" className="h-[600px] w-[800px]" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{brands.brand} {brands.name}</h2>
                    <p className='flex items-center gap-2'>  <MdStarRate></MdStarRate>{brands.rating}</p>
                    <p className="text-lg font-medium"> <span className=" font-medium text-xl text-black">Price:</span>{brands.price}</p>
                    <p>{brands.description}</p>
                    <div className="card-actions ">
                        <Link to='/mycart'>
                            <button className="btn bg-priColor hover:bg-thirColor text-white"> Add Cart</button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DetailsProduct;