import React from 'react';
import { FaGithub, FaLinkedin, FaYoutube,FaMedium, FaArrowUp } from 'react-icons/fa';

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-[#0f172a] text-white py-6">
            <div className="max-w-6xl mx-auto px-4 flex flex-col gap-6 md:flex-row md:justify-between items-center">

                {/* Left: Branding */}
                <div className="text-lg font-semibold">© 2025 Akash Kumar</div>

                {/* Center: Scroll to top */}
                <div
                    onClick={scrollToTop}
                    className="cursor-pointer hover:scale-140 hover:text-white text-indigo-400 text-2xl transition duration-300 ease-in-out"
                    title="Back to Top"
                >
                    <FaArrowUp className='animate-bounce transition duration-300 ease-in-out' />
                </div>

                {/* Right: Social Icons */}
                <div className="flex gap-4 text-xl">
                    <a href="https://github.com/akash200124/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/akash-kumar-5b561a271/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                        <FaLinkedin />
                    </a>
                    <a href="https://www.youtube.com/@cloudcodeworld" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
                        <FaYoutube />
                    </a>
                    <a href="https://medium.com/@akashkumar112232" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">
                        <FaMedium />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
