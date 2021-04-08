import React from 'react';
// import { Link } from 'react-router-dom';
import { CgSearch } from 'react-icons/cg';
import { FaCaretDown } from 'react-icons/fa';
import Logo from '../../assets/primeLogo.svg';

import Avatar from '../../assets/avatar.png';

import * as S from './styles';
import Input from '../input';

const Header: React.FC = () => {
  return (
    <>
      <S.Container>
        <img src={Logo} alt="Amazon Prime Video" />
        <button type="button">explorar</button>
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
          <Input
            type="text"
            name="search"
            icon={CgSearch}
            placeholder="Busca"
          />
          <img src={Avatar} alt="User" />
          <button type="button">
            Leona...
            <FaCaretDown height={17} margin-left={8} color="#B1B5BA" />
          </button>
        </S.SearchBar>
      </S.Container>
    </>
  );
};

export default Header;
