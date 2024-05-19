import React from 'react'
import { FitnessCenterRounded, TimelapseRounded } from "@mui/icons-material";

const WorkoutCard = () => {
  return (
    <div className={`workoutCard py-3 px-[14px] sm:py-4 sm:px-[18px]`}>
    <div className={`workoutCategory`} >#LEGS</div>
    <div className={`workoutName`}>Back Squat</div>
    <div className={`workoutSets`}>
      Count: 5 sets X 10 reps
    </div>
    <div className={`workoutFlex`}>
      <div className={`workoutDetails`}>
        <FitnessCenterRounded sx={{ fontSize: "20px" }} />
        30 kg
      </div>
      <div className={`workoutDetails`}>
        <TimelapseRounded sx={{ fontSize: "20px" }} />
        10 min
      </div>
    </div>
  </div>
  )
}

export default WorkoutCard
