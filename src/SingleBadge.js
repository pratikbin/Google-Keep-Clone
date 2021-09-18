import React from "react";

const SingleBadge = (props) => {
  return (
    <>
      <span
        className="badge"
        onClick={() => {
          props.onBadgeSelect(props.badgedata.color);
        }}
        style={{
          borderBottomColor: props.badgedata.color,
        }}
      >
        <span></span>
        {props.badgedata.tag}
      </span>
    </>
  );
};

export default SingleBadge;
