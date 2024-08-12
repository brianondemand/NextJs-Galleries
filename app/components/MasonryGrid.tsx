/* eslint-disable react/jsx-no-undef */
import Image from 'next/image';
import React from 'react';

const MasonryGrid: React.FC = () => {
  return (
    <div className='block max-w-4xl mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="grid gap-4">
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
              alt="Masonry Image 1"
              width={200}
              height={200}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
              alt="Masonry Image 2"
              width={200}
              height={200}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
              alt="Masonry Image 3"
              width={200}
              height={200}
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
              alt="Masonry Image 4"
              width={200}
              height={200}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
              alt="Masonry Image 5"
              width={200}
              height={200}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
              alt="Masonry Image 6"
              width={200}
              height={200}
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
              alt="Masonry Image 7"
              width={200}
              height={200}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
              alt="Masonry Image 8"
              width={200}
              height={200}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
              alt="Masonry Image 9"
              width={200}
              height={200}
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
              alt="Masonry Image 10"
              width={200}
              height={200}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
              alt="Masonry Image 11"
              width={200}
              height={200}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
              alt="Masonry Image 12"
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasonryGrid;
