import React from 'react'

const StatsCard = ({st}) => {
  return (
    <section className='border-[#4a4a4a] border-[1px] h-[200px] rounded-[5px] bg-[#151515]'>
      <div className='pl-[13px] py-[12px] border-[#4a4a4a] border-b-[1px] text-[white] text-[14.5px] font-[500]'>{st.title}</div>
      <div className='flex flex-col pt-[8px]'>
        {st.list.map((li, index)=>(
          <div key={index} className='px-[13px] pb-[5.5px] flex flex-row justify-between'>
            <div className='text-[#a3a3a3] text-[14px] font-[600]'>{li.left}</div>
            <div className='text-[white] text-[14px]'>{li.right}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default StatsCard