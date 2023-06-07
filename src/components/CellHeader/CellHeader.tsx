import React, {useEffect} from 'react';
import {CellContainer} from "./CellHeader.styled";
import Col from "react-bootstrap/Col";
import {Badge} from "react-bootstrap";
import Row from "react-bootstrap/Row";

interface CellHeader {
    month: string;
}

const CellHeader: React.FC<CellHeader> = ({month}) => {

    return (
            <CellContainer>
                <Row className="justify-content-center">
                    <Col sm="2" className="text-center">
                        <h5>
                            <Badge pill bg="dark" >
                                {month}
                            </Badge>
                        </h5>
                    </Col>
                </Row>
            </CellContainer>
    );
};

export default CellHeader;
