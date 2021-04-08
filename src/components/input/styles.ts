import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid;
  border-color: #4d5c67;
  background-color: #18222d;
  height: 2.5rem;
  width: 15.625rem;
  padding: 0.5rem;
  transition: 300ms;

  input {
    padding: 0.5rem;
    border: none;
    border-radius: 1rem;
    background: transparent;
    color: #fff;
    font-size: 15px;
    font-family: 'Fira Sans', sans-serif;
  }

  &::placeholder {
    background-color: transparent;
    color: #fff;
    font-size: 17px;
    font-family: 'Fira Sans', sans-serif;
  }

  svg {
    width: 2rem;
    height: 2rem;
  }

  @media (max-width: 1040px) {
    display: none;
  }
`;

export const Alternative = styled.div`
  display: none;
  align-items: center;
  border: 0px solid;
  border-color: #4d5c67;
  background-color: #18222d;
  height: 2.5rem;
  padding: 0.5rem;

  svg {
    width: 2rem;
    height: 2rem;
  }

  @media (max-width: 1040px) {
    display: flex;
  }
`;
