import React from "react";
import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa6";
function Footer() {
    return (
        <>
            <footer className="pt-5 pb-5 bg-gradient-to-b from-gray-950 to-black border-t-2 rounded-t-lg">
                <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
                    <div className=" flex flex-col items-center justify-center ">
                        <div className="flex space-x-4 ">
                            <ul className="flex space-x-4 text-white">
                                <li className="text-2xl hover:scale-125 duration-200 font-semibold cursor-pointer"> <a href='https://www.facebook.com/profile.php?id=100005207358572' target='blank'><FaFacebook size={24} /></a></li>
                                <li className="text-2xl hover:scale-125 duration-200 font-semibold cursor-pointer"> <a href='https://x.com/ShivamY42010209'><FaTwitter size={24} /></a></li>
                                <li className="text-2xl hover:scale-125 duration-200 font-semibold cursor-pointer"><a href='https://www.instagram.com/shivam_yadavz/' target='blank'><FaInstagram size={24} /></a></li>
                                <li className="text-2xl hover:scale-125 duration-200 font-semibold cursor-pointer"><a href='https://www.linkedin.com/in/shivam-yadav-89835321b/' target='blank'><FaLinkedinIn size={24} /></a></li>
                            </ul>
                        </div>
                        <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col text-white items-center">
                            <p className="text-sm">
                                &copy; 2024 Shivam Yadav. All rights reserved.
                            </p>
                            <p className="text-sm">Supportive Partner ❤️ Shivam</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;