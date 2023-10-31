import React from 'react'

const EarnCard1 = ({er}) => {
  return (
    <section className='h-full border-[#4a4a4a] border-[1px] rounded-[5px] bg-[#151515]'>
      <div className='pl-[13px] py-[12px] border-[#4a4a4a] border-b-[1px] text-[white] text-[14.5px] font-[500]'>{er.title}</div>

      <div className='flex flex-col pt-[8px] pb-[11px] border-b-[1px] border-[#4a4a4a]'>
        {er.list1.map((li, index)=>(
          <div key={index} className='px-[13px] pb-[5.5px] flex flex-row justify-between'>
            <div className='text-[#a3a3a3] text-[14px] font-[600]'>{li.left}</div>
            <div className='text-[white] text-[14px]'>{li.right}</div>
          </div>
        ))}
      </div>

      <div className='flex flex-col pt-[14px] pb-[11px] border-b-[1px] border-[#4a4a4a]'>
        {er.list2.map((li, index)=>(
          <div key={index} className='px-[13px] pb-[5.5px] flex flex-row justify-between'>
            <div className='text-[#a3a3a3] text-[14px] font-[600]'>{li.left}</div>
            <div className='text-[white] text-[14px]'>{li.right}</div>
          </div>
        ))}
      </div>

      <div className='flex flex-col pt-[16px] pb-[11px] border-b-[1px] border-[#4a4a4a]'>
        {er.list3.map((li, index)=>(
          <div key={index} className='px-[13px] pb-[5.5px] flex flex-row justify-between'>
            <div className='text-[#a3a3a3] text-[14px] font-[600]'>{li.left}</div>
            <div className='text-[white] text-[14px]'>{li.right}</div>
          </div>
        ))}
      </div>
      
      <div className='w-full items-center  flex flex-row pt-[12px] pl-[13px]'>
      <button className='px-[15px] py-[6px] bg-[#4ec499] hover:bg-[#207A59] text-[white] text-[13px] rounded-[3px]'>{er.button1}</button>
      
      </div>

    </section>
  )
}

export default EarnCard1