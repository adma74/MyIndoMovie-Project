import { Navbar, Nav, Container } from "react-bootstrap"
import { useNavigate } from "react-router-dom"


function NavBarComp() {
    const navigate = useNavigate();

    const movePage = (path) => {
        navigate(path);
    };

    return (
        <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand onClick={() => movePage("/")}>Logo Brand</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link onClick={() => movePage("/")}>Home</Nav.Link>
                        <Nav.Link onClick={() => movePage("/movies")}>Movielist</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link onClick={() => movePage("/login")}>Sign In</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBarComp