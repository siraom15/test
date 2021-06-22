import ActionButton from "./ActionButton";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
const AllCommandBox = (props) => {
    return (
        <div className="rounded p-2 mt-3 mb-3" style={{ backgroundColor: "#F5F5F5" }}>
            <Row>
                <Col xs="1">

                </Col>
                <Col>

                    <Container className="rounded" style={{ backgroundColor: "#EBEBEB" }}>
                        <Row className="p-2">
                            {props?.commands.length > 0 ? props.commands.map((e) => (
                                <Col xs="1" className="p-0 ml-1 mr-1">
                                    <ActionButton text={e} cn="btn-block" callbackFunction={() => { }} />
                                </Col>
                            )) :
                                <Col xs="1" className="p-3">
                                    {' '}
                                </Col>
                            }
                        </Row>
                    </Container>
                </Col>
            </Row>
        </div>
    )
}

export default AllCommandBox;
