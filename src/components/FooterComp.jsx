import { Container, Navbar } from "react-bootstrap"
import { useNavigate } from 'react-router-dom'

function Footer() {
    const navigate = useNavigate();

    const movePage = (path) => {
        navigate(path);
    };
    
    return (
        <Container style={{ textAlign: 'center', marginTop: '100px' }}>
            <Navbar style={{ justifyContent: 'center'}}>
            <a style={{ margin: '20px' }}>About Us</a>
            <a onClick={() => movePage("/help")} style={{ margin: '20px' }}>Help</a>
            </Navbar>
            <Container>
                <p style={{ margin: '50px' }}>Copyright © 2022 MyIndoMovie All Rights Reserved.</p>
            </Container>
        </Container>
    )
}

export default Footer