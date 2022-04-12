import { Card } from 'react-bootstrap'

function CardDetail() {
    return (
        <Card className="bg-dark text-white" style={{ margin: '50px', display: 'flex', flexDirection: 'row' }} >
            <div>
                <Card.Img className="img-fluid rounded-start" src="https://upload.wikimedia.org/wikipedia/id/5/55/WDKI_reborn.jpg" alt="Card image" />
            </div>
            <div style={{ marginLeft: '20px' }}>
                <Card.Title>Movie title</Card.Title>
                
                <Card.Text>Producer </Card.Text>
                <Card.Text>Genre </Card.Text>
                <Card.Text>Artis </Card.Text>
                <Card.Text>Date Release </Card.Text>
                <Card.Text>Official Trailer </Card.Text>
                <Card.Text>Rating </Card.Text>
                <Card.Text>See Full Movie <a href='https://www.youtube.com/watch?v=ltawe4MeLxs'>here</a></Card.Text>
                <Card.Text>Synopsis </Card.Text>
            </div>
        </Card>
    )
}

export default CardDetail