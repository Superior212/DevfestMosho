import React from 'react'
import YoutubeEmbed from './YoutubeEmbed';

const StoryOfImpact = () => {
  return (
    <div>
      <div className="flex justify-center text-center font-GoogleSans font-bold text-dark text-3xl sm:text-[40px] mb-8">
        GDG Ogbomoso Touching Lives: <br />
        Seyi Ojelabi's Story - Journey of Impact
      </div>
      <div className="mb-[183px]">
        <YoutubeEmbed />
      </div>
    </div>
  )
}

export default StoryOfImpact