import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <>
            <footer className="footer p-10 bg-base-300 text-base-content">
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
                    <Link to='/blog'>Blog</Link>
                    <Link to='/login'>Login</Link>
                    <Link to='/register'>Register</Link>

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