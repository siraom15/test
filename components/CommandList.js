import ActionButton from "./ActionButton";
import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";

const arrows = ["🡡", "🡣", "🡠", "🡢"];
const actions = ["Loop", "action"];
const CommandList = (props) => {
    const [currentCommands, setCurrentCommands] = useState(props.commands);

    useEffect(() => {
        setCurrentCommands(props.commands);
    }, [])

    const getData = (ChildProps) => {
        let textData = ChildProps.text;
        console.log("Get Data : " + textData);
        let temp = [...currentCommands];
        temp.push(textData)
        setCurrentCommands(temp);
        props.setCommands(temp);
        console.log("Set Parent Commands");

    }
    return (
        <div className="rounded p-2 mt-3 mb-3" style={{ backgroundColor: "#F5F5F5" }}>
            <Container className="">
                <Row className="p-2">
                    {arrows.map((e) => (
                        <Col xs="1" className="pr-1 p-0 m-0">
                            <ActionButton text={e} cn="btn-block " callbackFunction={getData} />
                        </Col>
                    ))}
                    {actions.map((e) => (
                        <Col className="pl-1 m-0">
                            <ActionButton text={e} cn="btn-block " callbackFunction={() => { }} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default CommandList;