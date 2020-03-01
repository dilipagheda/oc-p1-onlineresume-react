import React, { useLayoutEffect } from 'react';
import {Row,Col} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDotCircle} from '@fortawesome/free-solid-svg-icons';


const ExperienceItem = ({companyName, location, jobTitle, period, achievements, skillsGained}) => {

    const renderAchievements = ()=>{
        return (
            <ul>
               {achievements.map(item => <li>{item}</li>)}
            </ul>
        );
    }

    return (  
        <article>
        <Row>
            <Col md="3" className="resume-exp-section-date">
                <Row>
                    <Col md="2" className="resume-exp-section-date-icon">
                        <FontAwesomeIcon icon={faDotCircle}
                        />
                    </Col>
                    <Col md="10" className="resume-exp-section-date-detail">
                        <div>{period}</div>
                        <div>{location}</div>
                    </Col>
                </Row>
            </Col>
            <Col md="9">
                <section className="resume-exp-section-detail">
                    <h2>{companyName}</h2>
                    <p>{jobTitle}</p>
                    {renderAchievements()}
                </section>
            </Col>
        </Row>
    </article>  
    );
}
 
export default ExperienceItem;