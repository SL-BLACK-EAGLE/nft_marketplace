'use client';

import Image from 'next/image';
import { useTheme } from 'next-themes';

import images from '../assets';
import Button from './ui/Button';

const FooterLinks = ({ heading, items }) => (
  <div className="flex-1 flex flex-col">
    <h3 className="font-poppins dark:text-white text-nft-black-1 font-semibold text-base">{heading}</h3>
    <ul className="list-none flex flex-col mt-4">
      {items.map((item, index) => (
        <li
          key={index}
          className="font-poppins dark:text-white text-nft-black-3 font-normal text-base mt-2
        cursor-pointer dark:hover:text-nft-gray-1 hover:text-nft-black-1 hover:font-medium my-2"
        >
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className="flexCenter flex-col border-t dark:border-nft-black-1 border-nft-gray-1 sm:py-8 py-16">
      <div className="w-full minmd:w-4/5 flex flex-row md:flex-col sm:px-4 px-16">
        <div className="flexStart flex-1 flex-col">
          <div className="flexCenter cursor-pointer">
            <Image src={images.logo02} objectFit="contain" width={32} height={32} alt="logo" />
            <p className=" dark:text-white text-nft-black-1 font-semibold text-lg ml-1">CryptoKet</p>
          </div>
          <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-base mt-6">Get The Latest Updates</p>
          <div className="flexBetween md:w-full minmd:w-557 w-357 mt-6 dark:bg-nft-black-2 bg-white border dark:border-nft-black-2 border-nft-gray-2 rounded-md">
            <input
              type="email"
              placeholder="Your Email"
              className="h-full w-full flex-1 dark:bg-nft-black-2 bg-white px-4
                rounded-md dark:text-white text-nft-black-1 font-normal text-xs minlg:text-lg outline-none"
            />
            <div className="flex-initial">
              <Button btnName="Email Me" classStyles="rounded-md" />
            </div>
          </div>
        </div>
        <div className="flex-1 flexBetweenStart flex-wrap ml-10 md:ml-0 md:mt-8">
          <FooterLinks heading="CryptoKet" items={['Explore', 'How it Works', 'Contact Us']} />
          <FooterLinks heading="Support" items={['Help Center', 'Terms of Service', 'Legal', 'Privacy Policy']} />
        </div>
      </div>
      <div className="flexCenter w-full mt-5 border-t dark:border-nft-black-1 border-nft-gray-1 sm:px-4 px-16">
        <div className="flexBetween flex-row w-full minmd:w-4/5 sm:flex-col mt-7">
          <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-base">CryptoKet, Inc. All Right Reserved.</p>
          <div className="flex flex-row sm:mt-4">
            {[images.instagram, images.twitter, images.telegram, images.discord].map((image, index) => (
              <div key={index} className="flexCenter mx-2 cursor-pointer">
                <Image
                  src={image}
                  alt="social media"
                  width={24}
                  height={24}
                  objectFit="contain"
                  className={theme === 'light' ? 'filter invert' : undefined}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
