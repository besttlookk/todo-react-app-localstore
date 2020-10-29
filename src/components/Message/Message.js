import React from 'react'

import {Alert } from 'react-bootstrap'
const Message = ({variant, children}) => {
    return (
        <Alert  variant={variant} className='mt-3'>
        {children}
      </Alert>
    )
}

export default Message
