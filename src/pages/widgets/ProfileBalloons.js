import React, { useEffect, useState } from 'react';
import './ProfileBalloons.css';
import Balloon from './Balloon';

export default function ProfileBalloons() {

    const [balloons, setBalloons] = useState([
        {id:1,left:5,startHeight:0,ceiling:90,flyRate:Math.random()*200+50},
    ]);
    // console.log(balloons[balloons.length-1].left + 20)
    let balloonIdCounter = balloons.length > 0 ? Math.max(...balloons.map(b => b.id)) + 1 : 1;

    const addBalloons = ()=>{
        setBalloons(
          (currentBalloons)=>{
            if(balloons.length >= 20){
                return currentBalloons
            }
            let lastBalloonPos = currentBalloons[currentBalloons.length-1]? currentBalloons[currentBalloons.length-1].left + 25 : 5;

            if(lastBalloonPos +20 > 100){
                lastBalloonPos = 5;
            }
            const baseCeiling = 90;
            const ceilingReduction = currentBalloons.length; // Or any other formula you find appropriate
            const newCeiling = Math.max(baseCeiling - ceilingReduction, 30); // Prevent it from going below 50, for example
    
            const newBalloon = {
                id:balloonIdCounter++,
                left:lastBalloonPos,
                // find the balloon with lowest height
                startHeight: 0,
                ceiling:newCeiling,
                flyRate: Math.random()*200+50
            }
            return [...currentBalloons,newBalloon]
          }
        )
    }
    const popBalloon = (balloonId)=>{
        setBalloons((prevBalloon)=>
            prevBalloon.map(balloon => balloon.id === balloonId ? { ...balloon, isPopping: true } :balloon
                )
        )
        setTimeout(() => {
            setBalloons((previousBalloons)=>{
                return previousBalloons.filter((balloon)=> balloon.id !== balloonId
                )
            })
        }, 500);

    }

    useEffect(()=>{

        let interval = setInterval(()=>{
                addBalloons()
        },1000);
        
        if(balloons.length >=6){
            clearInterval(interval)
        }
        return ()=>clearInterval(interval)

    },[balloons.length])

  return (
    <div id='profile-balloons' style={{position:"relative"}}>
        {
            balloons.map((balloon)=>{
            return  (
                <div key={balloon.id} onClick={()=>{popBalloon(balloon.id)}} >
                    <Balloon  startLeft={balloon.left} startHeight={balloon.startHeight} ceiling={balloon.ceiling} flyRate={balloon.flyRate} isPopping={balloon.isPopping} />
                </div>

                )
            })
        }
    </div>
  )
}
