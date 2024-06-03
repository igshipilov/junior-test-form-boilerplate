import styled from 'styled-components';

import { devices } from '../../misc/devices.js';

export const ImageListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.75rem;
  margin: 0;
  padding: 0;

  @media ${devices.tablet} {
    flex-direction: column;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1rem;
  width: 48%;
  min-width: 220px;
  aspect-ratio: 5 / 4;
  border: 0.5px solid lightgray;
  border-radius: 0.5rem;
  padding: 1rem;

  .bold {
    font-weight: 700;
  }

  .gap-half {
    gap: 0.5rem;
  }

  .flex {
    display: flex;
  }

  .flex-column {
    flex-direction: column;
  }

  .icon {
    cursor: pointer;
  }

  .icon-trash {
    width: 1rem;
    height: 1rem;
  }

  @media ${devices.tablet} {
    width: 100%;
  }
`;

export const CardHead = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

export const Date = styled.div`
  display: flex;
  gap: 0.5em;
  color: gray;
  font-size: 0.85rem;
`;

export const Image = styled.div`
  width: 100%;
  height: 60%;
  background: url('${(props) => props.url}') center;
  background-size: cover;
  border-radius: 0.25rem;
`;

export const Element = styled.div`
  font-weight: bold;
`;

export const Description = styled.div`
  display: flex;
`;

export const Section = styled.section`
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const Div = styled.div`
  font-size: 0.85rem;
  line-height: 1.5;

  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;
