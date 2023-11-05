import React, { useState } from 'react';
import './questions.css';

function Questions() {
  const initialQuestions = [
    {
      question: 'What is YORE Care?',
      answer:
        'YORE Care is a mobile application that allows users to create their ABHA ID, which is a secure and NHA (National Health Authority) approved identification for accessing healthcare services. YORE Care also provides various other features to enhance your healthcare experience.',
      isExpanded: false,
      height: '100px',
    },
    {
      question: 'Is it safe to create an ABHA ID through the YORE Care app?',
      answer:
        'Yes, it is completely safe to create an ABHA ID using the YORE Care app. We prioritize the security and privacy of our users. All data stored in the app is kept confidential and is not shared with anyone.',
      isExpanded: false,
      height: '100px',
    },
    {
      question: 'Can local medical shops partner with YORE Care?',
      answer:
        'Yes, YORE Care welcomes partnerships with local medical shops. By partnering with us, medical shops can provide convenient online medicine ordering services to their customers through our app.',
      isExpanded: false,
      height: '100px',
    },
  ];

  const [questions, setQuestions] = useState(initialQuestions);

  const toggleExpansion = (index) => {
    const newQuestions = questions.map((question, i) => {
      if (i === index) {
        return {
          ...question,
          isExpanded: !question.isExpanded,
          height: question.isExpanded ? '100px' : 'auto',
        };
      }
      return {
        ...question,
        isExpanded: false,
        height: '100px',
      };
    });
    setQuestions(newQuestions);
  };

  return (
    <div>
      <div className='qu'>
        <h1>Frequently Asked Questions</h1>
      </div>

      {questions.map((question, index) => (
        <div
          key={index}
          className={`question-answer-container ${question.isExpanded ? 'expanded' : ''}`}
          style={{ height: question.height }}
          onClick={() => toggleExpansion(index)}
        >
          <div className='question'>
            <div className='questio1'>
              <h5 style={{ fontStyle: 'Baloo Bhai 2' }}>{question.question}</h5>
            </div>
            {question.isExpanded && (
              <p>
                {question.answer}
              </p>
            )}

             
          </div>
        </div>
      ))}

       <h5 className='blue side'>View More </h5>
    </div>
  );
}

export default Questions;

