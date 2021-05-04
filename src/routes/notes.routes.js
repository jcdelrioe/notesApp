const { Router } = require("express");
const {
	renderNoteForm,
	createNewNote,
	renderNotes,
	renderEditForm,
	updateNote,
	deleteNote,
} = require("../controllers/notes.controller");

const { isAuthenticated } = require("../helpers/auth");

const router = Router();

//New Note
router.get("/notes/add", isAuthenticated, renderNoteForm);

router.post("/notes/new-note", isAuthenticated, createNewNote);

//Get all notes
router.get("/notes", isAuthenticated, renderNotes);

//Edit Notes
router.get("/notes/edit/:id", isAuthenticated, renderEditForm);
router.put("/notes/edit/:id", isAuthenticated, updateNote);

//Delete Note
router.delete("/notes/delete/:id", isAuthenticated, deleteNote);

module.exports = router;
