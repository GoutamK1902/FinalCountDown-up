// Navbar.jsx
import React from "react";
import styled from "styled-components";

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: none;
`;

const Logo = styled.img`
  width: 50px;
  height: auto;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo src="/images/enigma.svg" alt="Left Logo" />
      <Logo src="/images/jims.svg" alt="Right Logo" />
    </NavbarContainer>
  );
};

export default Navbar;
