import React from "react";
import { Card } from "react-bootstrap";
import DeleteNotes from "./DeleteNotes";
import ArsipNote from "./ArsipNote";

export default function NotesBody({ title, createdAt, body, id, onDelete }) {
  return (
    <>
      <Card style={{ width: "18rem", height: "20rem" }} className="mb-4">
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{createdAt}</Card.Subtitle>
          <Card.Text>{body}</Card.Text>
          <DeleteNotes id={id} onDelete={onDelete} />
          <ArsipNote />
        </Card.Body>
      </Card>
    </>
  );
}
