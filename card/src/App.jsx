import { useState } from 'react'
import React from 'react'
import Card from './component/Card.jsx'
import Form from './component/Form.jsx';

const App = () => {
  console.log("app rerender");
  

const [jobsData, setJobsData] =useState(
  [
  {
    id:"1",
    title: "Frontend Developer",
    price: 60000,
    companyName: "TechNova",
    workingDuration: "Full Time"
  },
  {
    id:"2",
    title: "Backend Developer",
    price: 75000,
    companyName: "CodeSphere",
    workingDuration: "2 Years"
  },
  {
    id:"3",
    title: "UI/UX Designer",
    price: 55000,
    companyName: "PixelCraft",
    workingDuration: "1 Year"
  },
  {
    id:"4",
    title: "Data Analyst",
    price: 68000,
    companyName: "Insight Labs",
    workingDuration: "Full Time"
  },
  {
    id:"5",
    title: "Mobile App Developer",
    price: 72000,
    companyName: "AppWorks",
    workingDuration: "3 Years"
  },
  {
    id:"6",
    title: "DevOps Engineer",
    price: 85000,
    companyName: "CloudSync",
    workingDuration: "Full Time"
  },
  {
    id:"7",
    title: "QA Engineer",
    price: 50000,
    companyName: "Bug Hunters",
    workingDuration: "6 Months"
  },
  {
    id:"8",
    title: "Software Engineer",
    price: 90000,
    companyName: "NextGen Solutions",
    workingDuration: "5 Years"
  },
  {
    id:"9",
    title: "Machine Learning Engineer",
    price: 120000,
    companyName: "AI Vision",
    workingDuration: "4 Years"
  },
  {
    id:"10",
    title: "Cyber Security Analyst",
    price: 95000,
    companyName: "SecureNet",
    workingDuration: "Full Time"
  }
]
)

const deleteJob = (id) => {
  let jobs =jobsData.filter((elem) => elem.id !== id);
  setJobsData(jobs);
};



  return (
    <div  className=' p-4 grid grid-cols-4 gap-4 '>
      <Form />
      {jobsData.map((job, index) => (
        
        <Card
          key={index}
          title={job.title}
          price={job.price}
          companyName={job.companyName}
          workingDuration={job.workingDuration}
          del={deleteJob}
        />

      ))}
    </div>
  )
}

export default App
