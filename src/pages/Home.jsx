import AppointmentList from "../components/AppointmentList"
import Doctors from "../components/Doctors"
import {doctorData} from "../helper/data"
import {appointmentData} from "../helper/data"
import { useState } from "react"


const Home = () => {
  const [doctors ,setDoctor]=useState(doctorData)
  const [appointments ,setAppointments]=useState(appointmentData)
  // const getAppointment =async()=>{
  //   try {
  //     const {data} = await axios.get("url")
  //     setAppointments(data)
      
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }


  return (
    <main className="text-center mt-2 vh-100">
      <h1 className="display-5 text-danger">CLARUS HOSPITAL</h1>
      <Doctors doctors={doctors} appointments={appointments} setAppointments={setAppointments}/>
      <AppointmentList appointments={appointments} setAppointments={setAppointments}/>
    </main>
  )
}

export default Home
