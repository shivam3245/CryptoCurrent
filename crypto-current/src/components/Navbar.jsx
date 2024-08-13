import { useNavigate } from "react-router-dom";
import { LogoIcon } from "../icons/icons";
import { Link } from 'react-scroll';

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-gradient-to-r from-black to-blue-700 text-white h-14 flex items-center justify-between px-6">
            <div
                className="flex items-center px-10 gap-2 cursor-pointer transform transition duration-300 hover:scale-105"
                onClick={() => navigate('/')}
            >
                <LogoIcon />
                <p className="font-semibold text-2xl">
                    <span className="text-yellow-500">C</span>ypto<span className="text-yellow-500">T</span>rendZ
                </p>
            </div>

            <div className="flex items-center px-20 text-xl">
                <div
                    className="cursor-pointer transform transition duration-100 hover:scale-105"
                    onClick={() => navigate('/')}
                >
                    Home
                </div>

                <div className="ml-14 cursor-pointer transform transition duration-100 hover:scale-105">
                    <Link
                        to="Markets"
                        smooth={true}
                        duration={600}
                        offset={-70}
                        activeClass="active"
                        className="cursor-pointer transform transition duration-300 hover:scale-105"
                    >
                        Markets
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
