import React from 'react'
import { useState, useEffect } from 'react'
import { Card, Typography, Button} from '@mui/material'

import Lottie from 'lottie-react'
import animationData from '../lottie/animation_llt9erg3.json'

const Subcard = (props) => {
   
    const [ismarked, setisMarked] = useState(false);
    function click() {
        setisMarked(true);
    }

    const style ={
        height:40,
        width: 40,
    }

    const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); // Update every second

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const currentDate = new Date();
    const storedDate = localStorage.getItem('lastCheckedDate');

    if (storedDate) {
      const lastCheckedDate = new Date(storedDate);

      
      if (currentDate.toDateString() !== lastCheckedDate.toDateString()) {
        setisMarked(false);
        localStorage.setItem('lastCheckedDate', currentDate.toISOString());
        setCurrentDateTime(currentDate);
      }
    } else {
      localStorage.setItem('lastCheckedDate', currentDate.toISOString());
    }
  }, []);
      
  return (
    <Card sx={{backgroundColor: '#121212', width: '240px',height:'240px', padding:'20px', margin:'15px', borderRadius: '10px', border:'2px solid white', opacity:'50%'}}>
        
        <Typography variant='h4' sx={{color: '#03DAC6', position:'relative', top:'2%'}}>{props.subject}</Typography>
        
        <Typography variant='h5' sx={{color: '#03DAC6', position:'relative'}}>Subject Slot:{props.slot} </Typography>
        <Typography variant='h5' sx = {{color: '#BB86FC'}}>{ currentDateTime.toLocaleDateString() }</Typography>
        
        <Button variant= 'contained' color='secondary' onClick={click} sx={{padding:'5px'}}>{ ismarked? 'Done' : 'Present'}</Button>
        {ismarked && (
            <Lottie animationData={animationData} loop={false} autoplay={true} style={style}/>
        )}
        
        
    
      
        

    </Card>
  )
}

export default Subcard