import React from 'react';
// import { Link } from 'react-router-dom';
import Logo from '../../assets/primeLogo.svg';

import * as S from './styles';

const Header: React.FC = () => {
  return (
    <>
      <S.Container>
        <img src={Logo} alt="Amazon Prime Video" />
        <S.Nav>
          {/* <Link to="/"> */}
          <li>inicio</li>
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
      </S.Container>
    </>
  );
};

export default Header;
