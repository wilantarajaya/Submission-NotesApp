import React, { useEffect, useState } from "react";
import NavbarComp from "./Navbar/NavbarComp";
import NotesList from "./Notes/NotesList";
import { Container } from "react-bootstrap";
import { getInitialData } from "../utils";
import Hero from "./Hero/Hero";

export default function NotesApp() {
  const [allNotes, setAllNotes] = useState(getInitialData());
  const [activeNote, setActiveNote] = useState([]);
  const [archiveNote, setArchiveNote] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setActiveNote(allNotes.filter(note => note.archived === false));
    setArchiveNote(allNotes.filter(note => note.archived === true));
  }, [allNotes, activeNote, archiveNote]);

  const DeleteNote = id => {
    const delNote = allNotes.filter(note => note.id !== id);
    setAllNotes(delNote);
  };

  const ArchiveNote = id => {
    const data = allNotes.filter(note => note.id === id);
    const index = allNotes.indexOf(data[0]);
    allNotes[index].archived = true;
    setAllNotes(allNotes);
  };

  const ActiveNote = id => {
    const data = allNotes.filter(note => note.id === id);
    const index = allNotes.indexOf(data[0]);
    allNotes[index].archived = false;
    setAllNotes(allNotes);
  };

  const searching = (search, data) => {
    return data.filter(note => note.title.toLowerCase().includes(search.toLowerCase()));
  };

  const addNotes = (title, note) => {
    setAllNotes([...allNotes, { id: +new Date(), title: title, body: note, createdAt: +new Date(), archived: false }]);
  };

  return (
    <>
      <NavbarComp onSearch={setSearch} />
      <Hero addNotes={addNotes} />

      <Container>
        <hr />
        <h4 className="text-center mb-4">Catatan Aktif</h4>
        {searching(search, activeNote).length === 0 ? (
          <p className="text-center">Catatan Aktif Kosong</p>
        ) : (
          <NotesList data={searching(search, activeNote)} onDelete={DeleteNote} onArchive={ArchiveNote} />
        )}
        <hr className="mt-5" />
        <h4 className="text-center mb-5">Arsip</h4>
        {searching(search, archiveNote).length === 0 ? (
          <p className="text-center">Catatan Arsip Kosong</p>
        ) : (
          <NotesList data={searching(search, archiveNote)} onDelete={DeleteNote} onPindah={ActiveNote} />
        )}
      </Container>
    </>
  );
}
