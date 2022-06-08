import React from "react";
import { Card } from "react-bootstrap";
import DeleteNotes from "./DeleteNotes";
import ArsipNote from "./ArsipNote";
import PindahNotes from "./PindahNotes";

export default function NotesBody({ title, createdAt, body, id, onDelete, onArchive, onPindah, kondisi }) {
  return (
    <>
      <Card style={{ width: "15rem" }} className="m-1 ">
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{createdAt}</Card.Subtitle>
          <Card.Text>{body}</Card.Text>
        </Card.Body>
        <div className="d-flex justify-content-around pb-3">
          <div className="row w-100">
            <div className="col">
              <DeleteNotes id={id} onDelete={onDelete} />
            </div>
            <div className="col"> {!kondisi ? <ArsipNote id={id} onArchive={onArchive} /> : <PindahNotes id={id} onPindah={onPindah} />}</div>
          </div>
        </div>
      </Card>
    </>
  );
}
