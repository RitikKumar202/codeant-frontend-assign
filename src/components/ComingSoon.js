import React from 'react';
import { Link } from 'react-router-dom';

const ComingSoon = () => {
    return (
        <div className="h-full flex items-center justify-center bg-[#EFF8FF] text-[#1570EF]">
            <div className="text-center px-6 sm:px-12 max-w-lg">
                <h1 className="text-4xl sm:text-6xl font-bold mb-6">
                    Coming Soon
                </h1>
                <p className="text-lg sm:text-xl mb-8 text-[#519aff]">
                    We're working hard to bring you something amazing. Stay tuned for updates!
                </p>
                <form className="flex items-center justify-center gap-2 md:gap-4">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-[180px] md:w-[250px] custom-shadow p-2 md:px-4 md:py-2 rounded-lg text-[#181D27] text-sm md:text-lg focus:outline-none border-2 border-[#D5D7DA] focus:border-[#B2DDFF]"
                    />
                    <button
                        type="submit"
                        className="custom-shadow bg-blue-600 border-2 border-[#0051c3] hover:bg-blue-700 text-[#fff] px-3 py-2 md:px-4 md:py-2 rounded-lg text-sm md:text-lg font-semibold transition-colors"
                    >
                        Notify Me
                    </button>
                </form>
                <div className="mt-8 text-sm">
                    <p>
                        Follow us on{' '}
                        <Link
                            target='_blank'
                            to="https://www.linkedin.com/company/codeant-ai/"
                            className="underline text-[#181D27] transition-colors"
                        >
                            Linkedin
                        </Link>{' '}
                        for the latest updates.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ComingSoon;
