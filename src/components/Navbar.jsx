import React, {useState} from "react";
import { Link } from "react-scroll";
import Button from "./Button";
import logo from '../assets/images/logokoala.svg'
import logored from '../assets/images/logokoalared.svg'


const Navbar = () => {
    const [logocolor, setLogoColor] = useState(logo);
    let links = [
        { name: 'Home', link: 'home-section' },
        { name: 'Products', link: 'product-section' },
        { name: 'Contact', link: 'contact-section' },
        { name: 'About', link: 'about-section' },
    ];
    return (
        <div className="overflow-hidden navkoala fixed top-0 left-0 right-0 md:px-20 px-10 py-5 text-greenst bg-creamst w-screen md:flex md:justify-between md:items-center border-b-4 border-stickered border-dashed z-50">

            <h1 className="flex logokoala justify-center items-center gap-1 font-medium font-serif text-4xl hover:text-stickered cursor-pointer"
            onMouseEnter={() => setLogoColor(logored)}
            onMouseLeave={() => setLogoColor(logo)}
            >
            <img src={logocolor} className="w-10" alt="" />
                Stickoala
            </h1>

            <ul className="md:flex md:items-center">
                {links.map((link, index) => (
                    <li key={index} className="mt-5 mb-5 md:ml-7 text-md font-medium">
                        <Link
                            to={link.link}
                            smooth={true}
                            duration={500}
                            spy={true}
                            className="hover:text-stickered cursor-pointer"
                            activeClass="text-stickered"
                        >
                            {link.name}
                        </Link>
                    </li>
                ))}
                <div className="md:ml-7 mt-5 mb-5">
                    <Button text="Order Here" />
                </div>
            </ul>
        </div>
    );
}

export default Navbar;
