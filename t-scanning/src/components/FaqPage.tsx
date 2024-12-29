import React, { useState } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: 'What is MUI?',
    answer:
      'MUI is a popular React component library that implements Material Design.',
  },
  {
    question: 'How do I install MUI?',
    answer:
      "You can install MUI by running 'npm install @mui/material @mui/icons-material'.",
  },
  {
    question: 'What is Tailwind CSS?',
    answer:
      'Tailwind CSS is a utility-first CSS framework for rapidly building custom designs.',
  },
];

const FaqPage: React.FC = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <Typography
        variant="h4"
        className="text-center mb-6 font-semibold text-gray-800"
      >
        FAQ
      </Typography>
      {faqs.map((faq, index) => (
        <Accordion
          key={index}
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
          className="mb-4 shadow-md"
        >
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls={`panel${index}d-content`}
            id={`panel${index}d-header`}
          >
            <Typography className="text-lg font-semibold text-gray-700">
              {faq.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="text-gray-600">{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default FaqPage;
