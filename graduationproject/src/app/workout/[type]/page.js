"use client";
import React, { useEffect, useState } from "react";
import "./workoutPage.css";
import { useParams } from "next/navigation";
import { exerciseOptions, fetchData } from "@/utils/fetchData";
const page = () => {
  const [exercises, setExercises] = useState([]);
  const { type } = useParams();
  

  
  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (type === "all") {
        exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciseOptions
        );
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${type}?limit=3`,
          exerciseOptions
        );
      }

      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [type]);


  return (
    <div className="workout">
      <h1 className="mainhead1"> {type === "waist" ? "Abs" : type.toUpperCase()} Day</h1>
      <div className="workout__exercises">
        {exercises?.map((item, index) => {
          return (
            <div
              className={
                index % 2 === 0
                  ? "workout__exercise"
                  : "workout__exercise workout__exercise--reverse"
              }
            >
              <h3>{index + 1}</h3>
              <div className="workout__exercise__image">
                <img src={item.gifUrl} alt="" />
              </div>
              <div className="workout__exercise__content">
                <h2>{item.name}</h2>
                <span>4 sets X 12 reps</span>
                <p>
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, voluptatum."
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default page;
