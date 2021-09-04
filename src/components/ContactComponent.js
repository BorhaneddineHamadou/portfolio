import React, {useState} from 'react';
import { Control, Errors, LocalForm } from 'react-redux-form';
import { Col, Label, Row, Button, ModalHeader, ModalBody, Modal } from 'reactstrap';
import emailjs from 'emailjs-com';


const required = (val) => val && val.length;
const minLength = (len) => val => !(val) || val.length >= len;
const validPhone = (val) => /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g.test(val);
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);



const Contact = () => {

    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
    const [isFailedModalOpen, setIsFailedModalOpen] = useState(false);
    
    const toggleSuccessModal = () => {
        setIsSuccessModalOpen(!isSuccessModalOpen);
    }

    const toggleFailedModal = () => {
        setIsFailedModalOpen(!isFailedModalOpen);
    }

    function sendEmail(values, e){
        e.preventDefault();
        emailjs.sendForm('service_aea8f1d', 'template_ttl1jci', e.target, 'user_kIPDG5G3IThigWWS3inmX')
        .then((result) => {
            console.log('Email Sent : ' + result.text);
            toggleSuccessModal();
        }, (error) => {
            console.log('Error : ' + error.text);
            toggleFailedModal();
        });
        e.target.reset();
    }

    return(
        <div className="contact-wrapper" id="contact">
            <div className="container">
                <h1 className="mb-2">Contact Me</h1>
                <p className="text-light text-center fs-5 mb-4">Contact Me Directly Using This Form</p>
                <LocalForm onSubmit={sendEmail}>
                    <Row>
                        <Col md={6}>
                            <Row className={"mb-3 form-group"}>
                                <Label htmlFor="fullname" className={"text-light mb-2"}>Full Name :</Label>
                                <Col>
                                    <Control.text model='.fullname' id='fullname' name='fullname' placeholder='Full Name' 
                                    className='form-control'
                                    validators={{
                                        required,
                                        minLength: minLength(5)
                                    }}
                                    />
                                    <Errors className={"text-danger"} model=".fullname" show="touched" 
                                    messages={{
                                      required: ' | Required',
                                      minLength: ' | FullName Length Must Be At Least 5 Characters'
                                    }}/>
                                </Col>
                            </Row>
                            <Row className={"mb-3 form-group"}>
                                <Label htmlFor="numphone" className={"text-light mb-2"}>Phone Number :</Label>
                                <Col>
                                    <Control.text model='.numphone' id='numphone' name='numphone' placeholder='Phone Number' 
                                    className='form-control' 
                                    validators={{
                                        required,
                                        validPhone
                                    }}/>
                                    <Errors className={"text-danger"} model=".numphone" show="touched" 
                                    messages={{
                                      required: ' | Required',
                                      validPhone: ' | Phone Is Not Valid'
                                    }}/>
                                </Col>
                            </Row>
                            <Row className={"mb-3 form-group"}>
                                <Label htmlFor="email" className={"text-light mb-2"}>Email :</Label>
                                <Col>
                                    <Control.text model='.email' id='email' name='email' placeholder='Email' 
                                    className='form-control'
                                    validators={{
                                        required,
                                        validEmail
                                    }} />
                                    <Errors className={"text-danger"} model=".email" show="touched" 
                                    messages={{
                                      required: ' | Required',
                                      validEmail: ' | Email Is Not Valid'
                                    }}/>
                                </Col>
                            </Row>
                            <Row className={"mb-3 form-group"}>
                                <Label htmlFor="subject" className={"text-light mb-2"}>Subject :</Label>
                                <Col>
                                    <Control.text model='.subject' id='subject' name='subject' placeholder='Subject' 
                                    className='form-control'
                                    validators={{
                                        required,
                                        minLength: minLength(5)
                                    }} />
                                    <Errors className={"text-danger"} model=".subject" show="touched" 
                                    messages={{
                                      required: ' | Required',
                                      minLength: ' | Subject Length Must Be At Least 5 Characters'
                                    }}/>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={{size: 5, offset:1}}>
                            <Row className={"form-group mb-4"}>
                                <Label htmlFor="message" className="text-light mb-2">Message :</Label>
                                <Col>
                                    <Control.textarea className="form-control" model='.message' id='message' name="message"
                                    placeholder="Please Enter Your Message" rows={6}
                                    validators={{
                                        required,
                                        minLength: minLength(10)
                                    }} />
                                    <Errors className={"text-danger"} model=".message" show="touched" 
                                    messages={{
                                      required: ' | Required',
                                      minLength: ' | Message Length Must Be At Least 10 Characters'
                                    }}/> 
                                </Col> 
                            </Row>
                            <Row className="form-group">
                                <Col xs={12}>
                                   <Button className={"col-12"} type="submit" color="danger" outline>SEND</Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </LocalForm>
                <Modal isOpen={isSuccessModalOpen} toggle={toggleSuccessModal}>
                    <ModalHeader toggle={toggleSuccessModal}>Thank You !</ModalHeader>
                    <ModalBody>
                        <p>Your form submission has been received.</p>
                    </ModalBody>
                </Modal>

                <Modal isOpen={isFailedModalOpen} toggle={toggleFailedModal}>
                    <ModalHeader toggle={toggleFailedModal}>Sorry !</ModalHeader>
                    <ModalBody>
                        <p>Your form submission could not be sent, please try again</p>
                    </ModalBody>
                </Modal>
            </div>
        </div>
    );
}

export default Contact;