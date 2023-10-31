import React from 'react'
import EarnCard1 from '../components/EarnCard1'
import { EarnData1, EarnData2, EarnData3, EarnData4, Vest } from '../constants'
import EarnCard2 from '../components/EarnCard2'
import VestCard from '../components/VestCard'
import EarnCard3 from '../components/EarnCard3'

const Earn = () => {
  return (
    <section className='bg-[#191919] text-[white] pb-[45px]'>
      <div className="top flex flex-col pt-[38px] gap-[20px]">

        <div className='ml-[67px] flex flex-col gap-[5px]'>
          <div className='flex flex-row items-center gap-[8px] text-[white] text-[33px] font-[600]'>
            Earn
          </div>

          <div className='text-[#b5b5b5] text-[14px] tracking-[0.5px] leading-[20px]'>
          Stake $ZOMI and $ZLP to earn rewards.
          </div>
        </div>

        <div className='w-full flex flex-col items-center'>
          <div className=' flex flex-row justify-center flex-wrap w-[89%] gap-[15px]'>
            {EarnData1.map((er, index)=>(
              <div key={index} className='w-[49.2%] h-[420px]'>
                <EarnCard1 er={er} />
              </div>
            ))}

            {EarnData2.map((er, index)=>(
              <div key={index} className='w-[49.2%] h-[420px]'>
                <EarnCard2 er={er} />
              </div>
            ))}

            {EarnData3.map((er, index)=>(
              <div key={index} className='w-[49.2%] h-[370px]'>
                <EarnCard3 er={er} />
              </div>
            ))}

            {EarnData4.map((er, index)=>(
              <div key={index} className='w-[49.2%] h-[370px]'>
                <EarnCard1 er={er} />
              </div>
            ))}

          </div>
        </div>

      </div>


      <div className="Vest flex flex-col pt-[38px] gap-[20px]">

        <div className='ml-[67px] flex flex-col gap-[5px]'>
          <div className='flex flex-row items-center gap-[8px] text-[white] text-[33px] font-[600]'>
          Vest
          </div>

          <div className='text-[#b5b5b5] text-[14px] tracking-[0.5px] leading-[20px]'>
          Convert esZOMI tokens to $ZOMI tokens.<br/>
          Please read the <a href="https://docs.zomi.financehow-it-works/rewards"><u>vesting details</u></a> before using the vaults.
          </div>
        </div>

        <div className='w-full flex flex-col items-center'>
          <div className=' flex flex-row justify-center flex-wrap w-[89%] gap-[15px]'>
            {Vest.map((vs, index)=>(
              <div key={index} className='w-[49.2%] h-[230px]'>
                <VestCard vs={vs} />
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  )
}

export default Earn