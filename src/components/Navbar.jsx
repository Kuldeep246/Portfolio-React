import React, { useEffect, useState } from 'react';
import { IoMdHome } from "react-icons/io";
import { FaLink } from "react-icons/fa6";
import { MdWork } from "react-icons/md";
import { BsPersonFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(true);
    const isSmallScreen = window.innerWidth <= 640;

    useEffect(() => {
        const handleResize = () => {
            setIsVisible(window.innerWidth > 640);
        };     
        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className={`fixed p-4 transform transition-transform duration-700 ease-in-out ${
            isVisible
                ? 'top-1/2 right-0 -translate-y-1/2 translate-x-0 opacity-100'
                : isSmallScreen
                    ? 'bottom-0 left-1/2 -translate-x-1/2 opacity-100 w-96 pb-5'
                    : 'translate-x-full opacity-0'
            }`}
        >
            <ul className="menu space-y-1 md:space-y-2 bg-slate-500 rounded-xl menu-horizontal sm:menu-vertical md:px-1">
                <li>
                    <Link to="/" className="text-black hover:scale-125 transition-transform text-xl md:text-3xl hover:text-blue-800 cursor-pointer">
                        <IoMdHome />
                    </Link>
                </li>
                <li>
                    <Link to="/about" className="text-black hover:scale-125 transition-transform text-xl md:text-3xl hover:text-blue-800 cursor-pointer">
                        <BsPersonFill />
                    </Link>
                </li>
                <li>
                    <Link to="/projects" className="text-black hover:scale-125 transition-transform text-xl md:text-3xl hover:text-blue-800 cursor-pointer">
                        <MdWork />
                    </Link>
                </li>
                <li>
                    <Link to="/public-profiles" className="text-black text-xl md:text-3xl hover:scale-125 transition-transform hover:text-blue-800 cursor-pointer">
                        <FaLink />
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;
