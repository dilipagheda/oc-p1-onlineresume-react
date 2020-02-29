import React from 'react';
import {Row,Col} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDotCircle} from '@fortawesome/free-solid-svg-icons';

const EducationItem = ({date,location, institute, university, title, subtitle,desc}) => {

    const renderHeader = ()=>{
        let content='';
        if(university)
        {
            content = <h2>{university}</h2>;
        }
        if(subtitle)
        {
            content = <h2>{`${university} | `}<span className="subtitle">{subtitle}</span></h2>;
        }
        return content;
    }

    return (  
        <article>
            <Row>
                <Col md="3" className="resume-education-section-date">
                    <Row>
                        <Col md="2" className="resume-education-section-date-icon">
                            <FontAwesomeIcon icon={faDotCircle}
                            />
                        </Col>
                        <Col md="10" className="resume-education-section-date-detail">
                            <div>{date}</div>
                            <div>{location}</div>
                        </Col>
                    </Row>
                </Col>
                <Col md="9">
                    <section className="resume-education-section-detail">
                        {renderHeader()}
                        {institute?<p className="institute">{institute}</p>:null}
                        {title?<p className="title">{title}</p>:null}
                        {desc?<p>{desc}</p>:null}
                    </section>
                </Col>
            </Row>
        </article>        
    );
}

export default EducationItem;

