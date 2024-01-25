import React, { useEffect } from "react";
import Pet from "./Pet";

const Container = ({ containerName, pets, onClickFn }) => {
  useEffect(() => {
    if (containerName === "finally_back_to_hooman") {
      console.log("pets :>> ", pets);
    }
  }, [pets, containerName]);

  return (
    <div className="container" style={{ width: "33%" }}>
      <h2>{containerName}</h2>
      <div>
        {pets.map((pet) => {
          if (containerName === pet.status) {
            return (
              <Pet name={pet.name} status={pet.status} onClickFn={onClickFn} />
            );
          }
        })}
      </div>
    </div>
  );
};

export default Container;
