import { Row, Col } from "react-bootstrap"
import Image from 'next/image'
import profilePic from "../public/profile.png"

const DetailBox = ({ props }) => {
    return (
        <>
            <Row className="pl-5 pt-2">
                <Col xs="3" className="p-3">
                    <Image src={profilePic} />
                </Col>
                <Col xs="9">
                    <h5 className="promtp-font text-bold">{props?.name}</h5>
                    <p className="promtp-font text-bold">{props?.detail}</p>
                </Col>
            </Row>
        </>
    )
} 
    
export default DetailBox;