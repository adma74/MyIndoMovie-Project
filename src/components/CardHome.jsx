import React from 'react'
import { Card } from "react-bootstrap"
import { useNavigate } from 'react-router-dom'
import '../assets/css/Card.css'

function CardHome() {
    const navigate = useNavigate();

    const movePage = (path) => {
        navigate(path);
    };

    return (
        <div>
            <Card className="cardFilm" style={{ width: '19rem' }} onClick={() => movePage("/details")}>
                <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/id/5/55/WDKI_reborn.jpg" />
            </Card>
            <br />
            <Card className="cardFilm" style={{ width: '19rem' }} onClick={() => movePage("/details")}>
                <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/id/5/55/WDKI_reborn.jpg" />
            </Card>
            <br />
            <Card className="cardFilm" style={{ width: '19rem' }} onClick={() => movePage("/details")}>
                <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/id/5/55/WDKI_reborn.jpg" />
            </Card>
        </div>
    )
}

export default CardHome