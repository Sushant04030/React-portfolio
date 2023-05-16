import React from 'react'
import { Alert } from 'react-bootstrap'
function Message({ variant, children}) {
  return (
    <Alert variant={variant} style={{padding: "10px 10px", width: '98%',left:'1%',}}>{children}</Alert>
  )
}

export default Message