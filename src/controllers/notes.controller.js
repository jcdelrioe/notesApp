const notesCtrl = {};

notesCtrl.renderNoteForm = (req, res) => {
	res.send("Request note add");
};

notesCtrl.createNewNote = (req, res) => {
	res.send("New Note");
};

notesCtrl.renderNotes = (req, res) => {
	res.send("Notes listed");
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
