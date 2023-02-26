const express = require('express');

const router = express.Router();

const { createConsole, getAllConsole, byid, deleteConsole, update } = require('../controllers/console');



const multer = require('multer');

let filename = '';

const myStorage = multer.diskStorage({
  destination: './uploads',
  filename: (_req, file, redirect) => {
    filename = Date.now() + '.' + file.mimetype.split('/')[1];
    redirect(null, filename);
  }
})

const upload = multer({ storage: myStorage });

router.post('/add', upload.any('image'), (req, res) => {
  
  createConsole(req, res, filename);
  filename = '';
});

router.get('/all', getAllConsole);
router.get('/getbyid/:id', byid);
router.delete('/delete/:id', deleteConsole);
router.put('/update/:id', update);




module.exports = router;