import React from 'react'
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <section className='border-b-[0.5px] border-[#434242] w-full h-[56px] navbar flex flex-row justify-between items-center bg-[#191919] text-[#a4a4a4]'>

      <Link to="/" className='cursor-pointer w-1/5 flex items-center gap-[0px] ml-[20px]'>
        <img src="src\assets\Logo.png" alt="logo" className='w-[50px] ' />
        <img src="src\assets\Logo2.png" alt="logo-2" className=' ml-[-17px] w-[120px] h-[40px]' />
      </Link>

      <div className='w-4/5 flex flex-row gap-[37px] items-center'>
        <div className='flex flex-row gap-[30px] items-center text-[#a4a4a4] text-[14px] font-[400] tracking-[0.5px]'>
          <NavLink to="/" className='cursor-pointer hover:text-[#e7e7e7]'>Home</NavLink>
          <NavLink to="/dashboard" className='cursor-pointer hover:text-[#e7e7e7]'>Dashboard</NavLink>
          <NavLink to="/" className='cursor-pointer hover:text-[#e7e7e7]'>NFT</NavLink>
          <NavLink to="/earn" className='cursor-pointer hover:text-[#e7e7e7]'>Earn</NavLink>
          <NavLink to="/" className='cursor-pointer hover:text-[#e7e7e7]'>Buy</NavLink>
          <NavLink to="/" className='cursor-pointer hover:text-[#e7e7e7]'>Referrals</NavLink>
          <NavLink to="/" className='cursor-pointer hover:text-[#e7e7e7]'>Ecosystem</NavLink>
          <NavLink to="/" className='cursor-pointer hover:text-[#e7e7e7]'>About</NavLink>
        </div>

        <div className='flex flex-row gap-[20px] items-center'>

          <button className='bg-[#4ec499] text-[white] px-[15px] py-[6px] text-[14px] rounded-[5px] hover:bg-[#207A59]'><a href="https://zomi.finance/#/trade" target="_blank" rel="noopener noreferrer">Trade</a></button>

          <button className='hover:bg-[#2A2A2A] border-[0.5px] border-[#434343] flex flex-row items-center font-[500] text-[#e7e7e7] text-[12px] gap-[6px] rounded-[3px] px-[15px] py-[5px] tracking-[0.5px]'>
            <img src="src\assets\wallet.svg" alt="" className='w-[21.5px]' />
            Connect Wallet
          </button>

          <button className='hover:bg-[#2A2A2A] border-[0.5px] border-[#434343] flex flex-row items-center rounded-[3px] pl-[8px] pr-[7px] py-[3px] text-[#5d5d5d] text-[20px]'>
            <img src="src\assets\diamond.svg" alt="" className='w-[18px]'/>
            <span className='mt-[-5px] ml-[3px]'>|</span>
            <img src="src\assets\three-dots.svg" alt="" className='w-[18px] ml-[5px]' />
          </button>

        </div>

      </div>
      

    </section>
  )
}

export default Navbar