import React, { useState } from "react";
import Badges from "./Badges";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const AddNote = (props) => {
  const [note, setNote] = useState({
    title: "",
    msg: "Add a note",
    bedge: "",
    date: "",
  });

  const toolbarItems = [
    "heading",
    "|",

    "bold",
    "italic",
    "|",
    "outdent",
    "indent",
    "|",
    "bulletedList",
    "numberedList",

    "|",
    "insertTable",
    "|",

    "blockQuote",
    "|",
    "undo",
    "redo",
  ];

  const inputEvent = (e) => {
    const { value, name } = e.target;

    setNote((preVal) => {
      return { ...preVal, [name]: value };
    });
  };

  const addItem = () => {
    props.addItem(note);
    setNote({ title: "", msg: "Add a note", bedge: "", date: "" });
  };

  const setBadge = (color) => {
    setNote((preVal) => {
      return { ...preVal, bedge: color };
    });
  };

  return (
    <div className="container mt-5">
      <div
        className="card w-50 border-light mx-auto p-2"
        style={{ boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.07)" }}
      >
        <div className="input-container">
          <div className="card-header">
            <input
              type="text"
              className="form-control border-0 bg-transparent shadow-none"
              placeholder="Title"
              aria-label="Username"
              aria-describedby="basic-addon1"
              onChange={inputEvent}
              value={note.title}
              name="title"
              autoComplete="off"
            />
          </div>
          <div className="card-body">
            <CKEditor
              editor={ClassicEditor}
              data={note.msg}
              onChange={(event, editor) => {
                const data = editor.getData();
                setNote((preData) => {
                  return { ...preData, msg: data };
                });
              }}
              onFocus={() => {
                setNote((preData) => {
                  return { ...preData, msg: "" };
                });
              }}
              config={{
                toolbar: toolbarItems,
              }}
            />
          </div>
        </div>
        <div className="container pb-1">
          <div className="row mt-2">
            <div className="col-md-4 offset-md-8">
              <button
                className="btn shadow-none custome-btn"
                onClick={() => {
                  setNote({
                    title: "",
                    msg: "Add a note",
                    badge: "",
                    date: "",
                  });
                }}
              >
                Cancel
              </button>
              <button className="btn shadow-none custome-btn" onClick={addItem}>
                Add
              </button>
            </div>
          </div>
        </div>
      </div>

      <Badges setBadge={setBadge} />
    </div>
  );
};

export default AddNote;
