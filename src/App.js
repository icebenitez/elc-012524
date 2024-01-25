import { useState, useEffect } from "react";
import "./App.css";
import Container from "./Components/Container";

const containers = ["listed", "examining", "finally_back_to_hooman"];

function App() {
  const [newPetName, setNewPetName] = useState("");
  const [pets, setPets] = useState([
    {
      name: "Otis",
      status: "listed",
    },
    {
      name: "sir barks a lot",
      status: "listed",
    },
    {
      name: "scooby",
      status: "examining",
    },
  ]);

  const buttonClickHandler = (name) => {
    console.log("name", name);
    const selectedPetIndex = pets.findIndex((pet) => pet.name === name);
    const tempPetsArr = pets;

    console.log(tempPetsArr[selectedPetIndex].status);

    if (tempPetsArr[selectedPetIndex].status === containers[2]) {
      return;
    }

    if (tempPetsArr[selectedPetIndex].status === containers[1]) {
      tempPetsArr[selectedPetIndex].status = containers[2];
    }

    if (tempPetsArr[selectedPetIndex].status === containers[0]) {
      tempPetsArr[selectedPetIndex].status = containers[1];
    }

    setPets([...tempPetsArr]);
  };

  const addPet = () => {
    setPets([
      ...pets,
      {
        name: newPetName,
        status: "listed",
      },
    ]);
    setNewPetName("");
  };

  useEffect(() => {
    console.log(" pets", pets);
  }, [pets]);

  return (
    <div className="App">
      <div>
        <h1 className="">Pet Manager 3000</h1>
        <div className="input-box">
          <p>Dog name: </p>
          <input
            onChange={(e) => setNewPetName(e.target.value)}
            value={newPetName}
          />
          <button onClick={() => addPet()}>add pet</button>
        </div>
      </div>
      <div className="containers" style={{ display: "flex", width: "100%" }}>
        {containers.map((containerName) => {
          return (
            <Container
              key={containerName}
              containerName={containerName}
              pets={pets}
              onClickFn={buttonClickHandler}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
