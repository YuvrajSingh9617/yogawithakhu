export const metadata = {
    title: "404 - Page Not Found",
    description: "Oops! The page you are looking for does not exist.",
    robots: "noindex, nofollow",
    openGraph: {
        title: "404 - Page Not Found",
        description: "Oops! The page you are looking for does not exist.",
        url: "https://yourwebsite.com/404",
        images: [{ url: "/not-found.png" }], // Ensures correct format
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "404 - Page Not Found",
        description: "Oops! The page you are looking for does not exist.",
        images: [{ url: "/not-found.png" }],
    },
};

import Image from "next/image";
import Link from "next/link";

// Import if using a local file from `public`
// import NotFoundImage from "/not-found/404_1.webp"; 

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center p-6">
            <Image
                src="/not-found/404_1.webp"
                alt="Not Found"
                width={200}
                height={200}
                priority
                className="w-full sm:max-w-xs md:max-w-md p-4"
            />
            <h2 className="text-2xl font-semibold mt-4">Not Found</h2>
            <p className="text-gray-600 mb-4">Could not find the requested resource.</p>
            <Link href="/">
                <span className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
                    Return Home
                </span>
            </Link>
        </div>
    );
}
