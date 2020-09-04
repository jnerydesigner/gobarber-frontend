import React, { ButtonHTMLAttributes } from 'react';
import { Container } from './styles';

type ButtonPROPS = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC = ({ children, ...rest }) => (
  <Container type="submit" {...rest}>
    {children}
  </Container>
);

export default Button;
