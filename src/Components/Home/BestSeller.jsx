import { useEffect, useState } from "react";

const BestSeller = () => {
    const [bestseller, setBestseller] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/bestSellers')
            .then(res => res.json())
            .then(data => setBestseller(data))
    }, [])
    return (
        <div>
            <div className="mx-auto ">

                <h1 className=" text-2xl my-8 font-serif font-bold"> BEST SELLER</h1>


                <div className="grid md:grid-cols-3 gap-5 ">
                    {
                        bestseller?.map(product => (

                            <div key={product._id} className="">
                                <div className="card  bg-secColor h-[550px] p-5 shadow-xl">
                                    <div className="" ><img src={product.photo} className=" h-[400px] mx-auto" alt="Shoes" /></div>
                                    <div className="card-body">
                                        <p>{product.brand}</p>
                                        <h2 className="card-title  whitespace-nowrap">
                                            {product.name}

                                        </h2>


                                    </div>
                                </div>


                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default BestSeller;