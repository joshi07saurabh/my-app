// components/Home.js
import React from 'react';
import imageSrc from '../components/logo1.png'; // Import your image file
//import './Home.css'

const Home = () => {
  return (
    <div>
      <center style ={{ fontWeight: 'bold',fontSize: '30px'}}>Welcome to our Market </center>
      <center style={{marginTop:'10px'}} > Seamlessly connect consumers with their desired stores while empowering shopkeepers to effectively advertise and promote their products on the platform.</center>
      <img src={imageSrc} alt="Website Logo" style={{ width: '200px',display: 'block', margin: '25px auto', height: '200px', objectFit: 'contain' }} />
      <center style={{fontWeight:'bold', marginLeft:'20px', marginBottom:'10px'}}>Think Local Buy Local Be Local</center>
      {/* <button className='custom-button' type='button' disabled onClick={()=>console.log('h')}>Download App</button>  */}
      <button style={{color:'black', display:'block',margin:'15px auto 20px', cursor:'not-allowed', border:'1px solid black'}} type='button' disabled onClick={()=>console.log('h')}>Download App</button> 
      <center><b>Coming Soon...</b></center>
    </div>
  );
};

export default Home;
