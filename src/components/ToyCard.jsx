import React from "react";

function ToyCard({toy, onDeleteToy, onLikeToy}) {
 
  async function handleLike() {
    const response = await fetch (`http://localhost:3001/toys/${toy.id}`, {
      method: "PATCH",
      headers: { 'Content-Type': "application/json"},
      body:JSON.stringify({likes:toy.likes +1})
    })
    const updatedToy = await response.json()
    onLikeToy(updatedToy)
  }

  async function handleDelete(){
    await fetch (`http://localhost:3001/toys/${toy.id}`, {
      method: "DELETE",
    })
    onDeleteToy(toy.id)
  }

  return (
    <div className="card" data-testid="toy-card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{toy.likes} Likes </p>
      <button className="like-btn" onClick={handleLike}>Like {"<3"}</button>
      <button className="del-btn" onClick= {handleDelete}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
