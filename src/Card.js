import React, { useEffect, useState } from "react";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import parse from "html-react-parser";
import moment from "moment";

const Card = (props) => {
  const [noteTime, setNoteTime] = useState(moment(props.data.date).fromNow());

  useEffect(() => {
    const interval = setInterval(() => {
      setNoteTime(moment(props.data.date).fromNow());
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <>
      <div className="card" style={{ borderBottomColor: props.data.bedge }}>
        <div className="card-body">
          <h5 className="card-title">{props.data.title}</h5>
          <span
            className="close-btn"
            onClick={() => {
              props.deleteItem(props.id);
            }}
          >
            <DeleteOutlineIcon />
          </span>
          <p className="card-text"></p>
          <span>{parse(props.data.msg)}</span>
          <p className="card-text">
            <small className="text-muted">Last updated {noteTime}</small>
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
