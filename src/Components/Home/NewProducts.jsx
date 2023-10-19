import { useEffect, useState } from "react";
import { MdStarRate } from 'react-icons/md';

const NewProducts = () => {

    const [newProducts, setNewProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/newProducts')
            .then(res => res.json())
            .then(data => setNewProducts(data))
    }, [])


    console.log(newProducts);

    return (
        <div className="mx-auto ">

            <h1 className=" text-2xl my-8 font-serif font-bold">NEW PRODUCTS</h1>


            <div className="grid md:grid-cols-3 gap-5 ">
                {
                    newProducts?.map(product => (

                        <div key={product._id} className="">
                            <div className="card  bg-secColor h-[550px] p-5 shadow-xl">
                                <div className="" ><img src={product.photo} className=" h-[400px] mx-auto" alt="Shoes" /></div>
                                <div className="card-body">
                                    <h2 className="card-title  whitespace-nowrap">
                                        {product.name}
                                        <div className="badge badge-secondary">NEW</div>
                                    </h2>
                                    <p className='flex items-center gap-2'>  <MdStarRate className="   text-amber-500"></MdStarRate>{product.rating}</p>

                                </div>
                            </div>


                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default NewProducts;