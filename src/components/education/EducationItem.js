import React from 'react';
import {Row,Col} from 'reactstrap';
import RenderIcon from '../../common/RenderIcon';

const EducationItem = ({date,location, institute, university, title, subtitle,desc,current}) => {

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
                        <RenderIcon current={current} />
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

