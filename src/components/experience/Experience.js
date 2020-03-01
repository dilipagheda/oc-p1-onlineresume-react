import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBriefcase} from '@fortawesome/free-solid-svg-icons';
import ExperienceItem from './ExperienceItem';
import {EXPERIENCE} from '../../data/experience';
import usePagination from '../../hooks/PaginationHooks';

const Experience = () => {
    const [getCurrentPageData, showButtons] = usePagination(EXPERIENCE.items);

    return ( 
        <section class="resume-exp-section">
            <h2 class="resume-exp-section-title"><FontAwesomeIcon icon={faBriefcase} className="exp-icon" /> Experience</h2>
            {getCurrentPageData().map(item => <ExperienceItem {...item}/>)}
            {showButtons()}            
        </section>
     );
}
 
export default Experience;