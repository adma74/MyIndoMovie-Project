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
                    <Card.Img variant="top" src="https://img.celebrities.id/okz/900/76DBm2/master_1X0U6h9ec1_1090.jpg" />
                </Card>
                <br />
                <Card className="cardFilm" style={{ width: '19rem' }} onClick={() => movePage("/details")}>
                    <Card.Img variant="top" src="https://imgsrv2.voi.id/frOH7qzW_irTEb3JH73crBMy2Fv8jtw1OooHUweTtoU/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy85OTI3NjYzYy03NGYyLTQyZWMtYWIwZi02NjE3ZDJlOWQ0ZGIvMjAyMDA0MDgxMTA5LW1haW4uY3JvcHBlZF8xNTg2MzE4OTcyLmpwZWc.jpg" />
                </Card>
                <br />
                <Card className="cardFilm" style={{ width: '19rem' }} onClick={() => movePage("/details")}>
                    <Card.Img variant="top" src="https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2021/09/01/1054189481.jpeg" />
                </Card>
            </div>
    )
}

export default CardHome