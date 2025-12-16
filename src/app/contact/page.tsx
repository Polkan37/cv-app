"use client";

import { useCallback, useEffect, useRef, useState } from 'react';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isFormValid, setIsFormValid] = useState(false);
  const nextUrl = typeof window !== 'undefined' ? `${window.location.origin}/sent` : '';

  const handleDiscard = useCallback(() => {
    if (formRef.current) {
      formRef.current.reset();
      setIsFormValid(false);
    }
  }, []);

  const validateForm = useCallback(() => {
    if (formRef.current) {
      const formData = new FormData(formRef.current);
      const name = formData.get('name')?.toString().trim();
      const email = formData.get('email')?.toString().trim();
      const message = formData.get('message')?.toString().trim();
      
      const isValid = !!(name && email && message);
      setIsFormValid(isValid);
      return isValid;
    }
    return false;
  }, []);

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    if (formRef.current) {
      formRef.current.submit();
    }
  }, [validateForm]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleDiscard();
      }
      if (event.key === 'Enter') {
        if (formRef.current && isFormValid) {
          formRef.current.requestSubmit();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleDiscard, isFormValid]);


  return (
    <section className="contact">
        <div className="section-title">
          <h1>Open new conection</h1>
        </div>
        <div className="main-container-wrapper">
          <div className="contact-content">
            <div className="contact-form">
              <form 
                ref={formRef} 
                action="https://formsubmit.co/margaritta865@gmail.com" 
                method="POST" 
                onChange={validateForm}
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="_next" value={nextUrl} />
                <input type="hidden" name="_captcha" value="false" />
                
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
