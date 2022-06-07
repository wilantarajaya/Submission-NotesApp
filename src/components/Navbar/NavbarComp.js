import React from "react";
import { Container, Navbar } from "react-bootstrap";
import SearchBar from "./SearchBar";

export default function NavbarComp() {
  return (
    <>
      <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <Navbar.Brand>Personal Notes</Navbar.Brand>
          <SearchBar />
        </Container>
      </Navbar>
    </>
  );
}
