import { Row, Col } from "react-bootstrap"
import Image from 'next/image'
import profilePic from "../public/profile.png"

const DetailBox = ({ props }) => {
    return (
        <>
            <Row className="pl-5 pt-2">
                <Col xs={3} sm={3} md={4} lg={6} xl={6} className="p-3">
                    <Image src={profilePic} />
                </Col>
                <Col xs={9} sm={9} md={8} lg={12} xl={12}>
                    <h5 className="promtp-font text-bold">{props?.name}</h5>
                    <p className="promtp-font text-bold">{props?.detail}</p>
                </Col>
            </Row>
        </>
    )
}

export default DetailBox;