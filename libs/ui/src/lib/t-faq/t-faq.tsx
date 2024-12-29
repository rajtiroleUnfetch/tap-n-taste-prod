import React, { useState } from 'react';
import styled from 'styled-components';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const StyledFaq = styled.div`
  font-family: Arial, sans-serif;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    font-weight: bold;
    color: #8e8e8e;
    position: relative;
    display: inline-block;
  }

  .faq-line-container {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }

  .faq-line {
    flex-grow: 1;
    height: 2px;
    background-color: #8e8e8e;
    margin-left: 10px;
  }

  .faq-item {
    margin-bottom: 1rem;
    padding: 10px 0;
    border-bottom: 1px solid #ccc;

    h3 {
      font-size: 1rem;
      margin: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      color: #000;
    }

    p {
      font-size: 0.9rem;
      color: #666;
      margin: 5px 0 0;
      display: none;
    }

    &.active p {
      display: block;
    }
  }
`;

export interface FAQ {
  question: string;
  answer: string;
}

interface TFaqProps {
  faqs?: FAQ[];
}

export function TFaq({
  faqs = [
    {
      question: 'Do you offer catering services?',
      answer:
        "Currently, we don't offer catering services, but we're happy to accommodate large orders for pickup or delivery. Please contact us for more information.",
    },
    {
      question: 'Are there vegan options?',
      answer:
        'Yes, we offer a variety of vegan options. Check our menu for details.',
    },
    {
      question: 'How long does delivery take?',
      answer:
        'Delivery usually takes 30-45 minutes depending on your location.',
    },
  ],
}: TFaqProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <StyledFaq>
      <div className="faq-line-container">
        <h2>FAQ's</h2>
        <div className="faq-line"></div>
      </div>
      {faqs.map((faq, index) => (
        <div
          className={`faq-item ${activeIndex === index ? 'active' : ''}`}
          key={index}
        >
          <h3 onClick={() => toggleFaq(index)}>
            {faq.question}
            <span>
              {activeIndex === index ? (
                <KeyboardArrowUpIcon />
              ) : (
                <KeyboardArrowDownIcon />
              )}
            </span>
          </h3>
          <p>{faq.answer}</p>
        </div>
      ))}
    </StyledFaq>
  );
}

export default TFaq;
