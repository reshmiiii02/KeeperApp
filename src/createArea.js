import React, { useState } from "react";
import "./styles1.css";

function CreateArea(props) {
    const [note, setNote] = useState({ title: "", content: "" });

    function handleChange(event) {
        const { name, value } = event.target;
        setNote(prevNote => ({ ...prevNote, [name]: value }));
    }

    function submitNote(event) {
        event.preventDefault();
        if (!note.title && !note.content) return;
        props.onAdd(note);
        setNote({ title: "", content: "" });
    }

    return (
        <div className="create-note">
            <input
                name="title"
                onChange={handleChange}
                value={note.title}
                placeholder="Title"
            />
            <textarea
                name="content"
                onChange={handleChange}
                value={note.content}
                placeholder="Take a note..."
                rows="3"
            />
            <button onClick={submitNote}>+</button>
        </div>
    );
}

export default CreateArea;