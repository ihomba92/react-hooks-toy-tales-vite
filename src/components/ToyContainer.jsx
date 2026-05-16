import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys}) {

function showToys() {
  return toys.map((toy) => (
    <ToyCard key={toy.id} toy={toy} />
  ))
}
  
  return (
    <div id="toy-collection"
    >{
      showToys()
    }</div>
  );
}

export default ToyContainer;
