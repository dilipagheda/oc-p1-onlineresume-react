import React, { useLayoutEffect } from 'react';
import {Row,Col} from 'reactstrap';
import RenderIcon from '../../common/RenderIcon';

const CertificateItem = ({title,date,category,current}) => {
    return (  
        <article>
            <Row>
                <Col md="3" className="resume-cert-section-date">
                    <Row>
                        <RenderIcon current={current} />
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