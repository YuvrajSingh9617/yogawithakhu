import { FaLocationArrow, FaPhoneAlt, FaEnvelope, FaGlobe } from "react-icons/fa";
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/public/logo/logo.webp';


const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-yellow-500 to-orange-500 w-full text-white py-10">
            {/* Upper Section */}
            <div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Left Section */}
                <div className="text-center md:text-left">
                    <div className="mx-auto md:mx-0 w-fit">
                        <Image
                            src={Logo}
                            alt="Logo"
                            width={100}
                            height={100}
                            priority
                            quality={75}
                        />
                    </div>
                    <h2 className="text-2xl font-bold mt-2">
                        YOGA WITH AKHILESH
                    </h2>
                </div>

                {/* Middle Section */}
                <div className="text-center md:text-left">
                    <h3 className="text-lg font-semibold text-gray-300">Useful Links</h3>
                    <ul className="mt-2 space-y-2">
                        <li>
                            <Link rel="preload" href="#home" className="hover:no-underline cursor-pointer">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link rel="preload" href="#about" className="hover:no-underline cursor-pointer">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link rel="preload" href="#contact" className="hover:no-underline cursor-pointer">
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Right Section */}
                <div className="text-center md:text-left">
                    <h3 className="text-lg font-semibold text-gray-300">Our Location</h3>
                    <p className="mt-2 flex items-center gap-2">
                        <FaLocationArrow
                            className="md:text-yellow-300 text-white" />
                        125, AJ Block, Sector II, Bidhannagar, Kolkata, West Bengal 700136
                    </p>
                    <div className="mt-4 space-y-2">
                        <p className="flex items-center justify-center md:justify-start gap-2">
                            <Link rel="preload" href="tel:+918938990265" className="flex items-center gap-2 hover:no-underline">
                                <FaPhoneAlt className="md:text-yellow-300 text-white" />
                                +91-8938990265
                            </Link>
                        </p>
                        <p className="flex items-center justify-center md:justify-start gap-2">
                            <Link rel="preload" href="mailto:akhileshraturi06@gmail.com" className="flex items-center gap-2 hover:no-underline">
                                <FaEnvelope className="md:text-yellow-300 text-white" />
                                akhileshraturi06@gmail.com
                            </Link>
                        </p>
                        <p className="flex items-center justify-center md:justify-start gap-2">
                            <Link href="https://yogawithakhu.vercel.app" target="_blank" rel="noopener noreferrer preload" className="flex items-center gap-2 hover:no-underline">
                                <FaGlobe className="md:text-yellow-300 text-white" />
                                yogawithakhu.vercel.app
                            </Link>
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-10 border-t-2 border-gray-400 pt-5 text-center text-white text-sm">
                <p>&copy; 2025 Yoga Center. All Rights Reserved</p>
                <p className="mt-1">
                    Developed by{" "}
                    <Link rel="preload" href="https://Yuvraj_Singh" target="_blank">
                        <span className="text-blue-400 hover:no-underline cursor-pointer">Yuvraj Singh</span>
                    </Link>
                </p>
            </div>
        </footer>

    );
};

export default Footer;
