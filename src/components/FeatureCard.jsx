import React from 'react'

const FeatureCard = ({image, title, detail}) => {
  return (
    <div className='flex flex-col gap-[13px] w-[280px]'>

      <div className='flex flex-row items-center gap-[13px]'>
        <img src={image} alt="" className='w-[35px]'/>
        <div className='text-[#f0f0f0] text-[20px] font-[500]'>{title}</div>
      </div>

      <div className='w-[260px] text-[#d7d7d7] leading-5 font-[500]'>
        {detail}
      </div>

    </div>
  )
}

export default FeatureCard