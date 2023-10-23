'use client';

import { useCallback, useContext, useMemo, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/navigation';
import images from '../../../assets';
import { Button, Input } from '../../../components';

// eslint-disable-next-line import/no-unresolved
import { NFTContext } from '@/context/NFTContext';

const CreateNFT = () => {
  const [fileUrl, setFileUrl] = useState(null);
  const [formInput, setFormInput] = useState({
    name: '',
    description: '',
    price: '',
  });
  const { theme } = useTheme();
  const { uploadToIPFS, createNFT } = useContext(NFTContext);
  const router = useRouter();
  const onDrop = useCallback(async (acceptedFile) => {
    const url = await uploadToIPFS(acceptedFile[0]);

    console.log({ url });
    setFileUrl(url);
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
    ${isDragReject && 'border-file-reject'}`[
  (isDragActive, isDragAccept, isDragReject)
],
  );

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
              <aside className="h-96">
                <div>
                  <img
                    src={fileUrl}
                    alt="Asset_file"
                    className="w-full h-96 object-cover"
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
            handleClick={() => createNFT(formInput, fileUrl, router)}
            classStyles="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};
export default CreateNFT;
