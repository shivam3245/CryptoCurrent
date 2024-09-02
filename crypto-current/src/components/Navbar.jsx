import { useNavigate } from "react-router-dom";
import { LogoIcon } from "../icons/icons";
import { Link } from 'react-scroll';
import AuthPage from "./AuthPage";
import { FaUser } from "react-icons/fa";
import { useState } from "react";


const Navbar = () => {
    const navigate = useNavigate();
    const [showAuthPage, setShowAuthPage] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");

    const openAuthPage = () => {
        setShowAuthPage(true);
    };

    const closeAuthPage = () => {
        setShowAuthPage(false);
    };

    const handleLogin = (name) => {
        setIsLoggedIn(true);
        setUsername(name);
        closeAuthPage();
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setUsername("");
    }

    return (
        <div className="bg-black w-full text-white font-semibold h-14 flex items-center justify-between px-4 sm:px-6 z-10">
            <div
                className="flex items-center gap-2 cursor-pointer transform transition duration-300 hover:scale-105"
                onClick={() => navigate('/')}
            >
                <LogoIcon />
                <p className="font-semibold text-xl md:text-2xl">
                    <span className="text-yellow-600">C</span>ypto<span className="text-yellow-500">T</span>rendZ
                </p>
            </div>
            <div className=" flex items-center gap-2 md:gap-5">
                <div
                    className="cursor-pointer text-md md:text-2xl pr-2 transform transition duration-300 hover:scale-105"
                    onClick={() => navigate('/')}
                >
                    Home
                </div>
                <div className="cursor-pointer text-md md:text-2xl pr-2 transform transition duration-300 hover:scale-105">
                    <Link
                        to="Trending"
                        smooth={true}
                        duration={600}
                        offset={-70}
                        activeClass="active"
                    >
                        Trending
                    </Link>
                </div>
                <div className="cursor-pointer text-md md:text-2xl transform transition duration-300 hover:scale-105">
                    <Link
                        to="Markets"
                        smooth={true}
                        duration={600}
                        offset={-70}
                        activeClass="active"
                    >
                        Markets
                    </Link>
                </div>
                {/* Icons Section */}
                <div className="hidden lg:block items-center pl-10">
                    <FaUser
                        size={25}
                        onClick={openAuthPage}
                        className="cursor-pointer text-DarkColor"
                    />
                </div>
                <div>
                    {isLoggedIn ? (
                        <div className="items-center gap-2">
                            <span className="text-xl px-2 font-medium text-white">
                                {username}
                            </span>
                            <button
                                onClick={handleLogout}
                                className="text-sm text-blue-500 underline"
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        showAuthPage && (
                            <AuthPage
                                onClose={closeAuthPage}
                                onLogin={handleLogin}
                            />
                        )
                    )}
                </div>
            </div>
        </div >
    );
};

export default Navbar;
