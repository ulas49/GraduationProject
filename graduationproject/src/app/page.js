"use client"
import Image from "next/image";
import styles from "./page.module.css";
import TrackingSection from "@/components/Home/TrackingSection/TrackingSection";
import Workouts from "@/components/Home/Workouts/Workouts";
import { useSelector } from "react-redux";
import { redirect } from 'next/navigation'

export default function Home() {
    const { currentUser } = useSelector((state) => state.user);
console.log("currentuser",currentUser);

  return (
    <section>
      {currentUser ? (
        <main>
          <TrackingSection />
          <Workouts />
        </main>
      ) : (
        redirect("/authentication")
      )}
    </section>
  );
}
