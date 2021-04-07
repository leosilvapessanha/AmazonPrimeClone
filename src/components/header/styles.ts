import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background: #18222d;
  height: 5rem;
  padding: 0 2rem 0 0;
  img {
    align-items: center;
    width: 7rem;
    margin: 0 2rem 0 3rem;
  }
`;

export const Nav = styled.ul`
  /* color: white; */
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #dcdfe2;
  transition: 0.2s;
  text-decoration: none;
  font-family: 'Fira Sans', sans-serif;
  list-style-type: none;
  li {
    margin: 0 1rem 0 0;
    &:hover {
      color: ${shade(0.2, '#f4f4f4')};
    }
  }
`;

export const SearchBar = styled.div`
  display: flex;
  flex-direction: row;
  background: transparent;
  margin-left: auto;
  align-items: center;
  color: #8197a4;
  input {
    border: 1px solid;
    border-color: #4d5c67;
    background-color: transparent;
    height: 2rem;
  }
  img {
    width: 2rem;
    height: 2rem;
  }
  padding: 0;
  button {
    color: #f2f4f6b3;
    background-color: transparent;
    border: 0;
    &:hover {
      color: ${shade(0.2, '#fff')};
    }
  }
`;
