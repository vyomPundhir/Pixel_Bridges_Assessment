import React from 'react'

const Footer = () => {
  return (
    <section className="border-t-[1px] border-[#646464] flex flex-col gap-[10px] footer bg-[#151515] pt-[30px] pb-[13px]">

      <div className='flex flex-row justify-center items-center'>
        <img src="src\assets\Logo.png" alt="logo" className='w-[70px] ' />
        <img src="src\assets\Logo2.png" alt="logo-2" className=' ml-[-20px] w-[140px] h-[60px]' />
      </div>

      <div className='flex flex-row justify-center items-center gap-[60px]'>

        <a href="https://twitter.com/zomi.finance">
          <img src="src\assets\twitter.svg" alt="twitter" className='w-[25px]'/>
        </a>

        <a href="https://zomifinance.medium.com/">
          <img src="src\assets\medium.svg" alt="medium"  className='w-[28px]'/>
        </a>

        <a href="https://github.com/zomi">
          <img src="src\assets\github.svg" alt="github"  className='w-[28px]'/>
        </a>

        <a href="https://t.me/zomichat">
          <img src="src\assets\telegram.svg" alt="telegram"  className='w-[28px]'/>
        </a>

        <a href="https://discord.com/invite/senshilabs">
          <img src="src\assets\discord.svg" alt="discord"  className='w-[21px]'/>
        </a>

      </div>

      <div className='flex flex-row items-center justify-center text-[#b3b3b3] pt-[5px] text-[14px] gap-[20px] tracking-[0.5px]'>
        <a href="https://zomi.finance/#/terms-and-conditions" className='hover:text-[white]'>Terms and Conditions</a>
        <a href="https://zomi.finance/#/referral-terms" className='hover:text-[white]'>Referral Terms</a>
        <a href="https://docs.zomi.finance/" className='hover:text-[white]'>Media Kit</a>
      </div>

    </section>
  )
}

export default Footer