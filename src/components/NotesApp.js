import React, { useState } from "react";
import NavbarComp from "./Navbar/NavbarComp";
import NotesList from "./Notes/NotesList";
import { getInitialData } from "../utils";

export default function NotesApp() {
  const [data, setData] = useState(getInitialData());

  const notes = Object.values(data);

  function DeleteNote(id) {
    const delNote = notes.filter(note => note.id !== id);
    setData(delNote);
  }

  return (
    <>
      <NavbarComp />
      <h1>Arsip</h1>
      <NotesList data={data} onDelete={DeleteNote} />
      <h1>Arsif</h1>
    </>
  );
}
