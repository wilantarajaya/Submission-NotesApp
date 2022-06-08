import React from "react";
import { Button } from "react-bootstrap";

export default function PindahNotes({ id, onPindah }) {
  return (
    <>
      <Button className="w-100" variant="warning" onClick={() => onPindah(id)}>
        Pindahkan
      </Button>
    </>
  );
}
