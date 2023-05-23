const express = require("express");
const router = express.Router();
const notesController = require("../controllers/notesController.js");

router.get("/notes", notesController.getNotes);
router.get("/notes/:id", notesController.getNote);
router.post("/notes", notesController.saveNote);
router.put("/notes/:id", notesController.updateNote);
router.delete("/notes/:id", notesController.deleteNote);

module.exports = router;
