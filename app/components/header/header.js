import { iAdd, iExportButton } from '@/util/imageImports';
import Image from 'next/image';
import React from 'react';

const Header = () => {
    return (
        <div className="flex justify-between py-2">
        <div className="text-[22px] font-medium leading-6 text-[#0E1521]">Orders</div>
        <div className="flex space-x-2.5">
          <Image src={iExportButton} alt="phone" />
          <button className="bg-[#2166F0] py-3 px-4 rounded-md flex space-x-1.5">
            <Image src={iAdd} alt="phone" />
            <div className="font-medium text-[15px] text-white leading-4">Create order</div>
          </button>
        </div>
      </div>
    );
};

export default Header;