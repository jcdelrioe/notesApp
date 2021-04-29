const notesCtrl = {};

const Note = require("../models/Note");

notesCtrl.renderNoteForm = (req, res) => {
	res.render("notes/new-note");
};

notesCtrl.createNewNote = async (req, res) => {
	const { title, description } = req.body;
	const newNote = new Note({ title, description });
	await newNote.save();
	res.send("New Note");
};

notesCtrl.renderNotes = async (req, res) => {
	const notes = await Note.find().lean();
	res.render("notes/all-notes", { notes });
};

notesCtrl.renderEditForm = (req, res) => {
	res.send("Render Edit Form");
};

notesCtrl.updateNote = (req, res) => {
	res.send("Update Note");
};

notesCtrl.deleteNote = (req, res) => {
	res.send("Delete Note");
};

module.exports = notesCtrl;
