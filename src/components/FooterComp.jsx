import { Container, Navbar, Nav } from "react-bootstrap"
import { useNavigate } from 'react-router-dom'

function Footer() {
    const navigate = useNavigate();

    const movePage = (path) => {
        navigate(path);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '100px' }}>
            <Navbar className="justify-content-center" bg='dark' variant='dark'>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Nav>
                    <Nav.Link> About Us </Nav.Link>
                    <Nav.Link onClick={() => movePage("/help")}> Help </Nav.Link>
                </Nav>
            </Navbar>
            <Container>
                <p style={{ margin: '50px' }}>Copyright © 2022 MyIndoMovie All Rights Reserved.</p>
            </Container>
        </div>
    )
}

export default Footer