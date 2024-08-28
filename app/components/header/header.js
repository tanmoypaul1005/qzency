import { iAdd, iAvatar, iExportButton, iHelp, iNotification } from '@/util/imageImports';
import Image from 'next/image';
import React from 'react';

const Header = () => {
    return (
        <>
        <div style={{ boxShadow: '0px 3px 10px 0px #7777771A' }}  className="space-x-5 flex py-4 pr-5 justify-end border-[1px] border-[#EAECF0]">
        <Image src={iHelp} alt="" />
            <Image src={iNotification} alt="" />
            <Image src={iAvatar} alt="" />
        </div>
            <div className="flex justify-between py-3 mx-6">
                <div className="text-[22px] flex justify-center items-center font-medium leading-6 text-[#0E1521]">Orders</div>
                <div className="flex space-x-2.5">
                    <Image src={iExportButton} alt="phone" />
                    <button className="bg-[#2166F0] py-3 px-4 rounded-md flex space-x-1.5">
                        <Image src={iAdd} alt="phone" />
                        <div className="font-medium text-[15px] text-white leading-4">Create order</div>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Header;