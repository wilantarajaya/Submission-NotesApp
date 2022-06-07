import React from "react";
import { Button } from "react-bootstrap";

export default function DeleteNotes({ id, onDelete }) {
  return (
    <>
      <Button variant="danger" onClick={() => onDelete(id)}>
        Hapus
      </Button>
    </>
  );
}
