import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    AiOutlineMenu,
    AiOutlineClose,
    AiOutlineHome,
    AiOutlineCloud
} from 'react-icons/ai';
import { IoCodeSlash, IoSettingsOutline, IoLogOutOutline } from "react-icons/io5";
import { LuBookText } from "react-icons/lu";
import { BsTelephone } from "react-icons/bs";
import { images } from '../utils/ImageUtils';

const Navbar = ({ onLogout }) => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const location = useLocation();

    const menuItems = [
        { icon: <AiOutlineHome size={20} />, label: 'Repositories', path: '/' },
        { icon: <IoCodeSlash size={20} />, label: 'AI Code Review', path: '/ai-code-review' },
        { icon: <AiOutlineCloud size={20} />, label: 'Cloud Security', path: '/cloud-security' },
        { icon: <LuBookText size={20} />, label: 'How to Use', path: '/how-to-use' },
        { icon: <IoSettingsOutline size={20} />, label: 'Settings', path: '/settings' },
    ];

    const actionButtons = [
        { icon: <BsTelephone size={20} />, label: 'Support' },
        { icon: <IoLogOutOutline size={20} />, label: 'Logout' },
    ];

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setSidebarOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleToggleSidebar = () => setSidebarOpen(!isSidebarOpen);

    const renderMenuItems = (items) => (
        <ul className="px-4 lg:p-4 flex flex-col md:items-center justify-center gap-[5px]">
            {items.map((item, index) => {
                const isActive = location.pathname === item.path;
                return (
                    <li
                        key={index}
                        className={`w-full lg:w-[230px] py-2 px-3 rounded-lg flex items-center space-x-2
                        ${isActive ? 'bg-[#1570EF] text-white' : 'hover:bg-gray-100 text-[#414651]'}
                        cursor-pointer transition-colors`}
                    >
                        <span>{item.icon}</span>
                        <Link
                            to={item.path}
                            className="flex-1 text-sm lg:text-base"
                            onClick={() => setSidebarOpen(false)}
                        >
                            {item.label}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );


    const renderActionButtons = (items) => (
        <ul className="px-4 lg:p-4 flex flex-col lg:items-center justify-center gap-[5px]">
            {items.map((item, index) => (
                <li
                    onClick={item.label === 'Logout' ? onLogout : undefined}
                    key={index}
                    className="cursor-pointer w-full lg:w-[230px] py-2 px-3 rounded-lg flex items-center space-x-2 hover:bg-gray-100 text-[#414651]"
                >
                    <span>{item.icon}</span>
                    <span className='text-sm lg:text-base'>{item.label}</span>
                </li>
            ))}
        </ul>
    );

    return (
        <div className="flex">
            {/* Sidebar for large screens */}
            <aside className="hidden lg:flex flex-col w-64 h-screen bg-white border-r">
                <div className="flex gap-3 items-center justify-center h-16">
                    <img src={images.Logo} alt="CodeAnt AI" className="h-7" />
                    <p className="text-2xl font-normal text-[#181D27]">CodeAnt AI</p>
                </div>
                <div className="w-full flex items-center justify-center">
                    <select className="w-[230px] border border-[#D5D7DA] outline-none rounded-md p-2 text-sm text-[#181D27]">
                        <option>RitikKumar202</option>
                        <option>UtkarshDhairyaPanwar</option>
                    </select>
                </div>
                <div className="flex-1 flex flex-col justify-between">
                    <div>{renderMenuItems(menuItems)}</div>
                    <div>{renderActionButtons(actionButtons)}</div>
                </div>
            </aside>

            {/* Header for medium and smaller screens */}
            <header className="lg:hidden flex items-center w-full h-16 px-4 bg-white border-b border-b[#E9EAEB]">
                <div className="flex-1 flex gap-3 items-center justify-start">
                    <img src={images.Logo} alt="CodeAnt AI" className="h-6 md:h-7" />
                    <p className="text-lg md:text-xl font-normal text-[#181D27]">CodeAnt AI</p>
                </div>
                <button onClick={handleToggleSidebar}>
                    {isSidebarOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
                </button>
            </header>

            {/* Navbar for small screens */}
            {isSidebarOpen && (
                <div className="fixed inset-0 bg-[#6C6C6C4D] bg-opacity-50 z-10"></div>
            )}
            <div
                className={`fixed top-0 left-0 w-full bg-white shadow-lg z-20 pb-4 transform transition-transform duration-300 ${isSidebarOpen ? 'translate-y-0' : '-translate-y-full'}`}
            >
                <div className="flex items-center justify-between h-16 px-4 bg-white border-b border-b[#E9EAEB]">
                    <div className="flex-1 flex gap-3 items-center justify-start">
                        <img src={images.Logo} alt="CodeAnt AI" className="h-6 md:h-7" />
                        <p className="text-lg md:text-xl font-normal text-[#181D27]">CodeAnt AI</p>
                    </div>
                    <button onClick={handleToggleSidebar}>
                        <AiOutlineClose size={24} />
                    </button>
                </div>
                <div className="w-full p-4 flex items-center justify-center">
                    <select className="w-full border border-[#D5D7DA] outline-none rounded-md p-2 text-sm text-[#181D27]">
                        <option>RitikKumar202</option>
                        <option>UtkarshDhairyaPanwar</option>
                    </select>
                </div>
                <div className="flex flex-col">
                    {renderMenuItems(menuItems)}
                    {renderActionButtons(actionButtons)}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
