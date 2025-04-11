"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Loading from "./_Component/Loading";
import First_Banner from "./_Component/first_banner";
import About from "./_Component/about";
import ContactForm from "./_Component/ContactForm";
import GallerySection from "./_Component/GallerySection";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay (e.g., fetching images/data)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // 1.5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && (
        <div>
          <First_Banner />
          <About />
          <GallerySection />
          <ContactForm />
        </div>
      )}
    </>
  );
}

