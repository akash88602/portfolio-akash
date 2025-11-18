import React from 'react';
import AboutUs from '../../Coomponents/AboutUs/AboutUs';
import MySkills from '../../Coomponents/MySkills/MySkills';
import MyProjcets from '../../Coomponents/MyProjcets/MyProjcets';
import WorkExperience from '../../Coomponents/WorkExperience/WorkExperience';
import Contact from '../../Coomponents/Contact/Contact';
import Footer from '../../Coomponents/Footer/Footer';

const AboutPages = () => {
    return (
        <div>
            <AboutUs></AboutUs>
            <MySkills></MySkills>
            <MyProjcets></MyProjcets>
            <WorkExperience></WorkExperience>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default AboutPages;