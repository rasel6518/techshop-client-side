import { Link } from "react-router-dom";


const SignIn = () => {

    const handleSignin = e => {
        e.preventDefault()
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password)

        // logIn(email, password)
        //     .then(result => {




        //         navigate(location?.state ? location.state : '/')
        //         toast.success('Login  Successful');



        //     })
        //     .catch(err => {

        //         const errorCode = err.code;

        //         if (errorCode === 'auth/wrong-password') {
        //             toast.error('Password is incorrect. Please try again.')

        //         } else if (errorCode === 'auth/user-not-found') {
        //             toast.error('No user found with this email. Please check your email and try again.')

        //         } else if (errorCode === 'auth/invalid-login-credentials') {
        //             toast.error('Invalid login information')

        //         }

        //         else {
        //             toast.error('Login failed. Please try again.')
        //         }
        //     })
        e.currentTarget.reset()

    }
    return (
        <div>



            <div>

                <div className="hero min-h-screen bg-secColor">

                    <div className="hero-content w-full ">


                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <h1 className="text-center text-xl font-semibold mt-5">Login your account</h1>
                            <form onSubmit={handleSignin} className="card-body">
                                <div className="form-control">

                                    <input type="email" name="email" placeholder=" Enter Email" className="input input-bordered " required />
                                </div>
                                <div className="form-control">

                                    <input type="password" name="Enter password" placeholder="Password" className="input input-bordered" required />

                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn hover:bg-thirColor  bg-priColor text-white">Login</button>
                                </div>
                            </form>

                            <p className="text-center  font-bold mb-5">OR </p>

                            {/* <div className=" form-control text-center px-9 ">
                            <button onClick={handleGoogleLogIn} className="btn bg-black text-white hover:bg-gray-700 "><FaGoogle></FaGoogle> Login With Google</button>
                        </div> */}
                            <div className=" mb-5 text-center p-3">
                                Do Not Have An Account ? <Link className="text-blue-400 font-medium" to='/signup'> Sign Up</Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <ToastContainer position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light">

            </ToastContainer> */}

            </div>
        </div>
    );
};

export default SignIn;