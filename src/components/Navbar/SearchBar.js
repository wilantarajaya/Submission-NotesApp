import React from "react";
import { Form, FormControl } from "react-bootstrap";

export default function SearchBar() {
  return (
    <Form className="d-flex">
      <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
    </Form>
  );
}
