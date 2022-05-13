import React, { useState } from 'react';
import tw, { styled } from 'twin.macro';
import { motion } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/outline';
import Section from './Section';
import { faqs } from '@/config/faqs';

const PrimaryBackgroundContainer = tw.div`relative text-gray-900`;
const Subheading = tw.h3`font-bold text-purple-500 mb-4 text-center`;
const Heading = tw.h2`font-bold text-4xl text-center w-full`;
const Description = tw.p`mt-4 text-lg font-medium leading-relaxed text-gray-800 max-w-3xl text-center mx-auto`;

const HeaderContent = tw.div``;

const FaqsContainer = tw.div`mt-10 w-full flex-1 lg:flex justify-center items-start max-w-7xl mx-auto`;
const FaqsColumn = tw.div`w-full lg:mr-12 last:mr-0`;
const Faqs = tw.div`select-none cursor-pointer border-b-2 border-gray-200 hover:border-gray-400 transition-colors duration-300 py-6`;
const Question = tw.div`flex justify-between items-center`;
const QuestionText = tw.h3`text-base sm:text-lg font-semibold tracking-wide`;
const QuestionToggleIcon = styled(motion.span)`
  ${tw`ml-2 transition duration-300`}
  svg {
    ${tw`w-6 h-6`}
  }
`;
const Answer = tw(motion.p)`hidden text-base font-normal mt-4 text-gray-800`;

export default function Faq({
  subheading = '',
  title = 'Vanliga frågor & svar',
  description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
}) {
  const faqCol1 = [];
  const faqCol2 = [];
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);

  const toggleQuestion = questionIndex => {
    if (activeQuestionIndex === questionIndex) setActiveQuestionIndex(null);
    else setActiveQuestionIndex(questionIndex);
  };

  faqs.map((faq, index) => {
    const renderedFaq = (
      <Faqs key={index} onClick={() => toggleQuestion(index)}>
        <Question>
          <QuestionText>{faq.question}</QuestionText>
          <QuestionToggleIcon
            variants={{
              collapsed: { rotate: 0 },
              open: { rotate: -180 },
            }}
            initial="collapsed"
            animate={activeQuestionIndex === index ? 'open' : 'collapsed'}
            transition={{ duration: 0.02, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <ChevronDownIcon />
          </QuestionToggleIcon>
        </Question>
        <Answer
          variants={{
            open: {
              opacity: 1,
              height: 'auto',
              marginTop: '16px',
              display: 'block',
            },
            collapsed: {
              opacity: 0,
              height: 0,
              marginTop: '0px',
              display: 'none',
            },
          }}
          initial="collapsed"
          animate={activeQuestionIndex === index ? 'open' : 'collapsed'}
          transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
        >
          {faq.answer}
        </Answer>
      </Faqs>
    );

    if (index % 2 === 0) faqCol1.push(renderedFaq);
    else faqCol2.push(renderedFaq);

    return null;
  });
  return (
    <PrimaryBackgroundContainer>
      <Section>
        <HeaderContent>
          {subheading && <Subheading>{subheading}</Subheading>}
          <Heading>{title}</Heading>
          <Description>{description}</Description>
        </HeaderContent>
        <FaqsContainer>
          <FaqsColumn>{faqCol1}</FaqsColumn>
          <FaqsColumn>{faqCol2}</FaqsColumn>
        </FaqsContainer>
      </Section>
    </PrimaryBackgroundContainer>
  );
}
