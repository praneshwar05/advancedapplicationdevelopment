// Terms.jsx

import React from 'react';
import '../assets/css/Terms.css';
import Home from './Home';
import Footer from './Footer';

function Terms() {
  return (
    <div><Home/>
    <div className="terms-container">
      <h1 className="terms-title">Terms and Conditions</h1>
      <div className="terms-content">
        <p>
          Welcome to Chess Academy! These terms and conditions outline the rules and regulations
          for the use of our academy's website.
        </p>
        <p>
          By accessing this website, we assume you accept these terms and conditions. Do not
          continue to use Chess Academy if you do not agree to take all of the terms and conditions
          stated on this page.
        </p>
        <h2>License</h2>
        <p>
          Unless otherwise stated, Chess Academy and/or its licensors own the intellectual property
          rights for all material on this website.
        </p>
        <h2>Restrictions</h2>
        <p>You must not:</p>
        <ul>
          <li>Republish material from this website</li>
          <li>Sell, rent or sub-license material from this website</li>
          <li>Reproduce, duplicate or copy material from this website</li>
          <li>Redistribute content from Chess Academy</li>
        </ul>
        <h2>Payment Terms</h2>
        <p>
          Payment for Chess Academy courses must be made in full prior to the start of the course,
          unless otherwise agreed upon.
        </p>
        <p>
          We accept payment via credit card, PayPal, or bank transfer. Any fees associated with
          payments are the responsibility of the payer.
        </p>
        <h2>Refund Policy</h2>
        <p>
          Chess Academy offers a 30-day money-back guarantee on all courses. If you are not
          satisfied with your course purchase, you may request a full refund within 30 days of
          purchase.
        </p>
        <p>
          To request a refund, please contact our support team with your order details. Refunds will
          be processed within 5 business days.
        </p>
        </div>
    </div><Footer/>
    </div>
  );
}

export default Terms;
