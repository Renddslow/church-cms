import React from 'react';
import styled from 'styled-components';
import { withUser } from '../utils/UserContext';

const HeaderStyled = styled.header`
  height: 70px;
  border-bottom: 1px solid #e3e5e9;
  width: 100%;
  background: #fff;
  display: grid;
  position: sticky;
  top: 0;
`;

const Nav = styled.nav`
  margin-left: auto;
  width: max-content;
  grid-template-columns: repeat(2, minmax(0, max-content));
  align-items: center;
  height: 100%;
  display: grid;
  padding-right: 24px;
  grid-gap: 12px;
`;

const IconButton = styled.button`
  -webkit-appearance: none;
  appearance: none;
  border: 0;
  background: transparent;
  color: #a9b3c3;
  cursor: pointer;

  > * {
    font-size: 28px;
  }
`;

const Avatar = styled.div`
  width: 45px;
  height: 45px;
  overflow: hidden;
  border-radius: 50%;
  position: relative;
  background: #564787;
  color: #e8e7ee;
  font-weight: 800;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = ({ user }) => {
  const [first, ...rest] = user.name.split(' ');
  return (
    <HeaderStyled>
      <Nav>
        <IconButton>
          <span className="material-icons">notifications_none</span>
        </IconButton>
        <Avatar>
          {first[0]}
          {rest.slice(-1).pop()[0]}
        </Avatar>
      </Nav>
    </HeaderStyled>
  );
};

export default withUser(Header);
