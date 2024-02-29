import React, { useEffect, useState } from 'react';
import { IoMdHome } from "react-icons/io";
import { FaLink } from "react-icons/fa6";
import { MdWork } from "react-icons/md";
import { BsPersonFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

const RightCenterNavbar = () => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className={`fixed p-4 top-1/2 right-0 -translate-y-1/2 transform ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        } transition-transform duration-700 ease-in-out`}>
            <ul className="menu space-y-2 bg-slate-500 rounded-xl menu-vertical px-1">
                <li>
                    <Link to="/" className="text-black hover:scale-125 transition-transform text-3xl hover:text-blue-800 cursor-pointer">
                        <IoMdHome />
                    </Link>
                </li>
                <li>
                    <Link to="/about" className="text-black hover:scale-125 transition-transform text-3xl hover:text-blue-800 cursor-pointer">
                        <BsPersonFill />
                    </Link>
                </li>

                <li>
                    <Link to="/projects" className="text-black hover:scale-125 transition-transform text-3xl hover:text-blue-800 cursor-pointer">
                        <MdWork />
                    </Link>
                </li>
                <li>
                    <Link to="/public-profiles" className="text-black text-3xl hover:scale-125 transition-transform hover:text-blue-800 cursor-pointer">
                        <FaLink />
                    </Link>
                </li>

            </ul>
        </div>
    );
}

export default RightCenterNavbar;
