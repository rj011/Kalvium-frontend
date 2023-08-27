import React from 'react'
import {Canvas} from '@react-three/fiber'
import Particle from '../components/Particle'
import { Card, Typography } from '@mui/material'
import Subcard from '../components/Subcard'
import './Home.css';
const Home = () => {
  return (
    <div className= 'container' style={{backgroundColor: '#121212', height: '100vh', margin: '0'}}>
      <div className = 'title' style ={{backgroundColor: '#121212', padding: '15px', display:'flex', alignItems: 'center', textAlign:'center', justifyContent: 'center'}}>
        <Typography variant='h3' align='center' sx={{ m: '0', color:'#BB86FC'}}>Track and record your attendance</Typography>
      </div>
      <div className = 'prop' style={{backgroundColor: '#121212', height: '75vh', alignItems: 'center'}}>
      <Canvas camera={{position : [0,0,6]}}>
        <Particle />

      </Canvas>
      </div>
      <div className='subjects' style={{position: 'relative', zIndex: '100', bottom: '50%', width: '100%',height:'50vh', display: 'flex', justifyContent:'center',alignItems: 'center', flexWrap:'wrap'}}>
        {/* height and wrap for hscroll in phone or none for vertical decide later*/}
        {/* Hardcoded values shall be replaced with mock values later */}
          <Subcard subject='English' slot='A' />
          <Subcard subject='Data Structures' slot='B' />
          <Subcard subject='App Design' slot='C' />
          <Subcard subject='Object Oriented Programming' slot='D' />
          <Subcard subject='Automata Theory' slot='E' />
          <Subcard subject='Artificial Intelligence' slot='F' />
          <Subcard subject='DevOps' slot='G' />
          <Subcard subject='IOS Development' slot='H' />
          
        
      </div>
      
    </div>
  )
}

export default Home