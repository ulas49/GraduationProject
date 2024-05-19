import AddWorkout from '@/components/Dashboard/AddWorkout'
import CategoryChart from '@/components/Dashboard/CategoryChart'
import CountsCards from '@/components/Dashboard/CountsCards'
import WeeklyStatCard from '@/components/Dashboard/WeeklyStatCard'
import { counts } from '@/utils/data'
import React from 'react'

const Dashboard = () => {
    
  return (
    <div className=" flex h-full justify-center px-0 py-[22px] overflow-y-scroll flex-1">
     <div className='flex max-w-[1400px] flex-col gap-[12px] sm:gap-[22px] flex-1'>
        <div className='flex flex-wrap justify-between gap-[12px] sm:gap-[22px] py-0 px-[16px]'>
          {counts.map((item)=>(
            <CountsCards item={item} situation={"positive"}/>
          ))}
        </div>

        <div className='flex flex-wrap justify-between gap-[12px] sm:gap-[22px] py-0 px-[16px]'>
         <WeeklyStatCard/>
         <CategoryChart/>
         <AddWorkout/>
        </div>
     </div>
    </div>
  )
}

export default Dashboard
