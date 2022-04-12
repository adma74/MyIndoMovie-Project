import CardDetail from "../components/CardDetail"
import { Container } from 'react-bootstrap'
import FormReview from "../components/FormReview"

function DetailPage() {
    return (
        <div>
            <div>
                <Container>
                    <CardDetail />
                </Container>
            </div>
            <div>
                <Container>
                    <FormReview />
                </Container>
            </div>
        </div>
    )
}

export default DetailPage