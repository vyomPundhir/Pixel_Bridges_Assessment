import React from 'react'
import FeatureCard from './FeatureCard'
import TokenCard from './TokenCard'
import { FeatureCardData, TokenCardData } from '../constants'

const HomeBottom = () => {
  return (
    <section className="border-b-[1px] border-[#ffffff] flex flex-col items-center gap-[150px]">

      <div className=' flex flex-row items-center pl-[67px] pt-[72px] gap-[130px] w-full'>
        {FeatureCardData.map((card,index) => (
          <div key={index} >
            <FeatureCard image={card.image} title={card.title} detail={card.detail}/>
          </div>
        ))}
      </div>

      <div className='flex flex-col gap-[29px] mb-[70px]'>
        <div className='leading-10 text-[white] text-[35px] font-[500] mx-[67px] w-[350px]'>Two tokens create our ecosystem</div>

        <div className='flex flex-row items-center gap-[10px] px-[67px]' >
          {TokenCardData.map((card,index) => (
            <div key={index} >
              <TokenCard image={card.image} name={card.name} detail={card.detail} percentage={card.percentage}/>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default HomeBottom