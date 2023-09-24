import React from 'react';
import { Title, Box, Accent } from './HowItsMade.stuled';
import  HowItsMadeElements  from './components/HowItsMadeElements';

const HowItsMade = () => {
  return (
    <Box>
      <Title>how it’s <Accent>made?</Accent></Title>
      <HowItsMadeElements/>
    </Box>
  );
};



export default HowItsMade;