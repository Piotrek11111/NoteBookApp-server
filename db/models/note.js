const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
  title: {
    type: String,
    
  },
  body: {
    type: String,
 
  },
});

const Note = mongoose.model('Note', NoteSchema);

module.exports = Note;