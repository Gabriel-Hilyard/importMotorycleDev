import React, { useRef } from 'react';
import './quoteRequest.css'
import emailjs from '@emailjs/browser';

function QuoteRequest() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ic93d7x', 'template_qke7oft', form.current, {
        publicKey: '9YT3bAimNy4PYzfIr',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (

    <div className='quoteForm'>
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input 
      type="text" 
      name="user_name" 
      placeholder='Ex: John Doe'/>

      <label>E-mail</label>
      <input type="email" 
      name="user_email" 
      placeholder='Ex: someone@email.com'/>
     
      <label>Message</label>
      <textarea
      placeholder='Please briefly explain the issue you are having, or damage your motorcycle has here. '
       name="message" />
      <input 
      type="submit" 
      value="Send" 
      />
    </form>
    </div>
  );
}

export default QuoteRequest;
