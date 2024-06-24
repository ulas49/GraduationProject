"use client";
import { addWorkout, getDashboardDetails, getWorkouts } from "@/api";
import AddWorkout from "@/components/Dashboard/AddWorkout";
import CategoryChart from "@/components/Dashboard/CategoryChart";
import CountsCards from "@/components/Dashboard/CountsCards";
import WeeklyStatCard from "@/components/Dashboard/WeeklyStatCard";
import WorkoutCard from "@/components/Dashboard/WorkoutCard";
import { counts } from "@/utils/data";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [buttonLoading, setButtonLoading] = useState(false);
  const [todaysWorkouts, setTodaysWorkouts] = useState([]);
  const [workout, setWorkout] = useState(`#Legs
-Back Squat
-5 setsX15 reps
-30 kg
-10 min`);

  const dashboardData = async () => {
    setLoading(true);
    const token = localStorage.getItem("fittrack-app-token");
    await getDashboardDetails(token).then((res) => {
      setData(res.data);
      console.log(res.data);
      setLoading(false);
    });
  };

  const getTodaysWorkout = async () => {
    setLoading(true);
    const token = localStorage.getItem("fittrack-app-token");
    await getWorkouts(token, "").then((res) => {
      setTodaysWorkouts(res?.data?.todaysWorkouts);
      console.log("todays",res.data);
      setLoading(false);
    });
  };

  const addNewWorkout = async () => {
    setButtonLoading(true);
    const token = localStorage.getItem("fittrack-app-token");
    await addWorkout(token, { workoutString: workout })
      .then((res) => {
        dashboardData();
        getTodaysWorkout();
        setButtonLoading(false);
      })
      .catch((err) => {
        alert(err);
      });
  };

  useEffect(() => {
    dashboardData();
    getTodaysWorkout();
  }, []);

  return (
    <div className=" flex h-full justify-center px-0 py-[22px] overflow-y-scroll flex-1">
      <div className="flex max-w-[1400px] flex-col gap-[12px] sm:gap-[22px] flex-1">
        <div className="flex flex-wrap justify-between gap-[12px] sm:gap-[22px] py-0 px-[16px]">
          {counts.map((item) => (
            <CountsCards item={item} situation={"positive"} data={data} />
          ))}
        </div>

        <div className="flex flex-wrap justify-between gap-[12px] sm:gap-[22px] py-0 px-[16px]">
          <WeeklyStatCard data={data} />
          <CategoryChart data={data} />
          <AddWorkout
            workout={workout}
            setWorkout={setWorkout}
            addNewWorkout={addNewWorkout}
            buttonLoading={buttonLoading}
          />
        </div>

        <div className="flex flex-col py-0 px-4 gap-3 sm:gap-[22px]">
          <p className="py-0 px-4 font-semibold text-[#404040] text-[22px]">
            Todays Workouts
          </p>
          <div className="flex flex-wrap justify-center mb-[100px] gap-3 sm:gap-5">
            {todaysWorkouts.map((workout) => (
              <WorkoutCard workout={workout} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
