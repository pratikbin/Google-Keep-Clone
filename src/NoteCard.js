import React from "react";
import Card from "./Card";

const NoteCard = ({ allNote, deleteNoteCard }) => {
  // const deleteNote = (noteId) => {
  //   deleteNoteCard(noteId);
  // };

  //allNote = allNote.reverse();
  return (
    <>
      <div className="container mt-5">
        <div className="card-columns">
          {allNote.map((curretnote, index) => {
            return (
              <Card
                data={curretnote}
                key={index}
                id={index}
                deleteItem={(noteId) => deleteNoteCard(noteId)}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default NoteCard;
