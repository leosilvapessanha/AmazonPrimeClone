import React from 'react';
// import { Link } from 'react-router-dom';
import Logo from '../../assets/primeLogo.svg';

import Avatar from '../../assets/avatar.png';

import * as S from './styles';

const Header: React.FC = () => {
  return (
    <>
      <S.Container>
        <img src={Logo} alt="Amazon Prime Video" />

        <S.Nav>
          {/* <Link to="/"> */}
          <li>Início</li>
          {/* </Link> */}
          {/* <Link to="/"> */}
          <li>Séries</li>
          {/* </Link> */}
          {/* <Link to="/"> */}
          <li>Filmes</li>
          {/* </Link> */}
          {/* <Link to="/"> */}
          <li>Infantil</li>
          {/* </Link> */}
          {/* <Link to="/"> */}
          <li>Canais</li>
          {/* </Link> */}
        </S.Nav>
        <S.SearchBar>
          <input type="text" placeholder="Busca" />
          <img src={Avatar} alt="Amazon Prime Video" />
          <button type="button">Name</button>
        </S.SearchBar>
      </S.Container>
    </>
  );
};

export default Header;
