import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  useEffect(()=>{
    async function fetchToys(){
      const response = await fetch ("http://localhost:3001/toys")
      const toysData = await response.json()
      setToys(toysData)
    }
    fetchToys()

  }, []);

  function handleAddToy(newToy){
     setToys([...toys, newToy])
  }

  function handleDeleteToy(toyId){
    setToys(toys.filter((toy)=>toy.id !==toyId))
  }

  function handleLikeToy(updatedToy){
    setToys(toys.map((toy)=>(toy.id ===updatedToy.id? updatedToy : toy)))
  }

  function handleClick() {
   
    setShowForm((showForm) => !showForm);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddToy ={handleAddToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer 
      toys ={toys}
      onDeleteToy ={handleDeleteToy}
      onLikeToy={handleLikeToy}
       />
    </>
  );
}

export default App;
