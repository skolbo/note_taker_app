const router = require('express').Router();
const { v4: uuidv4, v4 } = require('uuid');
const { createNote, deleteNote } = require('../../lib/notes.js');
const { notes } = require('../../db/db.json');


router.get('/notes', (req, res) => {
  res.json(notes);
});

router.post('/notes', (req, res) => {
  req.body.id = uuidv4();
  const note = createNote(req.body, notes);
  res.json(note);
});

router.delete('/notes/:id', (req, res) => {
  deleteNote(notes, req.params.id);
  res.json(notes);

});

module.exports = router;

