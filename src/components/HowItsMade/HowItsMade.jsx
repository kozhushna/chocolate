import React from 'react';
import { Box } from './HowItsMade.stuled';
import HowItsMadeElements from './components/HowItsMadeElements';
import { Accent, Container, Section, Title } from 'App.styled';

const HowItsMade = () => {
  return (
    <Section id="made">
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
