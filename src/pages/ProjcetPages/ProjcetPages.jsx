import React from 'react';
import MyProjcets from '../../Coomponents/MyProjcets/MyProjcets';
import WorkExperience from '../../Coomponents/WorkExperience/WorkExperience';
import Contact from '../../Coomponents/Contact/Contact';
import Footer from '../../Coomponents/Footer/Footer';

const ProjcetPages = () => {
    return (
        <div>
            <MyProjcets></MyProjcets>
            <WorkExperience></WorkExperience>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default ProjcetPages;