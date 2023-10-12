import React from 'react';
import image1 from '../../assets/images/image1.png';
import image2 from '../../assets/images/image2.png';
import image3 from '../../assets/images/image3.png';
import image4 from '../../assets/images/image4.png';
import image5 from '../../assets/images/image5.png';
import image6 from '../../assets/images/image6.png';

const MasonryGrid = () => {
  return (
    <>
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 w-[90%] max-w-[992px] mx-auto">
      <div className="col-span-1">
        <img src={image1} alt="Image 1" className="w-full h-full object-cover rounded-[24px]" />
      </div>
      <div className="col-span-1 row-span-2">
        <img src={image2} alt="Image 2" className="w-full h-full object-cover rounded-[24px]" />
      </div>
      <div className="col-span-1">
        <img src={image3} alt="Image 3" className="w-full h-full object-cover rounded-[24px]" />
      </div>
      <div className="col-span-1 row-span-2 sm:row-span-3">
        <img src={image4} alt="Image 4" className="w-full h-full object-cover rounded-[24px]" />
      </div>
      <div className="col-span-1 row-span-2">
        <img src={image6} alt="Image 5" className="w-full h-full object-cover rounded-[24px]" />
      </div>
      <div className="col-span-1">
        <img src={image5} alt="Image 5" className="w-full h-full object-cover rounded-[24px]" />
      </div>
    </div>
    </>
  );
};

export default MasonryGrid;
