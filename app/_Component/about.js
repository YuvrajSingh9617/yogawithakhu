'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";
import YogaTrainer from "@/public/about/11421570.png";
import Parallax_bg_Image from "@/public/first_banner/bg_1.webp";
import sunrise_Parallax_bg_Image from "@/public/first_banner/sunrise.webp";

const About = () => {
  return (
    <>
      <section id="about" className="pt-10 pb-10 bg-gradient-to-r from-yellow-500 to-orange-500 md:pt-20 md:pb-12"      >
        <div className="container mx-auto px-6 lg:px-10 flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">

          {/* Left Side - Image */}
          <div className="w-full flex justify-center lg:w-1/2">
            <Image
              src={YogaTrainer}
              alt="Yoga Trainer"
              width={300}
              height={300}
              className="max-w-xs md:max-w-sm lg:max-w-md w-full h-auto rounded-lg drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)] object-cover"
              priority
            />
          </div>

          {/* Right Side - Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">About Me</h2>
            <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed">
              Welcome to a journey of health and wellness! As a certified yoga trainer, I provide personalized
              yoga sessions both online and at the comfort of your home. Whether you are a beginner or looking
              to deepen your practice, my sessions are designed to improve flexibility, strength, and mental
              well-being. Let's embark on a holistic path to fitness together.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-white mt-4">
              Book your session today and experience the transformative power of yoga!
            </p>
          </div>
        </div>
      </section>


      <section
        className="relative w-full py-10  flex items-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${Parallax_bg_Image.src})`,
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Mission & Vision Section with Card Design */}
        <div className="container mx-auto p-6 lg:p-15  grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="backdrop-blur-lg bg-transparent p-6 shadow-md border-l-4 border-orange-500">
            <h3 className="text-2xl font-semibold text-gray-100 mb-3">Our Mission</h3>
            <p className="text-base text-gray-200 leading-relaxed">
              Our mission is to inspire and guide individuals toward a healthier, more balanced lifestyle
              through the power of yoga. We aim to make wellness accessible to everyone by offering customized
              sessions that nurture the body, mind, and soul.
            </p>
          </div>

          {/* Vision */}
          <div className="backdrop-blur-lg bg-transparent p-6 shadow-md border-l-4 border-orange-500">
            <h3 className="text-2xl font-semibold text-gray-100 mb-3">Our Vision</h3>
            <p className="text-base text-gray-200 leading-relaxed">
              Our vision is to build a community where holistic health and well-being are prioritized.
              Through the practice of yoga, we strive to empower individuals to achieve mental clarity,
              emotional balance, and physical strength.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
