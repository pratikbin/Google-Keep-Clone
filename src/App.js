import React, { useState } from "react";
import Header from "./Header";
import AddNote from "./AddNote";
import NoteCard from "./NoteCard";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [noteList, setNoteList] = useState([]);

  const addItem = (newItem) => {
    const cdate = new Date().getTime();
    newItem.date = cdate;
    setNoteList((preNotes) => {
      return [...preNotes, newItem];
    });
  };

  const deleteNoteCard = (noteCardID) => {
    setNoteList((preNoteList) => {
      return preNoteList.filter((curNode, index) => {
        return index !== noteCardID;
      });
    });
  };

  return (
    <>
      <Header />
      <AddNote addItem={addItem} />
      <NoteCard allNote={noteList} deleteNoteCard={deleteNoteCard} />
    </>
  );
};

export default App;
