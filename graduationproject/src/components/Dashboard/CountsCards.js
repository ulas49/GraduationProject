import React from 'react'

const CountsCards = ({item,situation}) => {
  return (
    <div className='flex flex-1 min-w-[200px] p-6 border border-solid border-[#404040] rounded-[14px] gap-[6px] countshadow'>

      <div className='flex flex-1 flex-col sm:gap-[12px] gap-[6px] '>
        <p className=' font-semibold sm:text-base text-[#007AFF] text-[14px] '>{item.name}</p>
        <div className='flex items-end gap-2 text-[#404040] font-semibold sm:text-[32px] text-[22px]'>
            1200
            <div className='text-[14px] mb-2'>{item.unit}</div>
            <span className={`mb-2 font-medium sm:text-[14px] text-[12px] ${situation === "positive" ? "text-[#00ff6a]" : "text-[#ef5350]"} `} >(+10%)</span>
        </div>
        <div className='text-[12px] sm:text-[14px] text-[#707783] mb-[6px]'>{item.desc}</div>
      </div>

      <div className={`h-fit p-2 flex items-center justify-center rounded-[12px]`} style={{backgroundColor: item.lightColor , color:item.color}}>
        {item.icon}
      </div>
    </div>
  )
}

export default CountsCards
