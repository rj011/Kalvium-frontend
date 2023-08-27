import React from 'react'
import { Card, Typography, Button} from '@mui/material'
import { Color } from 'three'
import DateTime from './DateTime'
const Subcard = () => {
  return (
    <Card sx={{backgroundColor: '#121212', width: '240px',height:'240px', padding:'20px', margin:'15px', borderRadius: '10px', border:'2px solid white', opacity:'50%'}}>
        
        <Typography variant='h4' sx={{color: '#03DAC6', position:'relative', top:'2%'}}>English</Typography>
        
        <Typography variant='h5' sx={{color: '#03DAC6', position:'relative'}}>Subject Slot: A</Typography>
        <Typography variant='h5' sx = {{color: '#BB86FC'}}>{ <DateTime/>}</Typography>

        <Button variant='contained' color='secondary' sx={{padding:'10px'}}>Present</Button>
        

    </Card>
  )
}

export default Subcard