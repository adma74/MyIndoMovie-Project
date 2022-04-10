import CardHome from "../components/CardHome"
import CarouselHome from "../components/CarouselHome"

import { Row, Col, Button } from "react-bootstrap"

function HomePage() {
    return (
        <div>
            <Row>
                <Col> <CarouselHome /></Col>
                <Col> <CardHome /> </Col>
            </Row>
            <Button style={{ margin: "0px 550px", backgroundColor: "black", border: "2px black" }}>See More Recomendations</Button>

        </div>
    )
}

export default HomePage
