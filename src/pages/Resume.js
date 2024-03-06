import React, { useEffect, useState } from 'react'
import Layout from '../components/layout/Layout';
import './Resume.css'
import html2pdf from 'html2pdf.js';

export default function ResumePage() {

  const [experiences, setExperiences] = useState([
    {
      title:"Web / Apps Script Developer / Computer Science Teacher",
      organization:"Dwight School Seoul",
      duration:"2020-2024",
      location:"Seoul, South Korea",
      jobDetails:[
        "Developed a School Morning Bulletin Delivery System utilizing Apps Script, integrating spreadsheets and Google Docs for automated content distribution",
        "Created and launched a School Online Spirit Store using Python and Flask, for merchandise sales and community engagement.",
        "Implemented a system for cross-referencing Google Form responses with automatic email reminders to enhance data management and communication efficiency",
        "Implemented Staff Birthday Email Automation via Apps Script, enhancing organizational culture with personalized communication",
        "Currently Developing a UCC University Visit Booking System with React, Node.js, and MySQL, streamlining and simplifying the process for scheduling campus visits for prospective students",
        "Developed and implemented curriculum for International Baccalaureate Diploma Programme (IBDP) Computer Science course.",
        "Utilized Google Sheets based applications for comprehensive student data management, including tracking grades, collecting, cleaning, and visualizing data, developed user-friendly tools for efficient data search and viewing, enhancing accessibility and usability."
      ]},
    {
      title:"Chinese Teacher / Design Teacher",
      organization:"Dwight School Seoul",
      duration:"2017-2024",
      location:"Seoul, South Korea",
      jobDetails:[
        "Delivered engaging lessons using diverse teaching methods to foster critical thinking and problem-solving skills",
        "Developed comprehensive curriculum for Chinese language classes, catering to students from diverse backgrounds.",
        "Implemented dynamic design class programs, fostering a creative learning environment.",
        "Led yearbook design and coordination, blending creative layouts with meticulous project management to craft memorable annual publications."
      ]},
    {
      title:"AP Chinese Teacher",
      organization:"International School of Myanmar",
      duration:"2014-2017",
      location:"Yangon, Myanmar",
      jobDetails:[
        "Designed engaging lesson plans that emphasized cultural immersion, critical thinking, and language application, leading to notable student achievements in AP exams.",
        "Delivered high-quality instruction and significantly improving students' proficiency in Mandarin."
      ]
    },
    {
      title:"Volunteer",
      organization:"Confucius Institute at Egerton University",
      duration:"2012-2014",
      location:"Nakuru, Kenya",
      jobDetails:[
        "Designed and delivered a comprehensive Chinese language curriculum at Confucius Institute, Egerton University, enriching Nakuru's diverse community through education and cultural exchange initiatives.",
        "Championed diversity by bridging cultural gaps, leveraging events to deepen mutual understanding between the communities.",
      ]
    },
  ])

  const [skills, setSkills] = useState([
    "Javascript","Python","Java","Dart","React.js","Node.js","MySQL","MongoDB","Flask","Flutter","Swift","AppsScript","Git"
  ]);
  const [education,setEducation] = useState([
    {degree:"B.A",major:"Linguistics",year:2012,school:"National University of Mongolia"}
  ])
  const [certificates, setCertificates] = useState([
    "AWS DevOps Engineer Professional",
    "AWS Associates",
    "Teaching Certificate"
  ]);
  
  const [otherSkills, setOtherSkills] = useState([
    "Microsoft Office",
    "Google Workspace",
    "Adobe Photoshop, Illustrator, InDesign", "Design & Publishing","Curriculum Design",
    "Photography",
    "Teaching"
  ]);
  const [languages, setLangauges] = useState([
    "English - Fluent",
    "Mandarin - Native",
    "Mongolian - Fluent",
    "Russian - Intermediate"
  ])

  const generateSkillColumn = (title,items)=>{
    return (
      <>
        <h3>{title}</h3>
        <hr></hr>
        {
          items.map((item,index)=>{
            return <p key={index}>{item}</p>
          })
        }
      </>
    )
  }

  const generateEducationColumn = (title,items)=>{
    return (
      <>
        <h3>{title}</h3>
        <hr></hr>
        {
          items.map((item,itemIndex)=>{
            return (
              <div key={itemIndex}>
              <p className='degree-info'>{item.degree} - {item.major}</p>
              <p className='school-info'>- {item.school}</p>
              <p className='education-year'>- {item.year}</p>
              </div>
            )
          })
        }
      </>
    )
  }

  const generatePDF = () => {
    const element = document.getElementById("resume-paper");
    const opt = {
      filename: 'LiChi Resume.pdf', 
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
      margin:0
  };
    html2pdf()
      .from(element)
      .set(opt)
      .save();
};

  useEffect(()=>{
    document.title = "Resume"
  },)

  return (
    <Layout>
      <div id='resume-page'>
        <button onClick={generatePDF} id='resume-dl-button'>Download as PDF</button>
        <div id='resume-paper'>
          <div className='resume-content'>
            <div className='self-intro-row'>
              <h2>LiChi</h2>
              <h3>Web Developer</h3>
              <p id='self-summary'>Dedicated and self-driven professional with a global perspective, combining creativity, resilience, and adaptability. A lifelong learner known for consistent, hardworking ethos, resourceful problem-solving, and strong communication and teamwork skills.</p>
            </div>
            <hr/>
            <div className='experience-row'>
              <h3>WORK EXPERIENCE</h3>
              {experiences.map((experience,index)=>{
                return (
                  <div key={index}>
                  <div className='experience-brief'>
                    <p className='job-title'>{experience.title}</p>
                    <p className='organization-name'>{experience.organization}</p>
                    <div className='place-year'>
                      <p className='job-duration'>{experience.duration}</p>
                      <p className='job-location'>{experience.location}</p>
                    </div>
                  </div>
                  <div className='job-details'>
                    <ul>
                    {experience.jobDetails.map((bulletin,detailIndex)=>{
                        return (
                          <li className='job-bulletin' key={detailIndex}>{bulletin}</li>
                        )
                    })}
                    </ul>
                  </div>
                  </div>
                )
                })
              }
            </div>
          </div>

          <div className='resume-sidebar'>
            {/* <div className='contact-row'>
              <p>Email: <span>lichi.liqi@gmail.com</span></p>
              <p>Telephone:<span>010-8913-0910</span></p>
              <p>Personal Page:<span>lycheelichi.com</span></p>
            </div> */}
            <div id='education-row'>
              {generateEducationColumn("EDUCATION",education)}
            </div>
            <div className='skills-row'>
              {generateSkillColumn("PROGRAMMING",skills)}
            </div>

            <div className='certificates-row'>
              {generateSkillColumn("CERTIFICATES",certificates)}
            </div>
            <div className='languages-row'>
              {generateSkillColumn("Languages",languages)}
              
            </div>
            <div className='other-skills-row'>
              {generateSkillColumn("Other Skills",otherSkills)}
            </div>
          </div>
        </div>
        <button onClick={generatePDF} id='resume-dl-button'>Download as PDF</button>
      </div>
    </Layout>
  )
}
