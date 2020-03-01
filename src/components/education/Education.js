import React from 'react';
import EducationItem from './EducationItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGraduationCap} from '@fortawesome/free-solid-svg-icons';
import {EDUCATION} from '../../data/education/education';
import usePagination from '../../hooks/PaginationHooks';

const Education = () => {
    const [getCurrentPageData, showButtons] = usePagination(EDUCATION.items);

    return ( 
        <section class="resume-education-section">
            <h2 class="resume-education-section-title"><FontAwesomeIcon icon={faGraduationCap} className="education-icon" /> Education</h2>
            {getCurrentPageData().map(item => <EducationItem {...item}/>)}
            {showButtons()}
        </section>
     );
}
 
export default Education;
