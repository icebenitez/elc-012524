import React from "react";

const Pet = ({ name, status, onClickFn }) => {
  return (
    <div style={{ display: "flex" }}>
      <p>{name}</p>
      {status !== "finally_back_to_hooman" ? (
        <button onClick={() => onClickFn(name, status)}>next</button>
      ) : (
        ""
      )}
    </div>
  );
};

export default Pet;
