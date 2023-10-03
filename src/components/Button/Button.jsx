import { Btn } from './Button.styled';

export const Button = ({ children, onClick }) => {
  return <Btn onClick={onClick}>{children}</Btn>;
};
