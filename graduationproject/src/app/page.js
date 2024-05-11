import Image from "next/image";
import styles from "./page.module.css";
import TrackingSection from "@/components/Home/TrackingSection/TrackingSection";
import Workouts from "@/components/Home/Workouts/Workouts";

export default function Home() {
  return (
   <main>
<TrackingSection/> 
<Workouts/>
   </main>
  );
}
