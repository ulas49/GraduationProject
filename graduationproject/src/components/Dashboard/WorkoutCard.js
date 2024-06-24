import React from 'react'
import { FitnessCenterRounded, TimelapseRounded } from "@mui/icons-material";

const WorkoutCard = ({ workout  }) => {
  return (
    <div className={`workoutCard py-3 px-[14px] sm:py-4 sm:px-[18px]`}>
      <div className={`workoutCategory`}>#{workout?.category}</div>
      <div className={`workoutName`}>{workout?.workoutName}</div>
      <div className={`workoutSets`}>
        Count: {workout?.sets} sets X {workout?.reps} reps
      </div>
      <div className={`workoutFlex`}>
        <div className={`workoutDetails`}>
          <FitnessCenterRounded sx={{ fontSize: "20px" }} />
          {workout?.weight} kg
        </div>
        <div className={`workoutDetails`}>
          <TimelapseRounded sx={{ fontSize: "20px" }} />
          {workout?.duration} min
        </div>
      </div>
    </div>
  );
};

export default WorkoutCard
