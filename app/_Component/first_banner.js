'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from "framer-motion"; // ✅ Import motion from Framer Motion
import bgImage from '@/public/first_banner/bg_1.webp';

const First_Banner = () => {
  return (
    <section
      className="relative w-full h-[641px] flex items-center bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${bgImage.src})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center h-full">
          <div className="text-white animate-fadeInUp">
            <h1 className="text-yellow-500 text-lg inline-block mb-2 text-[24px] text-opacity-90 font-reenie">
              Welcome to Yogabest
            </h1>
            <h1 className="text-4xl font-bold mt-4">Yoga Enhances Your Life</h1>
            <p className="mt-4 text-lg text-gray-300">
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
              there live the blind texts. Separated they live in Bookmarksgrove.
            </p>
          </div>

          <div className="flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              whileHover={{ scale: 1.1 }}
            >
              <Link href="https://vimeo.com/45830194">
                <motion.div
                  className="flex items-center justify-center w-16 h-16 bg-yellow-500 rounded-full shadow-lg cursor-pointer"
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="text-white text-2xl">▶</span>
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default First_Banner;
