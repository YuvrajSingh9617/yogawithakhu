import { FaPhoneAlt, FaEnvelope, FaGlobe } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-orange-500 to-orange-500 w-full text-white py-10">
            <div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Left Section */}
                <div>
                    <h2 className="text-2xl font-bold">
                        YOGA WITH AKHILESH
                    </h2>
                    <p className="mt-2">
                        125, AJ Block, Sector II, Bidhannagar, Kolkata, West Bengal 700136
                    </p>
                    <div className="mt-4 space-y-2">
                        <p className="flex items-center gap-2">
                            <Link href="tel:+918938990265" className="flex items-center gap-2 hover:no-underline">
                                <FaPhoneAlt className="text-yellow-300" />
                                +91-8938990265
                            </Link>
                        </p>
                        <p className="flex items-center gap-2">
                            <Link href="mailto:akhileshraturi06@gmail.com" className="flex items-center gap-2 hover:no-underline">
                                <FaEnvelope className="text-yellow-300" />
                                akhileshraturi06@gmail.com
                            </Link>
                        </p>
                        <p className="flex items-center gap-2">
                            <Link href="https://yogawithakhu.vercel.app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:no-underline">
                                <FaGlobe className="text-yellow-300" />
                                yogawithakhu.vercel.app
                            </Link>
                        </p>
                    </div>
                </div>

                {/* Middle Section */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-300">Useful Links</h3>
                    <ul className="mt-2 space-y-2">
                        <li>
                            <Link href="#home"
                                className="hover:no-underline cursor-pointer">Home
                            </Link>
                        </li>
                        <li>
                            <Link href="#about"
                                className="hover:no-underline cursor-pointer">About Us
                            </Link>
                        </li>
                        <li>
                            <Link href="#contact"
                                className="hover:no-underline cursor-pointer">Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Right Section */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-300">Our Services</h3>
                    <ul className="mt-2 space-y-2">
                        <li>
                            <Link href="/#quality">
                                <span className="hover:no-underline cursor-pointer">Quality</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/#products">
                                <span className="hover:no-underline cursor-pointer">Products</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-10 border-t border-gray-700 pt-5 text-center text-white text-sm">
                <p>Copyright &copy; 2025 Yoga Center. All Rights Reserved</p>
                <p className="mt-1">
                    Developed by{" "}
                    <Link href="https://Yuvraj_Singh" target="_blank">
                        <span className="text-blue-400 hover:no-underline cursor-pointer">Yuvraj Singh</span>
                    </Link>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
