import Image from 'next/image'; // Import Image from next/image
import Logo from '@/public/logo/logo.webp';

const Loading = () => {
    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm">
            <Image src={Logo} alt="Logo" width={100} height={100} />
            <p className="mt-4 text-lg font-semibold text-gray-700">
                Loading<span className="animated-dots"></span>
            </p>
        </div>
    );
};

export default Loading;
9