import React from "react";
import { Carousel } from "react-bootstrap";
import { useNavigate } from 'react-router-dom'

function CarouselHome() {
    const navigate = useNavigate();

    const movePage = (path) => {
        navigate(path);
    };

    return (
            <div>
                <Carousel style={{ width: "800px" }}>
                    <Carousel.Item onClick={() => movePage("/details")}>
                        <img
                            className="d-block"
                            src="https://img.celebrities.id/okz/900/76DBm2/master_1X0U6h9ec1_1090.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item onClick={() => movePage("/details")}>
                        <img
                            className="d-block"
                            src="https://imgsrv2.voi.id/frOH7qzW_irTEb3JH73crBMy2Fv8jtw1OooHUweTtoU/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy85OTI3NjYzYy03NGYyLTQyZWMtYWIwZi02NjE3ZDJlOWQ0ZGIvMjAyMDA0MDgxMTA5LW1haW4uY3JvcHBlZF8xNTg2MzE4OTcyLmpwZWc.jpg"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item onClick={() => movePage("/details")}>
                        <img
                            className="d-block"
                            src="https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2021/09/01/1054189481.jpeg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
    )
}

export default CarouselHome;