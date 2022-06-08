import React from "react";
import { Container, Navbar } from "react-bootstrap";
import SearchBar from "./SearchBar";

export default function NavbarComp({ onSearch }) {
  return (
    <>
      <Navbar expand="lg" className="navbar sticky-nav">
        <Container>
          <Navbar.Brand>
            <h3>Personal Notes</h3>
          </Navbar.Brand>
          <SearchBar onSearch={onSearch} />
        </Container>
      </Navbar>
    </>
  );
}
