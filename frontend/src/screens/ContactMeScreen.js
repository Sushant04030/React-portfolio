import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch , useSelector} from 'react-redux'
import { getPersonalInfoAction } from '../actions/HomeActions'
import { contactMeAction } from '../actions/ContactMeActions'

import Message from "../components/Message"
// import '../bootstrap.min.css'

function ContactMeScreen() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const personalInfoR = useSelector( state => state.personalInfoR)
    const { error, loading, personalInfo } = personalInfoR

    var [formFirstName, setFormFirstName] = useState('')
    var [formLastName, setFormLastName] = useState('')
    var [formEmail, setFormEmail] = useState('')
    var [formAddress, setFormAddress] = useState('')
    var [formsubject, setFormSubject] = useState('')
    var [formMessage, setFormMessage] = useState('')
    var [message , setMessage] = useState('')

    const FormMessageHandler = (e) => {
        e.preventDefault()
        dispatch(contactMeAction({
            'firstName':formFirstName,
            'lastName':formLastName,
            'email':formEmail,
            'address':formAddress,
            'title':formsubject,
            'message':formMessage,
        }))
        setFormFirstName('')
        setFormLastName('')
        setFormEmail('')
        setFormAddress('')
        setFormSubject('')
        setFormMessage('')
        setMessage('Message send successfully. An email has been sent to you please check your inbox. Thank you!')

        navigate('/')
        }
    useEffect(() => {

        dispatch(getPersonalInfoAction())

    }, [dispatch])


  return (
    <section class="contact" id="contact">

        <div class="max-width">
            <h2 class="title">Contact me</h2>
            <div class="contact-content">
                <div class="column left">
                    <div class="text">Get in Touch</div>
                    <p>You can contact me using any personal information or fill the contact form.</p>
                    <div class="icons">


                    {personalInfo && personalInfo.length ? personalInfo.map((personalinfo) => (

                        <><div class="row">
                                <i class="fas fa-user"></i>
                                <div class="info">
                                    <div class="head">Name</div>
                                    <div class="sub-title">{personalinfo.firstName} {personalinfo.lastName}</div>
                                </div>
                            </div>
                            <div class="row">
                                <i class="fas fa-map-marker-alt"></i>
                                <div class="info">
                                    <div class="head">Address</div>
                                    <div class="sub-title">{personalinfo.address}</div>
                                </div>
                            </div>
                            <div class="row">
                                <i class="fas fa-envelope"></i>
                                <div class="info">
                                    <div class="head">Email</div>
                                    <div class="sub-title">{personalinfo.email}</div>
                                </div>
                            </div></>


                            )) : null}


                    </div>
                </div>


                <div class="column right">
                    <div class="text">Message me</div>
                    {message && <Message variant='success'>{message}</Message>}

                

                    <Form 
                    onSubmit={FormMessageHandler}
                    >   
                    <Row class=" mt-1">
                        <Col xs={6} class="col-6 mt-1" style={{width:"50%"}}>
                            <Form.Group controlId = 'FirstName' style={{padding: "2px 5px",}}>
                                <Form.Control 
                                    className="my-2"
                                    type = 'text'
                                    placeholder = 'FIrst Name'
                                    value = {formFirstName}
                                    onChange = {(e) => setFormFirstName(e.target.value)}
                                    required
                                >
                                </Form.Control>
                            </Form.Group>
                        </Col>

                        <Col xs={6} class="col-6 mt-1" style={{width:"50%"}}>
                            <Form.Group controlId = 'lastname' style={{padding: "2px 5px",}}>
                                <Form.Control 
                                    className="my-2"
                                    type = 'text'
                                    placeholder = 'Last Name'
                                    value={formLastName} 
                                    onChange={(e) => setFormLastName(e.target.value)} 
                                >
                                </Form.Control>
                            </Form.Group>
                        </Col>

                    </Row>

                        

                        

                        <Row>
                        <Col xs={6} class="col-6" style={{width:"50%"}}>
                            <Form.Group controlId = 'email' style={{padding: "4px 5px",}}>
                                <Form.Control 
                                    className="my-2"

                                    type = 'email'
                                    placeholder = 'Email'
                                    value={formEmail} 
                                    onChange={(e) => setFormEmail(e.target.value)} 
                                    required
                                >
                                </Form.Control>
                            </Form.Group>
                        </Col>

                        <Col xs={6} class="col-6" style={{width:"50%"}}>
                            <Form.Group controlId = 'address' style={{padding: "4px 5px",}}>
                                <Form.Control 
                                    className="my-2"

                                    type = 'text'
                                    placeholder = 'Address'
                                    value={formAddress} 
                                    onChange={(e) => setFormAddress(e.target.value)} 
                                    required
                                >
                                </Form.Control>
                        </Form.Group>
                        </Col>

                    </Row>

                        <Form.Group controlId = 'subject' style={{padding: "5px",}}>
                            <Form.Control 
                                className="my-2"
                                type = 'text'
                                placeholder = 'Subject'
                                value={formsubject} 
                                onChange={(e) => setFormSubject(e.target.value)} 
                                required
                            >
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId = 'message' style={{padding: "6px 5px",}}>
                            <Form.Control 
                                className="my-3"
                                as = 'textarea'
                                placeholder = 'Message'
                                value={formMessage} 
                                onChange={(e) => setFormMessage(e.target.value)} 
                                required
                            >
                            </Form.Control>
                        </Form.Group>
                        <Button className="my-2" 
                            type="submit" 
                            variant="primary" 
                            style={{marginLeft:"5px"}}
                        >
                            Send Message
                        </Button>
                    </Form>
                </div>
            </div>
        </div>

    </section>
  )
}

export default ContactMeScreen