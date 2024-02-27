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
        "Implemented Staff Birthday Email Automation via Apps Script, enhancing organizational culture with personalized communication",
        "Created a UCC University Visit Booking System with React, Node.js, and MySQL, streamlining the process for scheduling campus visits for prospective students",
        "Developed and implemented curriculum for International Baccalaureate Diploma Programme (IBDP) Computer Science course."
      ]},
    {
      title:"Chinese Teacher / Design Teacher",
      organization:"Dwight School Seoul",
      duration:"2017-2024",
      location:"Seoul, South Korea",
      jobDetails:[
        "Delivered engaging lessons using diverse teaching methods to foster critical thinking and problem-solving skills",
        "Developed comprehensive curriculum for Chinese language classes, catering to students from diverse backgrounds.",
        "Implemented dynamic design class programs, fostering a creative learning environment."
      ]},
    {
      title:"AP Chinese Teacher",
      organization:"International School of Myanmar",
      duration:"2014-2017",
      location:"Yangon, Myanmar",
      jobDetails:[
        "Designed engaging lesson plans that emphasized cultural immersion, critical thinking, and language application, leading to notable student achievements in AP exams.",
        "Fostered a supportive and interactive classroom environment that encouraged student participation and facilitated a deeper understanding of Chinese culture.",
        "Delivered high-quality instruction and significantly improving students' proficiency in Mandarin."
      ]
    },
    {
      title:"Volunteer",
      organization:"Confucius Institute at Egerton University",
      duration:"2012-2014",
      location:"Nakuru, Kenya",
      jobDetails:[
        "",
        "",
        "",
        ""
      ]
    },
  ])

  const [skills, setSkills] = useState([
    "Javascript","Python","Java","Dart","Node.js","MySQL","Git","Flask","Flutter","Swift","AppsScript"
  ]);
  const [certificates, setCertificates] = useState([
    "AWS DevOps Engineer Professional",
    "AWS Associates",
    "Teaching Certificate"
  ])
  const [otherSkills, setOtherSkills] = useState([
    "Microsoft Office",
    "Google Workspace",
    "Adobe Photoshop, Illustrator, InDesign", "Design & Publishing","Curriculum Design",
    "Photography"
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

  const generatePDF = () => {
    const element = document.getElementById("resume-main");
    const options = {
      filename: 'LiChi Resume.pdf', // Set custom filename here
  };
    html2pdf()
        .from(element)
        .set(options)
        .save();
};

  useEffect(()=>{
    document.title = "Resume"
  },)
  return (
    <Layout>

        <div className='resume-body'>
          <button onClick={generatePDF} id='resume-dl-button'>Download as PDF</button>
          <div id='resume-main'>
            <div className='resume-content'>
              <div className='self-intro-row'>
                <h2>LiChi</h2>
                <h3><i>Web Developer</i></h3>
                <p>self-driven, motivated, life-long learner</p>
              </div>
              <hr/>
              <div className='experience-row'>
                <h3>WORK EXPERIENCE</h3>
                {
                  experiences.map((experience,index)=>{
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
                <div className='experience'>
                  <div 
                  className='experience-detail'>
                  </div>
                </div>
              </div>
              <div className='Education-row'></div>
            </div>

            <div className='resume-sidebar'>
              <div className='contact-row'>
                <p>Email: <span>lichi.liqi@gmail.com</span></p>
                <p>Telephone:<span>010-8913-0910</span></p>
                <p>Location:<span>Seoul, South Korea</span></p>
                <p>Personal Page:<span>lycheelichi.com</span></p>
                <p>LinkedIn <span><a href='https://www.linkedin.com/in/li-chi-80627454/'>LinkedIn</a></span></p>
              </div>
              <div className='skills-row'>
                {generateSkillColumn("SKILLS",skills)}
              </div>
              <div className='certificates-row'>
                {generateSkillColumn("CERTIFICATES",certificates)}
              </div>
              <div className='other-skills-row'>
                {generateSkillColumn("Other Skills",otherSkills)}
              </div>
              <div className='languages-row'>
                {generateSkillColumn("Languages",languages)}
              </div>
            </div>
          </div>
          <button onClick={generatePDF} id='resume-dl-button'>Download as PDF</button>
        </div>
    </Layout>
  )
}
