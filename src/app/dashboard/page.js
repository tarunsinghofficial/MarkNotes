"use client";
import React, { useState, useEffect } from "react";
import MDEditor from "@uiw/react-md-editor";
import { Button } from "@nextui-org/button";
import { X } from "lucide-react";

function Page() {
  // Load notes from localStorage or initialize with default notes
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  const [currentNote, setCurrentNote] = useState(() =>
    notes.length > 0 ? notes[0] : { id: 1, title: "New Note", content: "" }
  );

  // Save notes to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  // Add a new note
  const addNewNote = () => {
    const newNote = {
      id: notes.length + 1,
      title: `Note ${notes.length + 1}`,
      content: "",
    };
    setNotes([...notes, newNote]);
    setCurrentNote(newNote);
  };

  // Update the content of the current note
  const updateCurrentNoteContent = (content) => {
    setCurrentNote({ ...currentNote, content });
    setNotes(
      notes.map((note) =>
        note.id === currentNote.id ? { ...note, content } : note
      )
    );
  };

  return (
    <div>
      <div className="flex justify-between p-4">
        {/* Sidebar */}
        <div className="fixed w-1/4 h-screen p-4 overflow-y-scroll bg-gray-100">
          <h2 className="mb-4 text-lg font-bold">Your Notes</h2>
          <Button color="primary" className="w-full mb-4" onClick={addNewNote}>
            Create +
          </Button>
          <ul>
            {notes.map((note) => (
              <li
                key={note.id}
                className={`relative p-2 rounded-md cursor-pointer mb-2 ${
                  currentNote.id === note.id
                    ? "bg-blue-200 text-blue-900"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
                onClick={() => setCurrentNote(note)}
              >
                <h3 className="text-lg font-bold">{note.title}</h3>
                <X
                  size={16}
                  className="top-1 right-1 absolute text-gray-500 cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    setNotes(notes.filter((n) => n.id !== note.id));
                    setCurrentNote(notes[0] || { id: 1, title: "", content: "" });
                  }}
                />
              </li>
            ))}
          </ul>
        </div>

        {/* Editor */}
        <div className="left-1/4 absolute w-3/4 p-4 ml-4">
          <h1 className="mb-4 text-xl font-bold">{currentNote.title}</h1>
          <MDEditor
            value={currentNote.content}
            onChange={(content) => updateCurrentNoteContent(content || "")}
            preview="edit"
            
          />
          
          {/* Markdown Preview */}
          <h2 className="mt-4 mb-2 text-lg font-bold">Markdown Preview:</h2>
          <MDEditor.Markdown source={currentNote.content} className="bg-gray-50 p-4 border border-gray-300 rounded-md" />
        </div>
      </div>
    </div>
  );
}

export default Page;
