'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react'; // ✅ Uncommented this
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '@/public/logo/logo.webp';
import { IoIosMail } from "react-icons/io";
import { MdAddCall } from "react-icons/md";
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolling(window.scrollY > 10);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on load
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div id="home" className="bg-gradient-to-r from-yellow-500 to-orange-500 w-full ">
        <div className="container mx-auto text-white font-bold text-sm py-1 px-4 flex justify-end items-center max-md:justify-center">
          <div className="flex space-x-4 max-md:flex-col max-md:space-x-0 max-md:space-y-1 max-md:items-center max-md:text-center">
            <span className="flex gap-1 items-center">
              <Link href="mailto:akhileshraturi06@gmail.com" className="flex items-center gap-2 hover:no-underline">
                <FaEnvelope className="text-yellow-300" />
                akhileshraturi06@gmail.com
              </Link>
            </span>
            <span className="flex gap-1 items-center">
              <Link href="tel:+918938990265" className="flex items-center gap-2 hover:no-underline">
                <FaPhoneAlt className="text-yellow-300" />
                +91-8938990265
              </Link>
            </span>
          </div>
        </div>
      </div>


      {/* Sticky Navbar */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 max-md:backdrop-blur-lg ${scrolling
          ? 'backdrop-blur-lg shadow-md mt-0 border-b-2 border-amber-600'
          : 'bg-transparent md:mt-8 mt-12'
          }`}
      >
        <div className="container mx-auto flex justify-between items-center p-4">
          <Link href="#home" className="flex items-center space-x-2">
            <Image src={Logo} alt="Logo" width={40} height={40} />
            <span
              className={`text-xl font-bold transition-all duration-300 ${scrolling ? 'text-white' : 'text-white'
                }`}
            >
              yogawithakhu
            </span>
          </Link>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="transition-all duration-300 text-white"
              aria-label="Toggle Menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6">
            {['About', 'Services', 'Gallery', 'Contact'].map((item) => (
              <li key={item}>
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-gray-400 text-white transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.5 }}
              className="md:hidden flex flex-col items-center space-y-4 pb-4 bg-transparent backdrop-blur-lg shadow-md"
            >
              {['About', 'Services', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-white hover:text-gray-400"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>

      </nav>
    </>
  );
};

export default Navbar;
