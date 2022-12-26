import React, {useState} from 'react'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import './_form.scss';

export const EnquiryForm=() =>{
 return (
   <>
     <div className="form-section">
       <Form>
         <Form.Group className="mb-3" controlId="formBasicEmail">
           <Form.Control type="text" placeholder="* Name" />
           <br />
           <Form.Control type="email" placeholder="* Email" />
         </Form.Group>
         <FloatingLabel
           controlId="floatingTextarea"
           label="Comments"
           className="mb-3"
         >
           <Form.Control as="textarea" placeholder="Leave a comment here" />
         </FloatingLabel>
         <FloatingLabel controlId="floatingTextarea2" label="Comments">
           <Form.Control
             as="textarea"
             placeholder="Leave a comment here"
             style={{ height: "100px" }}
           />
         </FloatingLabel>

         <Button variant="primary" type="submit">
           Submit
         </Button>
       </Form>
     </div>
   </>
 );
  
}