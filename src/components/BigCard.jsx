import React from 'react'

const BigCard = ({tk}) => {
  return (
    <section className='border-[#4a4a4a] border-[1px] h-auto rounded-[5px] bg-[#151515] text-white'>
      
      <div className='flex flex-row items-center gap-[8px] pl-[13px] py-[12px] border-[#4a4a4a] border-b-[1px] text-[white] text-[14.5px] font-[500]'>
        {tk.title}
        <img src="src\assets\bluediamond.svg" alt="" className='w-[15px]'/>
      </div>

      <div className='flex flex-row justify-between py-[18px]'>
        {tk.top.map((li, index)=>(
          <div key={index} className='px-[13px] pb-[5.5px] flex flex-row justify-between'>
            <div className='text-[#a3a3a3] text-[14px] font-[600]'>{li.token}</div>
          </div>
        ))}
      </div>

      <div className='flex flex-row pb-[22px]'>

        <div className="w-[60%] flex flex-row gap-[40px]">

          <div className="listleft flex flex-col gap-[17px]">
            {tk.list.map((li, index)=>(
              <div key={index} className='px-[13px] pb-[5.5px] flex flex-row gap-[7px]'>
                <img src={li.image} alt="" className='w-[35px]' />
                <div className='flex flex-row items-center gap-[5px]'>
                  <div className='flex flex-col'>
                    <div className='text-[14.5px] font-[500] text-[#e4e3e3]'>{li.name}</div>
                    <div className='mt-[-5px] text-[11px] text-[#9f9e9e] font-[500]'>{li.sname}</div>
                  </div>
                  <img src="src\assets\downarrow.svg" alt="" className='w-[20px]'/>
                </div>
                
              </div>
            ))}
          </div>

          <div className="listright flex flex-col gap-[30px]">
            {tk.list.map((li, index)=>(
            <div key={index} className='px-[13px] pb-[5.5px] flex flex-row gap-[180px]'>
              <div className='text-[#e4e3e3] text-[14px] font-[600]'>{li.price}</div>
              <div className='w-full font-[600] text-[#e4e3e3] text-[14px] text-right'>{li.pool}</div>
            </div>
            ))}
          </div>
        </div>

        <div className="w-[40%] flex flex-col gap-[30px]">
          {tk.list.map((li, index)=>(
            <div key={index} className='px-[13px] pb-[5.5px] flex flex-row justify-between'>
              <div className='text-[#e4e3e3] text-[14px] font-[600] ml-[68px]'>{li.weight}</div>
              <div className='text-[#e4e3e3] text-[14px] font-[600]'>{li.util}</div>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}

export default BigCard