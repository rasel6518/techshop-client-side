import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <>
            <footer className="footer text-black text-xl font-semibold p-10 text-center bg-secColor ">
                <nav>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Tech Conference</a>
                    <a className="link link-hover">Gaming Convention</a>
                    <a className="link link-hover">Hackathon</a>
                    <a className="link link-hover">VR Gaming Expo</a>
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