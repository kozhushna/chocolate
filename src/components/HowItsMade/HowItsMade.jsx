import React from 'react';
import { Title, Box, Accent } from './HowItsMade.stuled';
import HowItsMadeElements from './components/HowItsMadeElements';
import { Container, Section, SectionAhchor } from 'App.styled';

const HowItsMade = () => {
  return (
    <Section>
      <SectionAhchor id="made" />
      <Container>
        <Box>
          <Title>
            how it’s <Accent>made?</Accent>
          </Title>
          <HowItsMadeElements />
        </Box>
      </Container>
    </Section>
  );
};

export default HowItsMade;
