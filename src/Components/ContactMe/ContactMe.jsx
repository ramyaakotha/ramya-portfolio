import React from 'react';
import './ContactMe.css';
import ContactInfoCard from './ContactInfoCard/ContactInfoCard';
import ContactForm from './ContactForm/ContactForm';

const ContactMe = () => {
  return (
   <section className='contact-container' id='Contact'>
    <h5>Contact Me</h5>
    <div className='contact-content'>
        <div style={{flex:1}}>
            <ContactInfoCard 
            iconUrl='../assets/email.png'
            text= 'ramyakotha2001@gmail.com'
            click={() => window.location = 'mailto:ramyakotha2001@gmail.com'}
            />
             <ContactInfoCard 
            iconUrl='../assets/github.png'
            text= 'https://github.com/ramyaakotha'
            click={()=>{window.open('https://github.com/ramyaakotha')}}
            />
        </div>
        <div style={{flex:1}}>
            <ContactForm />
        </div>
    </div>
   </section>
  )
}

export default ContactMe