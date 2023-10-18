import { Link } from "react-router-dom";

const SignUp = () => {
    const handleSignup = (e) => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);

        const name = form.get("name");
        const photourl = form.get("photourl");
        const email = form.get("email");
        const password = form.get("password");

        console.log(name, photourl, email, password);

        // // Password validation
        // const hasMinLength = password.length >= 6;
        // const hasCapitalLetter = /[A-Z]/.test(password);
        // const hasSpecialCharacter = /[!@#$%^&*()_+]/.test(password);

        // if (!hasMinLength) {
        //     toast.error("Password must be at least 6 characters long.");
        //     return;
        // }

        // if (!hasCapitalLetter) {
        //     toast.error("Password must contain at least one capital letter.");
        //     return;
        // }

        // if (!hasSpecialCharacter) {
        //     toast.error("Password must contain at least one special character.");
        //     return;
        // }

        // CreateUser(email, password)
        //     .then((result) => {
        //         const SignUpUser = result.user;

        //         updateProfile(result.user, {
        //             displayName: name,
        //             photoURL: photourl,
        //         })
        //             .then(() => console.log("Update Profile"))
        //             .catch((err) => console.log(err.message));

        //         navigate("/login");
        //     })
        //     .catch((err) => {
        //         const errorCode = err.code;
        //         const errorMessage = err.message;

        //     });

        // e.currentTarget.reset();
        // toast.success("Registration successful!");
    };
    return (
        <div>
            <div>
                <div className="hero w-full min-h-screen bg-secColor">

                    <div className="hero-content w-full ">


                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <h1 className="text-center text-xl font-semibold mt-5">Register your account</h1>
                            <form onSubmit={handleSignup} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Enter your name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" name="photourl" placeholder="Enter Photo URL" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="Password" className="input input-bordered" required />

                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn  hover:bg-thirColor bg-priColor text-white"> SIGN UP </button>
                                </div>
                            </form>
                            <div className=" mb-5 text-center p-3">
                                Do  Have An Account ? <Link className="text-blue-400 font-medium" to='/signin'> Signin</Link>
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

export default SignUp;