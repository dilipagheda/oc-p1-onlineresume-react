import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDotCircle,faCircle} from '@fortawesome/free-solid-svg-icons';
import {Row,Col} from 'reactstrap';

const RenderIcon = ({current})=>{
    if(current){
        return (
            <Col md="2" className="icon-current">
                <FontAwesomeIcon icon={faDotCircle} />
            </Col>
        );
    }else{
        return (
            <Col md="2" className="icon-normal">
                <FontAwesomeIcon icon={faCircle} />
            </Col>
        );
    }
}

export default RenderIcon;