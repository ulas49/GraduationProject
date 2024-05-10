import Image from "next/image";
import styles from "./page.module.css";
import TrackingSection from "@/components/TrackingSection/TrackingSection";
import Workouts from "@/components/Workouts/Workouts";

export default function Home() {
  return (
   <main>
<TrackingSection/> 
<Workouts/>
   </main>
  );
}
