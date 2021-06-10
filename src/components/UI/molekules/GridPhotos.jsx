import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Masonry from 'react-masonry-css';
import Photos from '../atoms/Photos';
import '../../../styles/UI/GridPhotos.css';

import beach from '../../../assets/images/beach.png';
import forest from '../../../assets/images/forest.png';
import ganteng from '../../../assets/images/ganteng.png';
import hotel from '../../../assets/images/hotel.png';
import lisa from '../../../assets/images/lisa.png';
import motorcycle from '../../../assets/images/motorcycle.png';
import sunset from '../../../assets/images/sunset.png';
import waterfall from '../../../assets/images/waterfall.png';

const breakpointColumnsObj = {
    default: 3,
}

function GridPhotos(props) {
    return (
        <Container>
            <Masonry
                breakpointCols = {breakpointColumnsObj}
                className = "my-masonry-grid"
                columnClassName = "my-masonry-grid_columns"
            >
                <Row>
                    <Photos image={waterfall} />
                    <Photos image={ganteng} />
                    <Photos image={hotel} />
                </Row>
                <Row>
                    <Photos image={sunset} />
                    <Photos image={beach} />
                </Row>
                <Row>
                    <Photos image={lisa} /> 
                    <Photos image={motorcycle} />
                    <Photos image={forest} />
                </Row>
                
            </Masonry>
        </Container>
    );
}

export default GridPhotos;