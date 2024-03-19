// Faq.jsx

import React, { useState } from 'react';
import '../assets/css/FAQ.css';
import Footer from './Footer';
import Home from './Home';

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: 'What is the Chess Academy?',
      answer: 'The Chess Academy is a prestigious institution dedicated to teaching and promoting the game of chess. We offer a wide range of courses for players of all levels, from beginners to advanced.',
    },
    {
      question: 'How do I enroll in a course?',
      answer: 'To enroll in a course, simply navigate to our Courses page, browse through the available options, and click on the "Enroll Now" button for the course you\'re interested in. Follow the prompts to complete the enrollment process.',
    },
    {
      question: 'Can I cancel my enrollment?',
      answer: 'Yes, you can cancel your enrollment in a course at any time before the course begins. Please refer to our Cancellation Policy for more information on canceling enrollments and any associated fees.',
    },
    {
      question: 'Do you offer discounts for group enrollments?',
      answer: 'Yes, we offer discounts for group enrollments. If you\'re interested in enrolling multiple students or organizing a group class, please contact our support team for more information on group discounts and special rates.',
    },
    {
      question: 'Is financial aid available?',
      answer: 'Yes, we offer financial aid and scholarships to eligible students based on financial need and merit. To apply for financial aid, please complete the Financial Aid Application form available on our website and submit it along with the required documentation.',
    },
    {
      question: 'What types of courses do you offer?',
      answer: 'We offer a variety of courses covering different aspects of chess, including beginner courses for those new to the game, intermediate courses for players looking to improve their skills, advanced courses for experienced players, and specialized courses focusing on specific openings, strategies, and tactics.',
    },
    {
      question: 'How are your courses structured?',
      answer: 'Our courses are typically structured as a series of lessons or modules, each covering specific topics or concepts. Lessons may include instructional videos, interactive exercises, quizzes, and assignments to help reinforce learning. Students can progress through the course at their own pace and track their progress along the way.',
    },
    {
      question: 'Do I need any special equipment or software to take your courses?',
      answer: 'No, you don\'t need any special equipment or software to take our courses. All you need is a computer or mobile device with internet access and a web browser. Some courses may require additional materials such as a chess board and pieces, but these are typically provided or available for purchase separately.',
    },
    {
      question: 'Do you offer online or in-person classes?',
      answer: 'We offer both online and in-person classes to accommodate different learning preferences and schedules. Our online classes are conducted via live video conferencing platforms, allowing students to interact with instructors and fellow classmates in real-time. In-person classes are held at our physical locations and provide a more traditional classroom experience.',
    },
    {
      question: 'How can I contact customer support?',
      answer: 'If you have any questions or need assistance, you can contact our customer support team via email, phone, or live chat. Our support representatives are available to help you with any inquiries related to course enrollment, technical issues, billing, and more.',
    },
  ];
  

  return (
    <div><Home/>
    <div className="faq-container">
      <h1 className="faq-title">Frequently Asked Questions</h1>
      {faqData.map((faq, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => handleToggle(index)}>
            <h2>{faq.question}</h2>
            <span className={`arrow ${activeIndex === index ? 'active' : ''}`}>&#x25BC;</span>
          </div>
          {activeIndex === index && (
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
    <Footer/>
    </div>
  );
}

export default FAQ;
