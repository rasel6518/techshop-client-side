import { useLoaderData } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import { MdStarRate } from 'react-icons/md';

const Google = () => {

    const brands = useLoaderData();
    const googleProducts = brands?.filter(brand => brand.brand.toLowerCase() == 'google');

    return (
        <div>
            <div className='grid md:grid-cols-2 gap-10 mx-auto w-9/12 '>






                {googleProducts?.map(product => (
                    <div key={product.id}>
                        <div className="card w-[560px] card-side text-black bg-secColor p-5 shadow-xl">
                            <div className='flex-1 mx-auto my-auto'>
                                <img src={product.photo} alt="Movie" />
                            </div>
                            <div className="card-body flex-1">
                                <p className='flex items-center gap-2'> <FcGoogle></FcGoogle> {product.brand}</p>
                                <h2 className="card-title w-full h-full ">{product.name}</h2>
                                <p className='text-sm'>{product.type}</p>
                                <p> <span className='text-black font-medium'>Price:</span> {product.price}</p>
                                <p className='flex items-center gap-2'>  <MdStarRate></MdStarRate>{product.rating}</p>

                                <div className="card-actions justify-between">
                                    <button className="btn bg-priColor text-white hover:bg-thirColor">Details</button>
                                    <button className="btn bg-priColor text-white hover:bg-thirColor">Update</button>
                                </div>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default Google;