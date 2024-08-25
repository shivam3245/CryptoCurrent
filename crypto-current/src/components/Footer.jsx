import React from "react";
import { Link } from "react-scroll";
import { FaFacebook } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
    return (
        <footer className="bg-black text-white text-ExtraDarkColor rounded-t-3xl mt-8 md:mt-0">
            <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">

                <div className="text-center md:text-left">
                    <h1 className="font-semibold text-3xl pb-4">CryptoTrendZ</h1>
                    <div className="flex justify-center md:justify-start gap-5 ml-0 md:ml-3">
                        <FaFacebook
                            size={32}
                            className="hover:scale-110 cursor-pointer transition duration-300 ease-in-out"
                        />
                        <RiTwitterXLine
                            size={32}
                            className="hover:scale-110 cursor-pointer transition duration-300 ease-in-out"
                        />
                        <RiInstagramFill
                            size={32}
                            className="hover:scale-110 cursor-pointer transition duration-300 ease-in-out"
                        />
                    </div>
                </div>

                <div className="text-center md:text-left">
                    <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Company</h1>
                    <nav className="flex flex-col gap-2">
                        <Link
                            to="/"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="hover:scale-105 cursor-pointer transition duration-300 ease-in-out"
                        >
                            About us
                        </Link>
                        <Link
                            to="/"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="hover:scale-105 cursor-pointer transition duration-300 ease-in-out"
                        >
                            Contact
                        </Link>
                        <Link
                            to="/"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="hover:scale-105 cursor-pointer transition duration-300 ease-in-out"
                        >
                            News
                        </Link>
                        <Link
                            to="/"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="hover:scale-105 cursor-pointer transition duration-300 ease-in-out"
                        >
                            Support
                        </Link>
                    </nav>
                </div>

                <div className="w-full md:w-1/4 text-center md:text-left">
                    <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Contact Us</h1>
                    <nav className="flex flex-col gap-2">
                        <Link to="/" spy={true} smooth={true} duration={500}>
                            123 Emperial Welfare Society, Kandivali-West, Mumbai-400067
                        </Link>
                        <Link to="/" spy={true} smooth={true} duration={500}>
                            CryptoTrendZ.com
                        </Link>
                        <Link to="/" spy={true} smooth={true} duration={500}>
                            +123-456-7890
                        </Link>
                    </nav>
                </div>
            </div>

            <div>
                <p className="text-center py-4">
                    @copyright developed by
                    <span className="text-yellow-600"> Shivam Yadav</span> | All rights
                    reserved
                </p>
            </div>
        </footer>
    );
};

export default Footer;