import React from "react";
import NotesBody from "./NotesBody";
import { Container } from "react-bootstrap";
import { showFormattedDate } from "../../utils";

export default function NotesList({ data, onDelete }) {
  return (
    <>
      <Container className="d-flex flex-wrap justify-content-around ">
        {data.map(dt => (
          <NotesBody key={dt.id} id={dt.id} createdAt={showFormattedDate(dt.createdAt)} title={dt.title} body={dt.body} onDelete={onDelete} />
        ))}
      </Container>
    </>
  );
}
