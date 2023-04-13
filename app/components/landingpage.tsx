import React from 'react';
import { Aclonica } from '@next/font/google'
import SocialWallet from './socialwalletconnector';

const aclonica = Aclonica({ subsets: ['latin'], weight: ['400'] })

function Landingpage() {

    return (
        <div className='w-full min-h-screen bg-[#1A1A1A] relative overflow-hidden pt-10'>
            <div className='absolute w-[15%] top-[30%] aspect-square bg-[#49adff] rounded-full blur-[100px]'>
                <div className='w-[30%] absolute bottom-0 right-0 aspect-square rounded-full bg-[#ff00f7]'></div>
            </div>
            <div className='absolute w-[20%] bottom-0 right-0 aspect-square bg-[#D55D3B] rounded-full blur-[100px] z-20'>
                <div className='w-[30%] absolute bottom-0 right-[40%] aspect-square rounded-full bg-[##E55A50]'></div>
            </div>
            <div className='absolute w-[30%] -bottom-1/3 left-1/2 -translate-x-1/2 aspect-square bg-[#802892] rounded-full blur-[140px]'>
                <div className='w-[30%] absolute bottom-0 right-0 aspect-square rounded-full bg-[#ff00f7]'></div>
            </div>
            <h1 className={`${aclonica.className} md:text-5xl sm:text-3xl text-[100px] text-white font-bold text-center`}>SOCIAL WALLET</h1>
            <div className='w-[60%] medium relative z-20 mt-10 m-auto bg-[#ffece20f] backdrop-blur-lg p-5 rounded-xl shadow-2xl'>
                <h2 className='text-2xl text-gray-100 font-bold text-center border-b border-[#ffffff1e] pb-5'>Account Abstraction</h2>
                <p className='mt-5 text-gray-300 font-semibold'>
                    Ethereum account abstraction works on the basic concept of smart contracts.
                    This feature will allow users to create and manage their accounts more securely
                    and efficiently by aiming to transfer user authentication from the network to
                    the smart contract and give wallet creators control over how to authenticate users.
                </p>
                <SocialWallet />
            </div>
        </div>
    );
}

export default Landingpage;