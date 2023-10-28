import React from 'react'

const TokenCard = ({image, name, detail, percentage}) => {
  return (
    <div className='bg-[#151515] flex flex-col justify-center gap-[15px] border-[1px] border-[#4a4a4a] px-[20px] py-[20px] rounded-[5px]'>

      <div className='flex flex-row items-center gap-[6px]'>
        <img src={image} alt="" className='w-[40px]' />
        <div className='text-white'>{name}</div>
      </div>

      <div className='text-[#e8e8e8] font-[500]'>
        {detail}
      </div>

      <div className='flex flex-col gap-[15px]'>
        <div className='text-[#d0d0d0] text-[14px]'>Ethereum APR: {percentage}</div>
        <div className='flex flex-row gap-[15px]'>
          <button className='px-[15px] py-[6px] bg-[#4ec499] hover:bg-[#207A59] text-[white] text-[13px] rounded-[3px]'>Buy</button>
          <button className='text-[white] text-[13px] border-[1px] px-[13px] py-[6px] rounded-[3px] hover:bg-[#2A2A2A]'>Read more</button>
        </div>
      </div>

    </div>
  )
}

export default TokenCard