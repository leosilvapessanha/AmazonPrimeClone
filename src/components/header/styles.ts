import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background: #18222d;
  height: 5rem;
  padding: 0 2rem 0 0;
  min-width: 500px;

  img {
    align-items: center;
    width: 7rem;
    margin: 0 2rem 0 3rem;
  }

  button {
    display: none;

    @media (max-width: 750px) {
      display: flex;
      flex-direction: row;
      align-items: center;
      color: #dcdfe2;
      border: 0;
      background: transparent;
      transition: 0.2s;
      text-decoration: none;
      font-family: 'Fira Sans', sans-serif;
      list-style-type: none;
    }
  }
`;

export const Nav = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #dcdfe2;
  transition: 0.2s;
  text-decoration: none;
  font-family: 'Fira Sans', sans-serif;
  list-style-type: none;

  @media (max-width: 750px) {
    display: none;
  }
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
  font-size: 15px;
  font-family: 'Fira Sans', sans-serif;
  padding-right: 3rem;

  img {
    margin: 0 0.6rem 0 1rem;
    width: 2rem;
    height: 2rem;
  }

  button {
    background: transparent;
    border: 0;
    font-family: 'Fira Sans', sans-serif;
    font-size: 0.9375rem;
    color: #b1b5ba;
  }
`;
