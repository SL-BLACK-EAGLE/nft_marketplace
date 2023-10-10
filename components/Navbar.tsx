'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import images from '../assets';

const Navbar = () => (
  <nav className="flexBetween w-full fixed z-10 p-4 flex-row border-b dark:bg-nft-dark bg-white dark:border-nft-black-1 border-nft-gray-1">
    <div className="flex flex-1 flex-row justify-start">
      <Link href="/">
        <div className="flexCenter md:hidden cursor-pointer" onClick={() => {}}>
          <Image src={images.logo02} objectFit="contain" width={32} height={32} alt="logo" />
          <p className=" dark:text-white text-nft-black-1 font-semibold text-lg ml-1">CryptoKet</p>
        </div>
      </Link>
    </div>
  </nav>

);
export default Navbar;
