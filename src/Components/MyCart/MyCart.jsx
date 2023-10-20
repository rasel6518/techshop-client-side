import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { MdStarRate } from "react-icons/md";
import Swal from "sweetalert2";

const MyCart = () => {
    const loadedCart = useLoaderData();

    const [cart, setCart] = useState(loadedCart)

    const { user } = useContext(AuthContext);

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, remove it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`http://localhost:5000/cartitems/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);

                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'removed!',
                                'Your product has been removed.',
                                'success'
                            )


                        }
                    })



            }
        })
    }


    const userCart = cart?.filter((item) => item.userEmail === user?.email);

    return (
        <div >

            <div className="grid md:grid-cols-2  rounded-md bg-secColor w-9/12 mx-auto">
                {userCart.length > 0 ? (
                    userCart.map((item) => (
                        <div key={item._id} className="">
                            <div className=" w-full  lg:px-8 lg:py-14 md:px-6 px-4 md:py-8 py-4 text-black  " >

                                {/* <p className="lg:text-4xl text-3xl font-black leading-10 text-gray-800  pt-3">Your Product </p> */}

                                <div className="md:flex  py-8 md:py-10 lg:py-8 border-r border-gray-50">
                                    <div className="md:w-4/12 2xl:w-1/4 w-full">
                                        <img src={item.photo} alt="Gray Sneakers" className="h-full object-center object-cover md:block hidden" />
                                        <img src={item.photo} alt="Black Leather Bag" className="md:hidden w-[250px] h-[230px] " />

                                    </div>
                                    <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">

                                        <div className="flex items-center justify-between w-full pt-1">
                                            <p className="text-xl font-black leading-none text-gray-800 ">{item.brand} {item.name}</p>

                                        </div>

                                        <p className="text-lg leading-3 text-gray-600 flex items-center gap-2 py-4"><MdStarRate className="text-xl text-amber-500"></MdStarRate>{item.rating}</p>
                                        <p className="w-96 text-lg leading-3 text-gray-600 ">Price: {item.price}</p>
                                        <div className="flex items-center justify-between pt-5">
                                            <div className="flex itemms-center">

                                                <p

                                                    onClick={() => handleDelete(item._id)}


                                                    className="text-xl leading-3 underline text-red-500 pl-5 cursor-pointer">Remove</p>
                                            </div>

                                        </div>
                                    </div>
                                </div>


                            </div>


                        </div>
                    ))
                ) : (
                    <p>No items in the cart.</p>
                )}
            </div>


        </div>
    );
};

export default MyCart;
