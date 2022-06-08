import React from "react";
import NotesBody from "./NotesBody";
import { Container } from "react-bootstrap";
import { showFormattedDate } from "../../utils";

export default function NotesList({ data, onDelete, onArchive, onPindah }) {
  return (
    <>
      <Container className="d-flex flex-wrap justify-content-center align-items-stretch">
        {data.map(dt => (
          <NotesBody
            key={dt.id}
            id={dt.id}
            createdAt={showFormattedDate(dt.createdAt)}
            title={dt.title}
            body={dt.body}
            kondisi={dt.archived}
            onDelete={onDelete}
            onArchive={onArchive}
            onPindah={onPindah}
          />
        ))}
      </Container>
    </>
  );
}
