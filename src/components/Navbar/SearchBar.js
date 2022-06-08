import React from "react";
import { Form, FormControl } from "react-bootstrap";

export default function SearchBar({ onSearch }) {
  return (
    <Form className="d-flex">
      <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" onChange={e => onSearch(e.target.value)} />
    </Form>
  );
}
