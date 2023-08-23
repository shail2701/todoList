const express = require('express');
const router = express.Router();
const controller = require('../controllers/todoController');

router.get('/todos',controller.getTodos);
router.get('/todos/:id',controller.getSingleTodo);
router.post('/todos',controller.createTodo);
router.put('/todos/:id',controller.editTodo);
router.delete('/todos/:id',controller.deleteTodo);

module.exports = router;
