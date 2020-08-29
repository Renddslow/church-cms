import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const getBackground = ({ appearance }) => {
  switch (appearance) {
    case 'danger':
      return '#FF5630';
    case 'primary':
      return '#5087de';
    case 'success':
      return '#83cf97';
    default:
      return 'rgba(9, 30, 66, 0.04)';
  }
};

const getColor = ({ appearance }) => {
  switch (appearance) {
    case 'danger':
    case 'primary':
      return '#fff';
    default:
      return '#586171';
  }
};

const mixin = css`
  background: ${getBackground};
  color: ${getColor};
  box-sizing: border-box;
  padding: 8px 12px;
  border-radius: 8px;
  appearance: none;
  -webkit-appearance: none;
  border: none;
  font-size: 16px;
  font-weight: 600;
  opacity: ${({ disabled }) => (disabled ? 0.7 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  display: block;
`;

const Button = styled.button`
  ${mixin};
`;

export const ButtonLink = styled(Link)`
  ${mixin};
  text-decoration: none;
`;

export default Button;
