import React from 'react'
import SimpleCard from './SimpleCard'
import { SimpleCardData } from '../constants'

const HomeTop = () => {
  return (
    <section className="flex flex-col gap-[73px] pl-[67px] pr-[67px] pt-[55px] pb-[80px] border-b-[1px] border-[#454545]">

      <div className='flex flex-col gap-[27px]'>

        <div className='flex flex-col gap-[12px]'>
          <div className='leading-[60px] w-[500px] text-white text-[53px] font-[600]'>Decentralized Perpetual Exchange</div>

          <div className='text-[#BABABA] text-[19px] font-[400] w-[400px] leading-[22.5px]'>Trade BTC, ETH, AVAX and other top<br/> cryptocurrencies with up to 30x leverage directly from your wallet</div>
        </div>

        <button className='px-[5px] w-[130px] py-[6px] text-white bg-[#4ec499] text-[13px] rounded-[3px] hover:bg-[#207A59]'>Launch Exchange</button>

      </div>

      <div className='flex flex-row items-center justify-between'>
        {SimpleCardData.map((card,index) => (
          <div key={index} >
            <SimpleCard image={card.image} title={card.title} number={card.number}/>
          </div>
        ))}
      </div>

    </section>
  )
}

export default HomeTop