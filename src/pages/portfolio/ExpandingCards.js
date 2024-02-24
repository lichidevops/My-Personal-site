import React, { useEffect, useState } from 'react';
import './ExpandingCards.css'
import ModalLayout from './ModalLayout/ModalLayout';

export default function ExpandingCards() {

    const [panels, setPanels] = useState([
        {caption:"Mongolia",state:"active",style:{backgroundImage:"url(https://rp-cms.imgix.net/wp-content/uploads/MOADVPHOTO_2013_JKC_3343.jpg?auto=format&ar=1200%3A600&fit=crop&crop=faces)"}},
        {caption:"Mongolia",state:"",style:{backgroundImage:"url(https://i.natgeofe.com/k/16f3666f-97b3-4bc3-bbef-fff2b2084f71/mongolia-yurt.jpg?w=1084.125&h=609)"}},
        {caption:"Mongolia",state:"",style:{backgroundImage:"url(https://lp-cms-production.imgix.net/2023-08/shutterstock585027838.jpg?auto=format&w=1440&h=810&fit=crop&q=75)"}},
        {caption:"Mongolia",state:"",style:{backgroundImage:"url(https://ewjqphivwyq.exactdn.com/wp-content/uploads/2023/06/Mongolia-montana-scaled.jpeg?strip=all&lossy=1&ssl=1)"}},
        {caption:"Mongolia",state:"",style:{backgroundImage:"url(https://images.tripadeal.com.au/cdn-cgi/image/format=auto,width=800/https://cstad.s3.ap-southeast-2.amazonaws.com/4364_15D_Mongolia_Adventure_Web_Hero4.jpg)"}}
    ]);

    const handleClick = (index)=>{
        let copyPanels = [...panels];
        copyPanels.forEach((panel)=>{
            panel.state = "";
        });
        copyPanels[index].state = "active";
        setPanels(copyPanels);
    }

    const clearState = ()=>{

        let copyPanels = [...panels];
        copyPanels.forEach((panel)=>{
            panel.state = "";
        });
        copyPanels[0].state = "active";
        setPanels(copyPanels)
    }

    useEffect(()=>{

    },[])
  return (
    <>
      <ModalLayout name={"Expanding Cards"} setState={()=>{}} clearState={clearState}>
        <div className='expanding-card-container'>
            {
                panels.map((panel,index)=>{
                    return (
                        <div key={index} onClick={()=>handleClick(index)} className={`panel ${panel.state}`} style={panel.style}>
                            <h3>Mongolia</h3>
                        </div>
                    )
                })
            }
        </div>
      </ModalLayout>
    </>
  )
}
