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
                <Carousel style={{ width: "750px" }}>
                    <Carousel.Item onClick={() => movePage("/details")}>
                        <img
                            className="d-block"
                            src="https://upload.wikimedia.org/wikipedia/id/5/55/WDKI_reborn.jpg"
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
                            src="https://upload.wikimedia.org/wikipedia/id/5/55/WDKI_reborn.jpg"
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
                            src="https://upload.wikimedia.org/wikipedia/id/5/55/WDKI_reborn.jpg"
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