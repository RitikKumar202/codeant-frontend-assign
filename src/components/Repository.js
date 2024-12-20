import React, { useEffect, useState } from 'react';
import { FiRefreshCw, FiSearch, FiPlus } from "react-icons/fi";
import { PiDatabase } from "react-icons/pi";
import repositoriesData from '../data/repositories.json';

const Repository = () => {
    const [repositories, setRepositories] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [isRefreshing, setIsRefreshing] = useState(false);

    useEffect(() => {
        setRepositories(repositoriesData);
    }, []);

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredRepositories = repositories.filter(repo =>
        repo.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleRefresh = () => {
        setIsRefreshing(true);
        setRepositories([]);

        setTimeout(() => {
            setRepositories(repositoriesData);
            setIsRefreshing(false);
        }, 2000);
    };

    return (
        <div className="m-0 md:m-6 bg-[#fff] md:border md:border-[#E9EAEB] rounded-lg">
            <div className="flex flex-col p-5 border-b border-b[#E9EAEB]">
                <div className='flex flex-col justify-between md:flex-row'>
                    <div className='flex flex-col gap-1'>
                        <h1 className="text-xl md:text-2xl font-semibold">Repositories</h1>
                        <p className="text-sm text-[#414651] font-normal">{filteredRepositories.length} total repositories</p>
                    </div>
                    <div className="flex items-center gap-2 mt-3 md:mt-0">
                        <button
                            className={`bg-[#fff] hover:bg-gray-200 transition-all duration-300 text-sm text-[#414651] border border-[#D5D7DA] px-4 py-2 rounded-md shadow-sm flex items-center gap-2 ${isRefreshing ? 'opacity-50 cursor-not-allowed' : ''}`}
                            onClick={handleRefresh}
                            disabled={isRefreshing}
                        >
                            <FiRefreshCw className={`transition-transform duration-500 ${isRefreshing ? 'animate-spin' : ''}`} />
                            Refresh All
                        </button>
                        <button className="bg-[#1570EF] hover:bg-[#004fbd] transition-all duration-300 text-sm text-[#fff] px-4 py-2 rounded-md flex items-center gap-2">
                            <FiPlus /> Add Repository
                        </button>
                    </div>
                </div>

                <div className="relative w-full md:w-[360px] mt-4">
                    <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#414651]" />
                    <input
                        type="text"
                        placeholder="Search Repositories"
                        value={searchQuery}
                        onChange={handleSearch}
                        className="w-full pl-10 p-2 shadow-sm border border-[#D5D7DA] outline-none focus:border-[#414651] hover:border-[#414651] transition-all rounded-md"
                    />
                </div>
            </div>
            <div>
                {filteredRepositories.map((repo, index) => (
                    <div
                        key={index}
                        className="border-b p-4 md:p-6 flex justify-between hover:bg-[#F5F5F5] flex-col md:flex-row"
                    >
                        <div className='space-y-2'>
                            <h2 className="text-base md:text-xl font-medium flex text-[#181D27] items-center gap-2">
                                {repo.name}
                                <span
                                    className="bg-[#EFF8FF] border border-[#B2DDFF] text-xs md:text-sm text-[#175CD3] font-normal px-2 py-1 rounded-full"
                                >
                                    {repo.visibility}
                                </span>
                            </h2>
                            <div className="flex gap-3 md:gap-10 items-center text-xs md:text-base font-normal text-[#181D27] w-full">
                                <div className='flex gap-2 items-center'>
                                    {repo.language}
                                    <div className='w-2 h-2 bg-[#1570EF] rounded-full'></div>
                                </div>
                                <div className='flex items-center gap-2'><PiDatabase /> {repo.size}</div>
                                <div>
                                    <span>Updated {repo.updated}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Repository;
