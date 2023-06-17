import React, { useEffect, useRef } from 'react';
import girlImage from './images/girl.png';

const StartingPage = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const image = new Image();
    image.src = girlImage;

    image.onload = () => {
      const maxWidth = 800; // Set the maximum width of the resized image
      const maxHeight = 600; // Set the maximum height of the resized image

      let width = image.width;
      let height = image.height;

      // Calculate the new dimensions while maintaining the aspect ratio
      if (width > maxWidth) {
        height *= maxWidth / width;
        width = maxWidth;
      }

      if (height > maxHeight) {
        width *= maxHeight / height;
        height = maxHeight;
      }

      canvas.width = width;
      canvas.height = height;

      // Enable image smoothing for better quality
      ctx.imageSmoothingEnabled = true;

      ctx.drawImage(image, 0, 0, width, height);
    };
  }, []);

  const containerStyle = {
    position: 'fixed',
    bottom: 0,
    right: 0
  };

  return (
    <div style={containerStyle}>
      <canvas ref={canvasRef} alt="Girl" />
    </div>
  );
};

export default StartingPage;
