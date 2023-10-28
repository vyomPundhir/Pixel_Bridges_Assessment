import React from 'react'

const SimpleCard = ({image, title, number}) => {
  return (
    <div className='rounded-[5px] px-[24px] py-[23px] w-[340px] flex flex-row items-center border-[0.5px] border-[#2a2a2a] gap-[34px] shadow-xl'>

      <div className='flex flex-row justify-center items-center'>
        <img src={image} alt="" className='w-[45px]'/>
      </div>

      <div className='flex flex-col'>
        <div className='text-[15px] text-[#b7b6b6] font-[500]'>{title}</div>
        <div className='text-[27px] text-[white]'>{number}</div>
      </div>

    </div>
  )
}

export default SimpleCard