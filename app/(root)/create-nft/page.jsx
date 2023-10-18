'use client';

import { useCallback, useMemo, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import images from '../../../assets';
import { Button, Input } from '../../../components';

const Page = () => {
  const [fileUrl] = useState(null);
  const [formInput, setFormInput] = useState({
    name: '',
    description: '',
    price: '',
  });

  const { theme } = useTheme();

  const onDrop = useCallback(() => {
    // upload image t ipfs
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop,
    accept: 'image/*',
    maxSize: 5000000,
  });

  const fileStyle = useMemo(
    () => `dark:bg-nft-black-1 bg-white border
    dark:border-white border-nft-gray-2 
    dark:text-white flex flex-col items-center p-5 
    rounded-md border-dashed cursor-pointer
    ${isDragActive && 'border-file-active'}
    ${isDragAccept && 'border-file-accept'}
    ${isDragReject && 'border-file-reject'}`,
    [isDragActive, isDragAccept, isDragReject],
  );

  console.log(formInput);

  return (
    <div className="flex justify-center sm:px-4 p-12">
      <div className="w-3/5 md:w-full">
        <h1
          className="font-poppins dark:text-white text-nft-black-1 text-2xl minlg:text-4xl
         ml-4 font-semibold xs:ml-0"
        >
          Create New NFT
        </h1>
        <div className="mt-16">
          <p
            className="font-poppins dark:text-white text-nft-black-1
            font-semibold text-xl"
          >
            Upload File
          </p>
          <div className="mt-4">
            <div {...getRootProps()} className={fileStyle}>
              <input {...getInputProps()} />
              <div className="flexCenter flex-col text-center">
                <p
                  className="font-poppins dark:text-white text-nft-black-1 font-semibold
                text-xl"
                >
                  JPG, PNG, GIF, SVG, WEBM. Max 5mb.
                </p>
                <div className="my-12 w-full flex justify-center">
                  <Image
                    src={images.upload}
                    alt="upload"
                    width={100}
                    height={100}
                    objectFit="contain"
                    className={theme === 'light' && 'filter invert'}
                  />
                </div>
                <p
                  className="font-poppins dark:text-white text-nft-black-1 font-semibold
                text-sm"
                >
                  Drag and Drop File Here
                </p>
                <p
                  className="font-poppins dark:text-white text-nft-black-1 font-semibold
                text-sm mt-2"
                >
                  or Browse media on your device
                </p>
              </div>
            </div>
            {fileUrl && (
              <aside>
                <div>
                  <Image
                    src={fileUrl}
                    alt="asset_file"
                    width={100}
                    height={100}
                  />
                </div>
              </aside>
            )}
          </div>
        </div>
        <Input
          inputType="input"
          title="Name"
          placeholder="NFT Name"
          handleClick={(e) => setFormInput({ ...formInput, name: e.target.value })}
        />
        <Input
          inputType="textarea"
          title="Description"
          placeholder="NFT Description"
          handleClick={(e) => setFormInput({ ...formInput, description: e.target.value })}
        />
        <Input
          inputType="number"
          title="Price"
          placeholder="NFT Price"
          handleClick={(e) => setFormInput({ ...formInput, price: e.target.value })}
        />
        <div className="mt-7 w-full flex justify-end">
          <Button
            btnName="Create NFT"
            handleClick={() => {}}
            classStyles="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};
export default Page;
