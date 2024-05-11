"use client"
import SearchExercises from "@/components/Exercises/SearchExercises";
import { useState } from "react";


export default function Exercises() {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');
  return (
   <>
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
   </>
  );
}
