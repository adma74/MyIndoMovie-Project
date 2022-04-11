import CardHome from "../components/CardHome"
import CarouselHome from "../components/CarouselHome"
import { Button, Container } from "react-bootstrap"
import { useNavigate } from 'react-router-dom'

function HomePage() {
    const navigate = useNavigate();

    const movePage = (path) => {
        navigate(path);
    };

    return (
        <div style={{ marginTop: '50px' }}>
            <div style={{ justifyContent: 'center' }}>
                <Container>
                    <CarouselHome />
                </Container>
            </div>
            <div style={{ margin: '80px', display: 'flex', flexDirection: 'column-center' }}>
                <Container>
                    <CardHome />
                </Container>
            </div>
            <center>
                <Button style={{ backgroundColor: "black", border: "2px black" }}>
                    <h6 onClick={() => movePage("/movies")}> See More Recomendations... </h6>
                </Button>
            </center>
        </div>
    )
}

export default HomePage
