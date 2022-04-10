import CardHome from "../components/CardHome"
import CarouselHome from "../components/CarouselHome"
import { Row, Col, Button, Container } from "react-bootstrap"
import { useNavigate } from 'react-router-dom'

function HomePage() {
    const navigate = useNavigate();

    const movePage = (path) => {
        navigate(path);
    };

    return (
        <div style={{ marginTop: '50px' }}>
            <Container>
                <Row>
                    <Col> <CarouselHome /></Col>
                    <Col> <CardHome /> </Col>
                </Row>
            </Container>
            <Button style={{ margin: "100px", backgroundColor: "black", border: "2px black" }}>
                <h6 onClick={() => movePage("/movies")}> See More Recomendations </h6>
            </Button>
        </div>
    )
}

export default HomePage
