import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <>
            <footer className="footer text-black text-xl font-semibold p-10 text-center bg-secColor ">
                <nav>
                    <header className="footer-title">Our Brands</header>

                    <Link to='/apple'> Apple</Link>
                    <Link to='/samsung'> Samsung</Link>
                    <Link to='/sony'> Sony</Link>
                    <Link to='/google'> Google</Link>
                    <Link to='/huawei'> Huawei</Link>
                    <Link to='/realme'> Realme</Link>
                </nav>
                <nav>
                    <header className="footer-title">Quick Links</header>
                    <Link to='/'>Home</Link>
                    <Link to='/mycart'>My cart</Link>
                    <Link to='/signin'>Sign In</Link>
                    <Link to='/signup'>Sign Up</Link>

                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <Link to='/about' className="link link-hover">About us </Link>
                    <Link to='/contact' className="link link-hover">Contact</Link>


                </nav>

            </footer>
        </>
    );
};

export default Footer;