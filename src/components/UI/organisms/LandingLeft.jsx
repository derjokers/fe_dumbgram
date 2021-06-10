import React from 'react';
import { Col, Row } from 'react-bootstrap';
import DumbgramLanding from '../atoms/DumbgramLanding';
import GridPhotos from '../molekules/GridPhotos';
import JumbotronLanding from '../molekules/JumbotronLanding';
import LoginAndReg from '../molekules/LoginAndReg';

import '../../../styles/UI/LandingLeft.css';
import Register from './Register';
import Login from './Login';

function LandingLeft(props) {
    return (
        <div className="landingLeft">
            <Row>
                <Col style={{marginLeft: "150px", paddingTop: "20px"}} >
                    <DumbgramLanding />
                    <JumbotronLanding />
                    <LoginAndReg />
                </Col>
                <Col>
                    <GridPhotos />
                </Col>
            </Row>
            {/* <Register /> */}
            {/* <Login /> */}
        </div>
    );
}

export default LandingLeft;