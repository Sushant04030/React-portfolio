import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function FormContainer( {children} ) {
  return (
    <Container>
      <Row className='justify-content-center'>
        <Col xs={12} md={6} xl={4}>
          {children}
        </Col>
      </Row>
    </Container>
  )
}
export default FormContainer