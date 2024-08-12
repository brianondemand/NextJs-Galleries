"use client";
import { useState } from 'react';
import Toggle from '@/app/components/Toggle';
import MasonryGrid from '@/app/components/MasonryGrid';
import FeaturedGallery from '@/app/components/FeaturedGallery';
import QuiltedImageList from './components/QuiltedImageList';

export default function Home() {
  const [theme, setTheme] = useState('light');

  const handleToggleChange = (isChecked: boolean) => {
    setTheme(isChecked ? 'dark' : 'light');
  };

  return (
    <div className={`min-h-screen bg-gray-100 ${theme === 'dark' ? 'dark' : ''}`}>
      <div className="container mx-auto py-8">
        <div className="text-4xl font-bold text-center mb-8">
          <h1 className="flex items-center text-5xl font-extrabold">
            Gallery
            <span className="bg-blue-100 text-blue-800 text-2xl font-semibold me-2 px-2.5 py-0.5 rounded dark:text-blue-800 ms-2">
              Plus
            </span>
          </h1>
          <div className="mb-8 flex justify-center">
          <Toggle onChange={handleToggleChange} />
          <hr className="w-10 h-px my-8" />
        </div>
        </div>

      {/* QuiltedImageList */}

        <h5 className="mb-4 text-3xl font-extrabold text-gray-900 md:text-2xl lg:text-4xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"></span>Quilted Gallery</h5>
        <QuiltedImageList />
        <hr className="w-64 h-px my-8" />
        <hr className="w-10 h-px my-8" />
        <h5 className="mb-4 text-3xl font-extrabold text-gray-900 md:text-2xl lg:text-4xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"></span>Featured Gallery</h5>

        {/* FeaturedGallery */}
        <FeaturedGallery />
        <hr className="w-64 h-px my-8" />
        <hr className="w-10 h-px my-8" />
        <h5 className="mb-4 text-3xl font-extrabold text-gray-900 md:text-2xl lg:text-4xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"></span>Masonry Grid Gallery</h5>

        {/* MasonryGrid */}
        <MasonryGrid />
        <hr className="w-64 h-px my-8" />
        <hr className="w-10 h-px my-8" />

      </div>
      
    </div>
  );
}
