import React from "react";
import { Button } from "react-bootstrap";

export default function ArsipNote({ id, onArchive }) {
  return (
    <>
      <Button className="w-100" variant="warning" onClick={() => onArchive(id)}>
        Arsip
      </Button>
    </>
  );
}
