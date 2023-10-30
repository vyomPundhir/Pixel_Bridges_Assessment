import React from 'react'

const IndexTokenCard = ({tk}) => {
  return (
    <section className='w-full flex flex-row justify between border-[#4a4a4a] border-[1px] h-[210px] rounded-[5px] bg-[#151515]'>

      <div className='w-[60%]'>
        <div className='flex flex-row items-center gap-[8px] pl-[13px] py-[12px] border-[#4a4a4a] border-b-[1px] text-[white] text-[14.5px] font-[500]'>
          <img src={tk.image1} alt="" className='w-[37px]'/>
          <div>{tk.title}</div>
        </div>

        <div className='flex flex-col pt-[8px]'>
          {tk.list.map((li, index)=>(
            <div key={index} className='px-[13px] pb-[5.5px] flex flex-row justify-between'>
              <div className='text-[#a3a3a3] text-[14px] font-[600]'>{li.left}</div>
              <div className='text-[white] text-[14px]'>{li.right}</div>
            </div>
          ))}
        </div>
      </div>
      
      <div className='flex flex-row justify-center items-center w-[40%]'>
        <img src={tk.image2} alt="" className='w-[150px] h-[150px] rounded-full ' />
      </div>

    </section>
  )
}

export default IndexTokenCard