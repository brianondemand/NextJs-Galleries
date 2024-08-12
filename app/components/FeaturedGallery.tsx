/* eslint-disable react/jsx-no-undef */
import Image from 'next/image';
import React from 'react';

const FeaturedGallery: React.FC = () => {
  return (
    <div className='block max-w-6xl mx-auto p-5 bg-white border border-gray-200 rounded-lg shadow-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
      <div className="text-center mb-6">
        <div className="inline-block">
          <Image
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg"
            alt="Featured Image"
            width={600}
            height={400}
          />
        </div>
      </div>
      <div className="grid grid-cols-5 gap-2">
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
            alt="Gallery Image 1"
            width={200}
            height={200}
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
            alt="Gallery Image 2"
            width={200}
            height={200}
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
            alt="Gallery Image 3"
            width={200}
            height={200}
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
            alt="Gallery Image 4"
            width={200}
            height={200}
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
            alt="Gallery Image 5"
            width={200}
            height={200}
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedGallery;
