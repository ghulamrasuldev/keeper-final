import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  var [items, setItems] = useState([]);

  function addNote(title, description) {
    setItems(previous => {
      return [...previous, {title:title, description:description}]
    })
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote}/>
      {
        items.map(
          (item, index) =>
            <Note key={index} id={index} title={item.title} content={item.description} onDelete={deleteItem} />
        )
      }
      <Footer />
    </div>
  );
}

export default App;
