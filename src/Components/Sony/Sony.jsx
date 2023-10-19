import { Link, useLoaderData } from "react-router-dom";
import { SiSony } from 'react-icons/si';
import { MdStarRate } from 'react-icons/md';

const Sony = () => {
    const brands = useLoaderData();
    const sonyProducts = brands?.filter(brand => brand.brand.toLowerCase() == 'sony');
    return (

        <div className='grid md:grid-cols-2 gap-10 mx-auto w-9/12 '>


            {sonyProducts?.map(product => (
                <div key={product._id}>
                    <div className="card md:w-[560px] card-side text-black bg-secColor p-5 shadow-xl">
                        <div className='flex-1 mx-auto my-auto'>
                            <img src={product.photo} alt="Movie" />
                        </div>
                        <div className="card-body flex-1">
                            <p className='flex items-center gap-2'> <SiSony></SiSony> {product.brand}</p>
                            <h2 className="card-title w-full h-full ">{product.name}</h2>
                            <p className='text-sm'>{product.type}</p>
                            <p> <span className='text-black font-medium'>Price:</span> {product.price}</p>
                            <p className='flex items-center gap-2'>  <MdStarRate></MdStarRate>{product.rating}</p>

                            <div className="card-actions justify-between">
                                <button className="btn bg-priColor text-white hover:bg-thirColor">Details</button>
                                <Link to={`/updateproduct/${product._id}`}>
                                    <button className="btn bg-priColor text-white hover:bg-thirColor">Update</button>

                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            ))}
        </div>

    );
};

export default Sony;