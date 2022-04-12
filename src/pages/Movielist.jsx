import ContentCard from "../components/ContentCard"
import { Container } from 'react-bootstrap'

function MovielistPage() {
    return (
        <div>
            <Container>
                <h1 style={{ margin: '50px', textAlign: 'center' }}> Movielist </h1>
                <ContentCard />
            </Container>
        </div>
    )
}

export default MovielistPage