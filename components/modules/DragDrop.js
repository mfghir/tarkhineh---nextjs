// this component is written by https://gist.github.com/peymanath/3f8a4874b3d1e6e592e7657ddff16551

import { FolderAdd } from 'iconsax-react';
import React from 'react';
import { useState, useRef, DragEvent } from 'react';

export default function DragDropImageUploader() {
  const [isDragging, setIsDragging] = useState(false);
  const [imageFile, setImageFile] = useState();
  const [image, setImage] = useState();
  const uploderInput = useRef(null);
  const allowedFileType = ['webp', 'png', 'jpg'];

  // Image generation, from the uploaded file and encoded to base64
  const renderImage = () => {
    if (!allowedFileType.includes(files.type.replace('image/', ''))) {
      return;
    } else {
      setImageFile(files);
      const reader = new FileReader();
      reader.readAsDataURL(files);
      reader.onload = () => {
        setImage(reader.result);
      };
    }
  };

  // Remove Image Button
  const removeImage = () => {
    setImage(null);
  };

  // Select image after clicking
  const inputUploader = () => {
    const files = e.currentTarget.files[0];
    files && renderImage(files);
    e.target.value = null;
  };

  //When the range is hovered
  const handleDragEnter = () => {
    e.preventDefault();
    setIsDragging(true);
  };

  // When it goes out of range
  const handleDragLeave = e => {
    e.preventDefault();
    if (e.currentTarget.contains(e.relatedTarget)) return;
    setIsDragging(false);
  };

  // Once in range, the range will be able to receive information
  const handleDragOver = () => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
  };

  // After dropping the image, the file is at your disposal and you can write your code logic
  const handleDrop = () => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files[0];
    files && renderImage(e.dataTransfer.files[0]);
  };

  return (
    <div className='flex flex-col gap-5 w-full'>
      <input
        type='file'
        name='thumbnail'
        className='hidden'
        accept={`image/${allowedFileType.join(',image/')}`}
        onChange={inputUploader}
        ref={uploderInput}
      />

      <div
        className={`w-full flex flex-col items-center justify-center botton-sm text-gray-700 border-2  h-48 rounded-md border-gray-400 mb-3  ${
          isDragging && 'bg-primary/10'
        }`}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}>
        <FolderAdd className='w-8 lg:w-16 h-8 lg:h-16 mb-2' />

        <p
          className={`flex items-center justify-center  cursor-pointer  
          ${!isDragging && image ? 'w-1/2' : 'w-full'}
            `}
          onClick={() => uploderInput.current?.click()}>
          تصاویری از ملک را بارگذاری کنید...
        </p>
        {!isDragging && image && (
          <div className='flex items-center justify-center w-1/2'>
            <div className='relative w-32 rounded-lg border-2 border-primary/30'>
              <div
                className='absolute -top-3 -left-3 w-7 h-7 flex gap-1 items-center justify-center bg-red-600 text-white text-xs rounded-full p-0.5 select-none cursor-pointer'
                onClick={removeImage}>
                &#x2715;
              </div>
              <img src={image && image} className='w-full h-full' />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
