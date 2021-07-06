import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'

class UpdateForm extends React.Component {
    render() {
        return (
            <>
            <Modal show={this.props.show} onHide={this.props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Update Form</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form onSubmit={this.props.updateData}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>strDrink</Form.Label>
                <Form.Control type="text" name='strDrink' defalutValue={this.props.strDrink} />
                <Form.Label>strDrinkThumb</Form.Label>
                <Form.Control type="text" name='strDrinkThumb' defalutValue={this.props.strDrinkThumb} />
                <Form.Label>idDrink</Form.Label>
                <Form.Control type="text" name='idDrink' defalutValue={this.props.idDrink} />
            </Form.Group>
            <Button type='submit' variant="primary">Save</Button>
            </Form>
            </Modal.Body>
            </Modal>
            </>
        );
    }
}

export default UpdateForm;