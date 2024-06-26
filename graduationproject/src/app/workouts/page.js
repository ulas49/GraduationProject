"use client"
import WorkoutCard from '@/components/Dashboard/WorkoutCard';
import React, { useEffect, useState } from 'react'
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers";
import { useDispatch } from 'react-redux';
import { getWorkouts } from '@/api';
import { CircularProgress } from '@mui/material';


const Workouts = () => {
    const dispatch = useDispatch();
    const [todaysWorkouts, setTodaysWorkouts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [date, setDate] = useState("");
    
    const getTodaysWorkout = async () => {
      setLoading(true);
      const token = localStorage.getItem("fittrack-app-token");
      await getWorkouts(token, date ? `?date=${date}` : "").then((res) => {
        setTodaysWorkouts(res?.data?.todaysWorkouts);
        console.log(res.data);
        setLoading(false);
      });
    };

    useEffect(() => {
      getTodaysWorkout();
    }, [date]);
  
  return (
    <div className="flex flex-1 h-full justify-center py-[22px] px-0">
      <div className=" flex flex-1 max-w-[1600px] py-0 px-4 gap-3 flex-col sm:gap-[22px] sm:flex-row">
        <div className="WorkoutsLeft">
          <div className=" font-semibold text-[14px] sm:text-base text-[#007AFF] ">
            Select Date
          </div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
             <DateCalendar
              onChange={(e) => setDate(`${e.$M + 1}/${e.$D}/${e.$y}`)}
            />
          </LocalizationProvider>
        </div>
        <div className="flex-1">
          <div className="flex flex-col py-0 px-4 gap-3 sm:gap-[22px] ">
            <div className=" text-[22px] font-medium text-[#404040]">
              Todays Workout
            </div>
                 {loading ? (
              <CircularProgress />
            ) : (
               <div
              className=" flex flex-wrap justify-center gap-3 sm:gap-5 mb-[100px]"
            >
              {" "}
              {todaysWorkouts.map((workout) => (
                  <WorkoutCard workout={workout} />
                ))}
            </div>
            )}
           

            {/* {loading ? (
              <CircularProgress />
            ) : (
              <div id="CardWrapper">
                {todaysWorkouts.map((workout) => (
                  <WorkoutCard workout={workout} />
                ))}
              </div>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Workouts
