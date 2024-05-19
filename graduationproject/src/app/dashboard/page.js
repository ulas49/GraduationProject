"use client"
import AddWorkout from '@/components/Dashboard/AddWorkout'
import CategoryChart from '@/components/Dashboard/CategoryChart'
import CountsCards from '@/components/Dashboard/CountsCards'
import WeeklyStatCard from '@/components/Dashboard/WeeklyStatCard'
import WorkoutCard from '@/components/Dashboard/WorkoutCard'
import { counts } from '@/utils/data'
import {useState} from 'react'

const Dashboard = () => {
  const [workout,setWorkout]=useState("")
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
         <AddWorkout workout={workout} setWorkout={setWorkout} />
        </div>

        <div className='flex flex-col py-0 px-4 gap-3 sm:gap-[22px]'>
          <p className='py-0 px-4 font-semibold text-[#404040] text-[22px]'>Todays Workouts</p>
          <div className='flex flex-wrap justify-center mb-[100px] gap-3 sm:gap-5'>
          <WorkoutCard/>
          <WorkoutCard/>
          <WorkoutCard/>
          </div>  
        </div>
     </div>
    </div>
  )
}

export default Dashboard
