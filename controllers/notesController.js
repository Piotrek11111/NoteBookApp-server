const Note = require("../db/models/note.js");

class NotesController {
	async saveNote(req, res) {

		const {title, body} = req.body
   
		const note = new Note({
			title: title, body: body
		});
		await note.save();
    

		res.status(201).json(note);
	}

	async getNotes(req, res) {
		const doc = await Note.find({});
		res.status(200).json(doc);
	}

	async getNote(req, res) {
		const id = req.params.id;
		const note = await Note.findOne({ _id: id });
		res.status(200).json(note);
	}

	async updateNote(req, res) {
		const id = req.params.id;
		const { title, body } = req.body;

		const note = await Note.findOne({ _id: id });
		note.title = title;
		note.body = body;
		await note.save();

		res.status(201).json(note);
	}

	async deleteNote(req, res) {
		const id = req.params.id;
		await Note.deleteOne({ _id: id });

		res.sendStatus(204);
	}
}

module.exports = new NotesController();
