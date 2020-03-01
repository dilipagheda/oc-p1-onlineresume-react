import React, { useLayoutEffect } from 'react';
import {Row,Col} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDotCircle} from '@fortawesome/free-solid-svg-icons';

const CertificateItem = ({title,date,category}) => {
    return (  
        <article>
            <Row>
                <Col md="3" className="resume-cert-section-date">
                    <Row>
                        <Col md="2" className="resume-cert-section-date-icon">
                            <FontAwesomeIcon icon={faDotCircle}
                            />
                        </Col>
                        <Col md="10" className="resume-cert-section-date-detail">
                            <div>{date}</div>
                        </Col>
                    </Row>
                </Col>
                <Col md="9">
                    <section className="resume-cert-section-detail">
                        <h2>{title}</h2>
                        <p>{category}</p>
                    </section>
                </Col>
            </Row>
        </article> 
    );
}
 
export default CertificateItem;