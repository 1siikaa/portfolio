import React, { useRef } from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import emailjs from '@emailjs/browser'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_xz3ax8m',
      'template_d7mdwzj',
      form.current,
      '7hAU9wjb91v1Zkb_k'
    )
    .then((result) => {
      console.log(result.text);
      alert('Message sent successfully!');
    })
    .catch((error) => {
      console.log(error.text);
      alert('Failed to send message');
    });

    e.target.reset();
  };

  return (
    <section id='contact'>

      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>

        <div className='contact__options'>

          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />

            <h4>Email</h4>

            <h5>vanshikadubey672@gmail.com</h5>

            <a
              href="mailto:vanshikadubey672@gmail.com"
              rel="noreferrer"
              target="_blank"
            >
              Send a message
            </a>

          </article>

        </div>

        <form ref={form} onSubmit={sendEmail}>

          <input
            type='text'
            name='name'
            placeholder='Your Full Name'
            required
          />

          <input
            type='email'
            name='email'
            placeholder='Your Email'
            required
          />

          <textarea
            name='message'
            rows='7'
            placeholder='Your Message'
            required
          ></textarea>

          <button
            type='submit'
            className='btn btn-primary'
          >
            Send Message
          </button>

        </form>

      </div>

    </section>
  )
}

export default Contact