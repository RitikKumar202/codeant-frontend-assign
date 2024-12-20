import React, { useState } from 'react'
import { images } from '../utils/ImageUtils';

const MainInfoCard = () => (
    <div className='bg-[#fff] w-[445px] h-[170px] custom-shadow rounded-3xl'>
        <div className='flex items-center gap-2 border-b border-b-[#E6E8F0] px-5 py-4'>
            <img src={images.Logo} alt="CodeAnt AI" className='w-7' />
            <h2 className='text-lg font-bold text-[#081735]'>AI to Detect & Autofix Bad Code</h2>
        </div>
        <div className='flex gap-8 items-center justify-center p-5'>
            {[
                { label: 'Language Support', value: '30+' },
                { label: 'Developers', value: '10K+' },
                { label: 'Hours Saved', value: '100K+' },
            ].map(({ label, value }) => (
                <div key={label} className='flex flex-col items-center'>
                    <h4 className='text-lg font-bold text-[#081735]'>{value}</h4>
                    <p className='text-sm font-normal text-[#171717]'>{label}</p>
                </div>
            ))}
        </div>
    </div>
);

const IssuesCard = () => (
    <div className='bg-[#fff] relative bottom-3  left-[40%] flex gap-8 w-[265px] h-[165px] custom-shadow rounded-3xl py-[15px] px-[30px]'>
        <div className='flex gap-2 flex-col justify-between'>
            <div className='flex items-center justify-center w-14 h-14 rounded-full bg-[#9D90FA40]'>
                <img src={images.PieChart} alt="Pie Chart" />
            </div>
            <div>
                <p className='text-sm font-bold text-[#171717]'>Issues Fixed</p>
                <h3 className='text-3xl font-bold text-[#081735]'>500K+</h3>
            </div>
        </div>
        <div className='py-2'>
            <div className='text-[#0049C6] text-sm font-bold'>↑ 14%</div>
            <span className='text-xs font-normal text-[#171717]'>This week</span>
        </div>
    </div>
);

const options = {
    'SAAS': [
        { icon: images.GithubIcon, label: 'Sign in with GitHub' },
        { icon: images.BucketIcon, label: 'Sign in with Bitbucket' },
        { icon: images.AzureIcon, label: 'Sign in with Azure DevOps' },
        { icon: images.GitLabIcon, label: 'Sign in with GitLab' },
    ],
    'Self Hosted': [
        { icon: images.GitLabIcon, label: 'Self Hosted GitLab' },
        { icon: images.KeyIcon, label: 'Sign in with SSO' },
    ],
};

const SigninTabs = ({ activeTab, setActiveTab }) => (
    <div className="flex border border-[#E9EAEB] mx-6 rounded-lg justify-center bg-[#FAFAFA]">
        {['SAAS', 'Self Hosted'].map((tab) => (
            <button
                key={tab}
                className={`w-1/2 py-2 rounded-lg text-sm md:text-lg text-center font-semibold ${activeTab === tab ? 'bg-[#1570EF] text-white' : 'text-[#414651]'
                    }`}
                onClick={() => setActiveTab(tab)}
            >
                {tab}
            </button>
        ))}
    </div>
);

const SigninOptions = ({ activeTab, handleSignin }) => (
    <div className="flex flex-col gap-2 items-center pt-6 px-6 border-t border-t[#D5D7DA]">
        {options[activeTab].map((option, index) => (
            <button
                onClick={handleSignin}
                key={index}
                className="w-full md:w-[400px] text-sm md:text-base font-semibold flex items-center justify-center py-2 border rounded-md text-gray-700 hover:bg-gray-50"
            >
                <img src={option.icon} alt={option.label} className="h-4 md:h-5 mr-2" /> {option.label}
            </button>
        ))}
    </div>
);

const SigninContainer = ({ activeTab, setActiveTab, handleSignin }) => (
    <div className="w-full md:w-[600px] h-[460px] bg-white border border-[#E9EAEB] rounded-xl py-5">
        <div className='flex flex-col gap-5 border-b border-b[#D5D7DA] pb-6'>
            <div className="flex flex-col gap-5 mx-6">
                <div className='flex gap-3 items-center justify-center'>
                    <img
                        src={images.Logo}
                        alt="CodeAnt AI Logo"
                        className="md:h-8 h-6"
                    />
                    <p className='text-xl md:text-2xl font-light text-[#181D27]'>CodeAnt AI</p>
                </div>
                <h1 className="text-xl md:text-[28px] text-center font-semibold">Welcome to CodeAnt AI</h1>
            </div>
            <SigninTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
        <SigninOptions activeTab={activeTab} handleSignin={handleSignin} />
    </div>
);

const Signin = ({ onLogin }) => {
    const [activeTab, setActiveTab] = useState('SAAS');

    const handleSignin = () => {
        onLogin();
    };

    return (
        <div className="min-h-screen flex">
            {/* left container */}
            <div className="hidden xl:block flex-1 relative bg-[#ffff] my-[120px] mx-20">
                <MainInfoCard />
                <IssuesCard />
                <div className="fixed bottom-0 left-0">
                    <img src={images.LogoGray} alt="Background Logo" className="w-[200px]" />
                </div>
            </div>

            {/* right container  */}
            <div className="flex flex-col items-center justify-center flex-1 bg-[#FAFAFA] px-10">
                <SigninContainer activeTab={activeTab} setActiveTab={setActiveTab} handleSignin={handleSignin} />
                <p className="text-sm md:text-base font-normal text-center mt-4 text-[#181D27]">
                    By signing up you agree to the{' '}
                    <span className="font-bold">
                        Privacy Policy
                    </span>
                    .
                </p>
            </div>
        </div>
    );
};

export default Signin;