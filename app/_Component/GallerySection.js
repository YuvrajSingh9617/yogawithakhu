"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaImage } from "react-icons/fa";

const galleryImages = [
    "/gallery/1.webp",
    "/gallery/2.webp",
    "/gallery/2.webp",
    "/gallery/2.webp",
    "/gallery/2.webp",
    "/gallery/1.webp",
    "/gallery/1.webp",
    "/gallery/1.webp",
    "/gallery/1.webp",
];

const GallerySection = () => {
    const [selectedIndex, setSelectedIndex] = useState(null);

    const handleNext = (e) => {
        e.stopPropagation();
        setSelectedIndex((prev) =>
            prev !== null ? (prev + 1) % galleryImages.length : null
        );
    };

    const handlePrev = (e) => {
        e.stopPropagation();
        setSelectedIndex((prev) =>
            prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null
        );
    };


    return (
        <section id="gallery" className="bg-gradient-to-r from-yellow-500 to-orange-500 w-full py-12 relative">
            <div className="max-w-7xl mx-auto p-4">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                    {galleryImages.map((src, index) => (
                        <div
                            key={index}
                            className="relative group cursor-pointer aspect-square overflow-hidden"
                            onClick={() => setSelectedIndex(index)}
                        >
                            <Image
                                src={src}
                                alt={`Gallery ${index + 1}`}
                                fill
                                className="relative object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black opacity-40" ></div>
                            <div className="absolute inset-0 bg-[#0000007a] bg-opacity-50 opacity-0 translate-y-[-20%] group-hover:opacity-100 group-hover:translate-y-0 flex items-center justify-center transition-all duration-300">
                                <FaImage className="w-10 h-10 text-yellow-300" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedIndex !== null && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
                    onClick={() => setSelectedIndex(null)}
                >
                    <div className="relative max-w-3xl w-full mx-4">
                        <Image
                            src={galleryImages[selectedIndex]}
                            alt={`Selected Image ${selectedIndex + 1}`}
                            width={1200}
                            height={800}
                            className="w-full h-auto rounded-lg"
                        />

                        {/* Close */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedIndex(null);
                            }}
                            className="absolute top-2 right-2 text-white bg-gray-800 hover:bg-gray-600 rounded-full p-2"
                        >
                            ✕
                        </button>

                        {/* Prev */}
                        <button
                            onClick={handlePrev}
                            className="absolute top-1/2 left-2 -translate-y-1/2 bg-white text-black p-2 rounded-full hover:bg-gray-300"
                        >
                            ◀
                        </button>

                        {/* Next */}
                        <button
                            onClick={handleNext}
                            className="absolute top-1/2 right-2 -translate-y-1/2 bg-white text-black p-2 rounded-full hover:bg-gray-300"
                        >
                            ▶
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default GallerySection;
