import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

import { devices } from './misc/devices.js';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box
  };
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 70vmin;
  max-width: 768px;
  min-width: 240px;
  margin: 0 auto;

  font-size: 1rem;

  font-family: 'Roboto Flex', sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-variation-settings: 'slnt' 0, 'wdth' 100, 'GRAD' 0, 'XOPQ' 96, 'XTRA' 468,
    'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712;

  @media ${devices.tablet} {
    max-width: 320px;
  }
`;
