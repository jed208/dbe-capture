import React, {useState} from 'react';
import {Section} from '../styles';
import styled from 'styled-components';
import Toggle from './Toggle';

const FaqSection = () => {
  const [faqToggle, setFaqToggle] = useState(false);

  return (
    <Faq>
      <h2>Any Questions? <span>FAQ</span></h2>
      <Toggle>
        <div className="question">
          <h4>How do I start?</h4>
          <div className="answer">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="faq-line"></div>
        </div>
      </Toggle>
      <div className="question">
        <h4>What services do you offer?</h4>
        <div className="answer">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>Different payment methods?</h4>
        <div className="answer">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>Daily schedule</h4>
        <div className="answer">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="faq-line"></div>
      </div>
    </Faq>
  )
}

const Faq = styled(Section)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #ccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;