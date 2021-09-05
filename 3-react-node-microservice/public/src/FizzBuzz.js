import { Container, Row, Col } from 'react-bootstrap'
import FizzBuzzForm from './components/FizzBuzzForm';
import axios from 'axios'
import { useState } from 'react';

function FizzBuzz() {
    const [result, setResult] = useState("")

    const submit = (startNo, endNo) => {
        axios.post("http://127.0.0.1:8000", { startNo, endNo })
            .then(response => {
                if (response.status === 200) {
                    setResult(response.data);
                }else{
                    console.log(response);
                }
            })
            .catch(error => {
                console.log(error);
            })
    }


    return (
        <Container className="main-container">
            <Row>
                <Col sm={12} md={12}>
                    <h2 className="text-center">FizzBuzz</h2>
                </Col>
            </Row>
            <br />
            <Row>
                <Col xs={12} sm={4} md={4} className="fizzbuzz-form">
                    <FizzBuzzForm submit={submit} />
                </Col>
                <Col xs={12} sm={8} md={8} className="result-section">
                    <h5>{result}</h5>
                </Col>
            </Row>
        </Container>
    );

}

export default FizzBuzz;