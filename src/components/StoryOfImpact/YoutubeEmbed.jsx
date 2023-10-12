import React from 'react';

const YouTubeEmbed = () => {
  return (
    <div>
      <div className="aspect-w-16 aspect-h-9 ">
        <iframe
          title="GDG Ogbomoso Touching Lives: Seyi Ojelabi - Journey of Impact"
          src="https://www.youtube.com/embed/JEDd6DwkrVI?si=mFSSnjv4jb-SeW0z"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-[90%] max-w-[992px] h-[400px] sm:h-[550px] mx-auto border-red border-y-[30px] sm:border-y-[61px] border-x-[60px] sm:border-x-[94px] rounded-lg"
        ></iframe>
      </div>
    </div>
  );
};

export default YouTubeEmbed;
