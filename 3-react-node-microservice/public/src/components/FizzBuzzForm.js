import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

function FizzBuzzForm({submit}) {
    const [startNo, setStartNo] = useState("")
    const [endNo, setEndNo] = useState("")
    const [validator, setValidator] = useState("")

    function handleSubmit(e) {
        e.preventDefault();

        if (handleValidation()) {
            setValidator("")
            submit(startNo, endNo)
        }
    }

    function handleValidation() {
        let formIsValid = true;

        // check start no 
        if (!isNumber(startNo)) {
            formIsValid = false;
            setValidator('Please enter valid integer as your start no.');
            return formIsValid;
        }


        // check end no 
        if (!isNumber(endNo)) {
            formIsValid = false;
            setValidator('Please enter valid integer as your end no.');
            return formIsValid;
        }

        //check start no less than end no
        if(parseInt(startNo) >= parseInt(endNo)){
            formIsValid = false;
            setValidator('Start no must be less than End no.');
            return formIsValid;
        }


        return formIsValid;
    }

    function isNumber(n) { return /^-?[\d]+(?:e-?\d+)?$/.test(n); } 


    return (
        <>
            <Form onSubmit={(e) => handleSubmit(e)}>
                <Form.Group controlId="startNo" className="form-row">
                    <Form.Label>Star No</Form.Label>
                    <Form.Control type="text" onChange={(e) => setStartNo(e.target.value)} value={startNo} />
                </Form.Group>

                <Form.Group controlId="endNo" className="form-row">
                    <Form.Label>End No</Form.Label>
                    <Form.Control type="text"  onChange={(e) => setEndNo(e.target.value)} value={endNo} />
                </Form.Group>

                <Form.Group controlId="formBasicValidator">
                    <p className="error-p" >{validator}</p>
                </Form.Group>

                <Form.Group controlId="endNo" className="form-row">
                    <Button variant="outline-secondary" className="login-btn btn-block" type="submit" size="md">
                        Submit
                    </Button>
                </Form.Group>
            </Form>
        </>
    )
}

export default FizzBuzzForm;
