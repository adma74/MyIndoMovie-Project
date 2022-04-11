// import { Card, Form, Button, Container } from 'react-bootstrap'
// import StarRatings from 'react-star-ratings'

// function FormReview() {
//     return (
//         <Container>
//             <Card style={{ display: 'flex', flexDirection: 'row', color: 'black' }}>
//                 <Card.Body>
//                     <Form>
//                         <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//                             <Form.Label>
//                                 <h5>Give your rating for this movie</h5>
//                             </Form.Label>
//                             <div>
//                                 <StarRatings
//                                     // rating={form.rating}
//                                     // changeRating={(number) => setForm({ ...form, rating: number })}
//                                     starDimension="15px"
//                                     starSpacing="1px"
//                                     numberOfStars={10}
//                                     starRatedColor={'#FFD700'}
//                                 />
//                             </div>
//                         </Form.Group>
//                         <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
//                             <Form.Label>
//                                 <h4>Review</h4>
//                             </Form.Label>
//                             <Form.Control size="xxl" as="textarea" rows={3} placeholder="Write your review here..." />
//                         </Form.Group>
//                     </Form>
//                     <div className="d-flex justify-content-end">
//                         <Button> Send </Button>
//                     </div>
//                 </Card.Body>
//             </Card>
//             <div style={{ marginTop: '40px' }}>
//                 <h4>List Review</h4>
//             </div>
//             <div>
//                 <li>Admaja</li>
//                 <br></br>
//                 <ul>Rating : 7/10</ul>
//                 <ul>Review : Lucu</ul>
//             </div>
//         </Container>
//     )
// }

// export default FormReview