import React from 'react';
import Headers from '../Headers/Headers';
import AboutUs from '../AboutUs/AboutUs';
import MySkills from '../MySkills/MySkills';
import MyProjcets from '../MyProjcets/MyProjcets';
import WorkExperience from '../WorkExperience/WorkExperience';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div className='bg-gray-900   text-gray-300 top'> 
          <Headers></Headers>
          <AboutUs></AboutUs>
          <MySkills></MySkills>
          <MyProjcets></MyProjcets>
          <WorkExperience></WorkExperience>
          <Contact></Contact>
          <Footer></Footer>
        </div>
    );
};

export default Home;