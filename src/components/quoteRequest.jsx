import React, { useRef, useState } from 'react';
import './quoteRequest.css'
import emailjs from '@emailjs/browser';

function QuoteRequest() {
  const form = useRef();
  const [status, setStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    

    emailjs
      .sendForm('service_3vvsufm', 'template_qke7oft', form.current, {
        publicKey: '9YT3bAimNy4PYzfIr',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setStatus('success');
        },
        (error) => {
          console.log('FAILED...', error.text);
          setStatus('fail')
        }
      );
  };

  return (

    <div className='quoteForm'>
    {status && (
      <div className="modal-overlay">
        <div className="custom-modal">
          <h2>{status === 'success' ? 'Message Sent' : 'Submission Failed'}</h2>
          <p>
            {status === 'success'
              ? 'Your message has been successfully submitted. We will reach out shortly.'
              : 'Something went wrong. Please try again later.'}
          </p>
          <button onClick={() => setStatus(null)}>Got it, thanks!</button>
        </div>
      </div>
    )}

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
