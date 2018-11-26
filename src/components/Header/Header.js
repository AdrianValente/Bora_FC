import React from "react";
import { Navbar, NavItem, Row} from 'react-materialize';

const Header = () => (
  <Row>  
    <Navbar className="grey darken-2">
      <NavItem href='/'>Home</NavItem>
      <NavItem href='/login'>Login</NavItem>
      <NavItem href='/usuario'>Usuário</NavItem>
      <NavItem href='/grupo'>Grupo</NavItem>
    </Navbar>
  </Row>
);

export default Header;