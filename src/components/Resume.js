import React from 'react';
import Education from './education/Education';
import Experience from './experience/Experience';
import Certificates from './certificates/Certificates';

const Resume = () => {
    return (  
        <main class="resume">
            <section class="resume-header-section">
                <h1 class="resume-header-section-title"><span class="firstname">Dilip</span> <span class="lastname">Agheda</span></h1>
                <p class="resume-header-section-desc"><em>Fulls</em>tack Web Developer</p>
            </section>
            <Education />
            <Experience />
            <Certificates />
        </main>
    );
};
 
export default Resume;