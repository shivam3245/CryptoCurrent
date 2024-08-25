import { useNavigate } from "react-router-dom";
import { LogoIcon } from "../icons/icons";
import { Link } from 'react-scroll';

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-black relative text-white font-semibold h-14 flex items-center justify-between px-4 sm:px-6">
            <div
                className="flex items-center gap-2 cursor-pointer transform transition duration-300 hover:scale-105"
                onClick={() => navigate('/')}
            >
                <LogoIcon />
                <p className="font-semibold text-xl md:text-2xl">
                    <span className="text-yellow-600">C</span>ypto<span className="text-yellow-500">T</span>rendZ
                </p>
            </div>
            <div className="flex items-center gap-2 md:gap-10">
                <div
                    className="cursor-pointer text-lg md:text-2xl pr-2 transform transition duration-300 hover:scale-105"
                    onClick={() => navigate('/')}
                >
                    Home
                </div>
                <div className="cursor-pointer pr-2 text-lg md:text-2xl transform transition duration-300 hover:scale-105">
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
            </div>
        </div>
    );
}

export default Navbar;
