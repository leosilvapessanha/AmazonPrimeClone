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

  input {
    padding: 0.5rem;
    border: none;
    background: transparent;
    &::placeholder {
      background-color: #18222d;
      color: #8197a4;
      font-size: 17px;
      font-family: 'Fira Sans', sans-serif;
    }
  }
`;
