import React from "react";
import { Button } from "react-bootstrap";

export default function DeleteNotes({ id, onDelete }) {
  return (
    <>
      <Button className="w-100" variant="danger" onClick={() => onDelete(id)}>
        Hapus
      </Button>
    </>
  );
}
