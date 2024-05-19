"use client"
import {useState} from 'react'
import TextInput from '../TextInput'
import Button from '../Button'

const AddWorkout = ({workout,setWorkout}) => {
  return (
  <div className='weeklyCard p-4 sm:p-[24px]' >
    <div className='weeklyTitle text-[14px]  '>Add New Workout</div>
    <TextInput
        label="Workout"
        textArea
        rows={10}
        placeholder={`Enter in this format:

#Category
-Workout Name
-Sets
-Reps
-Weight
-Duration`}
        value={workout}
        handelChange={(e) => setWorkout(e.target.value)}
      />
      <Button
        text="Add Workout"
        small

      />
  </div>
  )
}

export default AddWorkout
