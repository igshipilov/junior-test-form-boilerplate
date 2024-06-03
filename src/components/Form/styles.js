import styled, { css } from 'styled-components';

import { devices } from '../../misc/devices.js';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  .flex {
    display: flex;
  }

  .margin-0 {
    margin: 0;
  }

  .margin-top {
    margin-top: 1rem;
  }

  .width-100 {
    width: 100%;
  }
`;

export const Fields = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  color: #0f6bde;
  width: 48%;

  @media ${devices.tablet} {
    width: 100%;
  }
`;

export const Label = styled.label`
  color: #0f6bde;
  font-weight: bold;
`;

export const ErrorMessage = styled.section`
  color: #f95150;
  font-size: 0.85rem;
  margin: 0px;
`;

const ErrorOutline = css`
  border: 0.75px solid #f95150;
`;

export const Input = styled.input`
  padding: 12px 20px;
  margin: 8px 0;
  border: 0.75px solid lightgray;
  border-radius: 0.5rem;
  box-sizing: border-box;
  text-overflow: ellipsis;
  font-family: inherit;

  ${({ hasError }) => hasError && ErrorOutline}
`;

export const TextArea = styled.textarea`
  padding: 12px 20px;
  margin: 8px 0;
  border: 0.75px solid;
  border-radius: 0.5rem;
  box-sizing: border-box;
  text-overflow: ellipsis;
  font-family: inherit;

  ${({ hasError }) => hasError && ErrorOutline}
`;

export const Button = styled.button`
  margin-top: 1rem;
  padding: 0.85em 3em;
  background-color: #0f6bde;
  border: 0;
  border-radius: 0.5rem;
  color: white;
  font-weight: bold;
  cursor: pointer;
  font-family: inherit;
  max-width: 240px;

  @media ${devices.tablet} {
    width: 100%;
    max-width: none;
  }
`;

export const ContainerButton = styled.div`
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 6rem;

  @media ${devices.tablet} {
    gap: 1rem;
    flex-direction: column;
  }
`;

export const P = styled.p`
  margin: 0px;
  height: 1em;
`;

export const Break = styled.div`
  height: 1px;
  margin: 0.75rem 0;
  background-color: lightgray;
  width: 100%;
`;
