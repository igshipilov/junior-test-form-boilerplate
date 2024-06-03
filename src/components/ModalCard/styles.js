import styled from 'styled-components';

export const Body = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  overflow: hidden;
  overflow-y: auto;
  transition: opacity 0.3s;
  z-index: 999;

  .modal-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100%;
  }

  .modal-content {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin: 20px;
    width: 100%;
    max-width: 600px;
    border-radius: 1.5rem;
    background-color: white;
    padding: 40px 20px 20px 20px;
    transform: translateY(-50px);
    transition: opacity 0.3s, transform 0.3s;
  }

  .modal-head {
    display: flex;
    justify-content: space-between;
  }

  .modal-icon-close {
    width: 30px;
    height: 30px;
    padding: 0;
    cursor: pointer;
  }

  .modal-title {
    font-size: 2rem;
    font-weight: 700;
  }

  .modal-date {
    display: flex;
    gap: 0.5rem;
    color: darkgray;
  }

  .modal-date-text {
    font-weight: 700;
  }

  .modal-image {
    display: block;
    width: 50%;
    margin: 0 auto;
  }

  .modal-description {
    margin-top: 1rem;
    border-top: 1px solid rgb(220 220 220);
    padding: 1rem;
  }
`;
