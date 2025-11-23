"use client";

import { useRef, useState } from 'react';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isFormValid, setIsFormValid] = useState(false);

  const handleDiscard = () => {
    if (formRef.current) {
      formRef.current.reset();
      setIsFormValid(false);
    }
  };

  const validateForm = () => {
    if (formRef.current) {
      const formData = new FormData(formRef.current);
      const name = formData.get('name')?.toString().trim();
      const email = formData.get('email')?.toString().trim();
      const message = formData.get('message')?.toString().trim();
      
      setIsFormValid(!!(name && email && message));
    }
  };


  return (
    <section className="contact">
        <div className="section-title">
          <h1>Open new conection</h1>
        </div>
        <div className="main-container-wrapper">
          <div className="contact-content">
            <div className="contact-form">
              <form ref={formRef} action="https://formsubmit.co/margaritta865@gmail.com" method="POST" target='_blanck' onChange={validateForm}>
                <div className="field">
                  <label htmlFor="name">How should I call you?</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div className="field">
                  <label htmlFor="email">Sending from</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your.name@gmail.com"
                    required
                  />
                </div>

                <div className="field">
                  <label htmlFor="message">Transmitted Data</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Hi, I write to you about..."
                    required
                  ></textarea>
                </div>

                <div className="buttons">
                  <button 
                    type="submit" 
                    className="btn primary" 
                    disabled={!isFormValid}
                  >
                    Send Message [Enter]
                  </button>
                  <button type="button" className="btn secondary" onClick={handleDiscard}>
                    Discard [Esc]
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
    </section>
    );
}
