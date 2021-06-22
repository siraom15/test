import { Container, Row, Col } from 'react-bootstrap'
import { useState } from "react";
import DetailBox from '../components/DetailBox'
import AllCommandBox from '../components/AllCommandBox'
import CommandList from '../components/CommandList'
import GameBox from '../components/GameBox'
export default function Home() {
  const [commands, setCommands] = useState([]);

  return (
    <>
      <Container className="p-3">
        <Row>
          {/* GAME */}
          <Col xs={12} sm={12} md={12} lg={6} xl={6}>
            <GameBox />
          </Col>

          {/* DETAIL */}
          <Col xs={12} sm={12} md={12} lg={6} xl={6} >
            <DetailBox props={{ name: "มานีมานะ", detail: "Hello World" }} />
          </Col>

          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <hr />
          </Col>

          <Col xs={12} sm={12} md={12} lg={6} xl={6}>
            <AllCommandBox commands={commands} />
          </Col>

          <Col xs={12} sm={12} md={12} lg={6} xl={6}>
            <CommandList commands={commands} setCommands={setCommands} />
          </Col>


        </Row>
      </Container>
    </>
  )
}
