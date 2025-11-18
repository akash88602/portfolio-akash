import React from 'react';
import MySkills from '../../Coomponents/MySkills/MySkills';
import MyProjcets from '../../Coomponents/MyProjcets/MyProjcets';
import WorkExperience from '../../Coomponents/WorkExperience/WorkExperience';
import Contact from '../../Coomponents/Contact/Contact';
import Footer from '../../Coomponents/Footer/Footer';

const SkillsPages = () => {
    return (
        <div>
            <MySkills></MySkills>
            <MyProjcets></MyProjcets>
            <WorkExperience></WorkExperience>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default SkillsPages;