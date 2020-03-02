import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import SideBar from './components/SideBar';
import Resume from './components/Resume';

const Home = () => {
    return (  
            <Container>
                <Row>
                    <Col md="3">
                        <div id="sidebar" className="introduction">
                            <SideBar />
                        </div>
                    </Col>
                    <Col md="9" id="main" className="resume">
                        <Resume />
                    </Col>
                </Row>
            </Container>
        );
}
 
export default Home;