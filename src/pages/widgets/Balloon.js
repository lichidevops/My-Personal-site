import React, { useEffect } from 'react'
import { useState } from "react";

export default function Balloon({startLeft,startHeight,ceiling,flyRate, isPopping}) {

    const [height, setHeight] = useState(startHeight);

    const ballonFly = ()=>{
        let interval = setInterval(()=>{
            setHeight(prevHeight => {

                let newHeight = prevHeight;

                if(prevHeight < ceiling){
                    newHeight = prevHeight + 1; 
                }

                if (newHeight <= 0 || newHeight >= ceiling) {
                  clearInterval(interval);          
                    // stops if it's smaller or larger than boundary
                  return prevHeight; 
                } 
                return newHeight;
              });
              
        },flyRate);

        return ()=>clearInterval(interval)
    }

    useEffect(()=>{
        ballonFly()
    },[])

    return (
        <>
            <div className={`profile-balloon ${isPopping? 'pop-animation':''}`} style={{position:'absolute',left:`${startLeft}%`, bottom: `${height}%`, transition: 'bottom 0.3s ease',}}>
                <p>Hello</p>
            </div>
        </>
    )
}
