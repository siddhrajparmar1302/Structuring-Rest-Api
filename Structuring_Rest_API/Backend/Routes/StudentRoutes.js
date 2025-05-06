const express = require('express');
const router = express.Router();
const controller = require('../Controllers/StudentController');

router.get('/', controller.getStudents);
router.post('/', controller.createStudent);
router.put('/:id', controller.updateStudent);
router.delete('/:id', controller.deleteStudent);

module.exports = router;
