import React from "react";

function ToyForm() {

const [newToy, setNewToy] = useState({})
  
  function handleSubmit(event) {
  event.preventDefault();
  }
  const newToy ={
    name: "name",
    image: "image",
    likes: 0
  }
  return (
    <div className="container">
      <form className="add-toy-form"
        onSubmit={handleSubmit}
        data-testid="add-toy-form">
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={newToy.name}
          onChange={(event) => setNewToy({...newToy, name: event.target.value})}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={newToy.image}
          onChange={(event) => setNewToy({...newToy, image: event.target.value})}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
