import React, { useState } from "react";

function CreateArea(props) {
  var [title, setTitle] = useState("");
  var [description, setDescription] = useState("");
  var [hide, setHide] = useState(true);

  function Hide() {
    setHide(true);
  }
  function updateDescription(event) {
    setDescription(event.target.value);
  }

  function updateTitle(event) {
    setTitle(event.target.value);
    setHide(false);
  }
  const handleSubmit = event => {
    // 👇️ prevent page refresh
    event.preventDefault();

    console.log('form submitted ✅');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Title" value={title} onChange={updateTitle} />
        <textarea name="content" hidden={hide ? true:false} placeholder="Take a note..." rows="3" value={description} onChange={updateDescription} />
        <button hidden={hide ? true : false} onClick={() => {
          Hide();
          var addedTitle = title;
          var addedDescription = description;
          setDescription("");
          setTitle("");
          props.onAdd(addedTitle, addedDescription);
        }}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
