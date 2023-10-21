// import { useEffect, useState } from "react";
import { useContext } from "react";
import { MdStarRate } from "react-icons/md";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";


const DetailsProduct = () => {
    const { user } = useContext(AuthContext)

    console.log();


    const { id } = useParams()
    const brands = useLoaderData()

    console.log(brands);

    const handleAddToCart = () => {

        fetch('https://brands-prouduct-server.vercel.app/cartItems', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...brands, userEmail: user.email }),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Product added to cart:', data);
                Swal.fire({
                    icon: 'success',
                    title: 'successfully',
                    text: 'Product successfully added to the cart!',

                })
            })
            .catch(error => {
                console.error('Error adding product to cart:', error);
            });
    };


    return (
        <div>
            <div className="card my-10 w-9/12 mx-auto text-black  bg-secColor p-5 shadow-xl">
                <figure><img src={brands.photo} alt="Shoes" className="md:h-[600px] md:w-[650px]" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{brands.brand} {brands.name}</h2>
                    <p className='flex items-center gap-2'>  <MdStarRate></MdStarRate>{brands.rating}</p>
                    <p className="text-lg font-medium"> <span className=" font-medium text-xl text-black">Price:</span>{brands.price}</p>
                    <p>{brands.description}</p>
                    <div className="card-actions ">
                        <Link>
                            <button onClick={handleAddToCart} className="btn  bg-priColor hover:bg-thirColor text-white"> Add Cart</button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DetailsProduct;