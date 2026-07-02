import { useState } from 'react'
import React from 'react'
import Card from './component/Card.jsx'

const App = () => {
  console.log("app rerender");
  

const [jobs, setJobs] =useState(
  [
  {
    title: "Frontend Developer",
    price: 60000,
    companyName: "TechNova",
    workingDuration: "Full Time"
  },
  {
    title: "Backend Developer",
    price: 75000,
    companyName: "CodeSphere",
    workingDuration: "2 Years"
  },
  {
    title: "UI/UX Designer",
    price: 55000,
    companyName: "PixelCraft",
    workingDuration: "1 Year"
  },
  {
    title: "Data Analyst",
    price: 68000,
    companyName: "Insight Labs",
    workingDuration: "Full Time"
  },
  {
    title: "Mobile App Developer",
    price: 72000,
    companyName: "AppWorks",
    workingDuration: "3 Years"
  },
  {
    title: "DevOps Engineer",
    price: 85000,
    companyName: "CloudSync",
    workingDuration: "Full Time"
  },
  {
    title: "QA Engineer",
    price: 50000,
    companyName: "Bug Hunters",
    workingDuration: "6 Months"
  },
  {
    title: "Software Engineer",
    price: 90000,
    companyName: "NextGen Solutions",
    workingDuration: "5 Years"
  },
  {
    title: "Machine Learning Engineer",
    price: 120000,
    companyName: "AI Vision",
    workingDuration: "4 Years"
  },
  {
    title: "Cyber Security Analyst",
    price: 95000,
    companyName: "SecureNet",
    workingDuration: "Full Time"
  }
]
)

// const deletejob = (index) => {
//   jobs.filter((elem,index) => index !== index);
//   setJobs(jobs);
// };



  return (
    <div  className=' p-4 flex '>
      {jobs.map((job, index) => (
        <Card
          key={index}
          title={job.title}
          price={job.price}
          companyName={job.companyName}
          workingDuration={job.workingDuration}
          // onDelete={() => deletejob(index)}
        />
      ))}
    </div>
  )
}

export default App
