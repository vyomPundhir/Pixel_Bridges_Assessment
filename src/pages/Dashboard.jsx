import React from 'react'
import StatsCard from '../components/StatsCard'
import { Stats, TokenIndex, Tokens } from '../constants'
import IndexTokenCard from '../components/IndexTokenCard'
import BigCard from '../components/BigCard'

const Dashboard = () => {
  return (
    <section className="dashboard bg-[#191919]">
      <div className="stats flex flex-col pt-[38px] gap-[28px]">

        <div className='ml-[67px] flex flex-col gap-[5px]'>
          <div className='flex flex-row items-center gap-[8px] text-[white] text-[33px] font-[600]'>
            Stats
            <img src="src\assets\bluediamond.svg" alt="" className='w-[22px]'/>
          </div>

          <div className='text-[#b5b5b5] text-[14px] tracking-[0.5px] leading-[20px]'>
            Ethereum Total Stats start from 06 Jan 2022.<br/>
            For detailed stats:
          </div>
        </div>
        
        <div className='w-full flex flex-col items-center'>
          <div className='flex flex-row w-[89%] gap-[15px]'>
            {Stats.map((st, index)=>(
              <div key={index} className='w-1/2'>
                <StatsCard st={st} />
              </div>
            ))}
          </div>
        </div>
        
      </div>

      <div className="tokens flex flex-col pt-[25px] gap-[28px]">
        
        <div className='ml-[67px] flex flex-col gap-[5px]'>
          <div className='flex flex-row items-center gap-[8px] text-[white] text-[33px] font-[600]'>
            Tokens
            <img src="src\assets\bluediamond.svg" alt="" className='w-[22px]'/>
          </div>

          <div className='text-[#b5b5b5] text-[14px] tracking-[0.5px] leading-[20px]'>
          Platform and $ZLP index tokens.
          </div>
        </div>
        
        <div className='w-full flex flex-col gap-[15px] items-center pb-[45px]'>
          <div className='flex flex-row w-[89%] gap-[15px]'>
            {Tokens.map((tk, index)=>(
              <div key={index} className='w-1/2'>
                <IndexTokenCard tk={tk} />
              </div>
            ))}
          </div>

          <div className='w-[89%]'>
            {TokenIndex.map((tk, index)=>(
              <div key={index}>
                <BigCard tk={tk} />
              </div>
            ))}
          </div>

        </div>
        
      </div>
    </section>
    
  )
}

export default Dashboard