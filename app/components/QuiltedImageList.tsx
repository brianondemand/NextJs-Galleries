import Image from 'next/image';
import { ImageList, ImageListItem } from '@mui/material';

const itemData = [
  // Single left-side image
  {
    img: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg',
    title: 'Breakfast',
    cols: 1,
    rows: 2, // Tall image on the left
  },
  // Right-side images
  {
    img: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg',
    title: 'Burger',
  },
  {
    img: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg',
    title: 'Honey',
  },
  {
    img: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg',
    title: 'Second Image',
  },
  {
    img: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg',
    title: 'Third Image',
  },
];

const QuiltedImageList = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      margin: '0 auto',
      padding: '16px',
      backgroundColor: '#f0f0f0',
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '3fr 2fr', // Increase the width of the left side
        gap: '10px',
        maxWidth: '1200px', // Container max-width
        width: '100%',
      }}>
        {/* Left side: Single larger image with rounded left side */}
        <div style={{
          gridColumn: '1 / 2',
          position: 'relative',
          width: '100%',
          height: '600px', // Maintain a reasonable height
          borderRadius: '16px 0 0 16px', // Rounded left side only
          overflow: 'hidden', // Ensure the image fits within the rounded borders
        }}>
          <Image
            src={itemData[0].img}
            alt={itemData[0].title}
            layout="fill"
            objectFit="cover"
            loading="lazy"
          />
        </div>
        
        {/* Right side: Smaller images in grid */}
        <div style={{
          gridColumn: '2 / 3',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr', // Two smaller columns
          gap: '6px', // Reduce gap to fit images
          alignContent: 'start',
        }}>
          {itemData.slice(1).map((item, index) => {
            const borderRadius = index === 1 
              ? '0 16px 0 0' // Top-right corner of the last column
              : index === 3
              ? '0 0 16px 0' // Bottom-right corner of the last column
              : '0'; // No rounding for other images
              
            return (
              <div key={index} style={{
                position: 'relative',
                width: '100%',
                height: '300px', // Maintain a balanced height for right-side images
                borderRadius: borderRadius, // Apply rounded borders conditionally
                overflow: 'hidden', // Ensure the image fits within the rounded borders
              }}>
                <Image
                  src={item.img}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  loading="lazy"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default QuiltedImageList;
