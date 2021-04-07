import React, { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

import * as S from './styles';

interface IinputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<IinputProps> = ({ icon: Icon, ...rest }) => (
  <S.Container>
    {Icon && <Icon size={17} />}
    <input {...rest} />
  </S.Container>
);
export default Input;
