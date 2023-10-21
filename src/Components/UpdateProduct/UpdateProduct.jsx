import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateProduct = () => {

    const brands = useLoaderData()
    console.log(brands);

    const handleUpdateProduct = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const brand = form.brand.value
        const type = form.type.value
        const price = form.price.value
        const description = form.description.value
        const rating = form.rating.value
        const photo = form.photo.value

        const updateProduct = { name, brand, type, description, photo, rating, price };
        console.log(updateProduct);
        fetch(`https://brands-prouduct-server.vercel.app/brands/${brands._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateProduct)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Updated Product ',
                        showClass: {
                            popup: 'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                            popup: 'animate__animated animate__fadeOutUp'
                        }
                    })
                }

            })


    }

    return (
        <div className="w-9/12 mx-auto">
            <h1 className="text-black  font-serif font-bold text-2xl">Update Your Product Details</h1>

            <section className=" p-6 mx-auto bg-secColor rounded-md shadow-md mt-20">

                <form onSubmit={handleUpdateProduct}>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label className="text-black " htmlFor="username">Name</label>
                            <input id="username" type="text" name="name" defaultValue={brands.name} className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-300 rounded-md   focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-black " htmlFor="emailAddress">Brand Name</label>
                            <input type="text" name="brand" defaultValue={brands.brand} className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-300 rounded-md   focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-black " htmlFor="password">Type</label>
                            <select
                                name="type"
                                className="block w-full px-4 bg-white py-2 mt-2 rounded-md   focus:border-blue-500  focus:outline-none focus:ring"
                                id="type"
                                defaultValue="Pick Your Product Type"
                            >
                                <option disabled value="Pick Your Product Type">
                                    Pick Your Product Type
                                </option>
                                <option value="phone">phone</option>
                                <option value="computer">computer</option>
                                <option value="smart watch">camera</option>
                                <option value="headphone">headphone</option>
                                <option value="smart watch">smart watch</option>
                                <option value="smart watch">other</option>


                            </select>
                        </div>

                        <div>
                            <label className="text-black " htmlFor="passwordConfirmation">Price</label>
                            <input type="text" name="price" defaultValue={brands.price} className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-300 rounded-md   focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="text-black " htmlFor="passwordConfirmation">Rating</label>
                            <input type="text" name="rating" defaultValue={brands.rating} className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-300 rounded-md   focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-black " htmlFor="passwordConfirmation">Short description</label>
                            <input type="text" name="description" defaultValue={brands.description} className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-300 rounded-md   focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="text-black " htmlFor="passwordConfirmation">Photo</label>
                            <input type="text" name="photo" defaultValue={brands.photo} className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-300 rounded-md   focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>





                    </div>

                    <div className="flex justify-end mt-6">
                        <button className="px-6 py-2 w-full  text-white transition-colors duration-200 transform bg-priColor rounded-md hover:bg-thirColor focus:outline-none focus:bg-gray-600">Update Product</button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default UpdateProduct;