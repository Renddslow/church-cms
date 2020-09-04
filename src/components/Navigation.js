import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavigationPanel = styled.nav`
  width: 17%;
  position: sticky;
  height: 100vh;
  overflow: hidden;
  top: 0;
  box-sizing: border-box;
  background: #0b1e50;
  min-width: 240px;
`;

const NavHeader = styled.div`
  padding: 12px;
  box-sizing: border-box;
  display: grid;
  grid-gap: 12px;
  grid-template-columns: minmax(0, max-content) minmax(0, 1fr);
  background: #153873;
  color: #d7dde6;
  align-items: center;
  font-size: 18px;
  font-weight: 800;
`;

const LogoBlock = styled.div`
  width: 45px;
  height: 45px;
  background: #cf6259;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-size: 20px;
  font-weight: 600;
  color: #e9a9a5;
`;

const Menu = styled.ul`
  width: 100%;
  padding: 12px;
  box-sizing: border-box;
  list-style: none;
  margin: 0;
  overflow-y: auto;
  height: 100%;
  padding-bottom: 160px;
`;

const MenuItem = styled.li`
  width: 100%;
  box-sizing: border-box;
  margin: 12px 0;
`;

const MenuLink = styled(NavLink)`
  width: 100%;
  padding: 12px 20px;
  box-sizing: border-box;
  color: #77839f;
  font-weight: 600;
  text-decoration: none;
  border-radius: 8px;
  display: grid;
  grid-template-columns: minmax(0, max-content) minmax(0, 1fr);
  grid-gap: 12px;
  align-items: center;

  &.active {
    background: #153873;
    color: #cfd6e2;
  }
`;

const Settings = styled.div`
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 12px;
  box-sizing: border-box;
  background: #0b1e50;
`;

const Icon = styled.span`
  font-size: 24px;
  width: 30px;
`;

const Rule = styled.hr`
  width: 100%;
  height: 1px;
  display: block;
  background: #77839f;
  border: 0;
  -webkit-appearance: none;
`;

export default ({ children = [], permissions = [] }) => {
  return (
    <NavigationPanel>
      <NavHeader>
        <LogoBlock>FC</LogoBlock>
        Flatland Church
      </NavHeader>
      <Menu>
        {children
          .filter(({ rule }) => !rule || permissions.includes(rule))
          .map(({ to, label, icon }) => (
            <MenuItem key={to}>
              <MenuLink to={to} activeClassName="active">
                <Icon className="material-icons">{icon}</Icon>
                <span>{label}</span>
              </MenuLink>
            </MenuItem>
          ))}
      </Menu>
      <Settings>
        <Rule />
        <MenuLink to="/settings" activeClassName="active">
          <Icon className="material-icons">settings</Icon>
          <span>Settings</span>
        </MenuLink>
      </Settings>
    </NavigationPanel>
  );
};
