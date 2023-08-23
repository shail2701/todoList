const Todo = require('../models/Todo'); 

// GET API to fetch all todo
exports.getTodos = async(req,res) => {
    try{
        const data = await Todo.findAll({
            attributes:['id','title','description','status','createdAt','updatedAt']
        });
        res.status(200).json({
            message:'Displaying Data successfully',
            data
        });

    }catch(e) {
        console.log(e);
    }
};

// GET API to fetch a specific todo by its ID
exports.getSingleTodo = async(req, res) => {
    const todoId = req.params.id; 
    try {
      const todo = await Todo.findByPk(todoId, {
        attributes: ['id', 'title', 'description', 'status','createdAt', 'updatedAt']
      });
  
      if (todo) {
        res.status(200).json({
          message: 'Todo fetched successfully',
          data: todo
        });
      } else {
        res.status(404).json({
          message: 'Todo not found'
        });
      }
    } catch (e) {
      console.error(e);
      res.status(500).json({
        message: 'Error while fetching todo'
      });
    }
};

// POST API to create a new todo
exports.createTodo = async (req, res) => {
    try {
      const { title, description,status } = req.body;

      if(status !== 'completed' || status !== 'notcompleted') {
        res.status(400).json({
            message:"Please choose status either completed or non-completed"
        })
      }
  
      const newTodo = await Todo.create({
        title,
        description,
        status
      });
  
      res.status(201).json({
        message: 'Todo created successfully',
        data: newTodo
      });
    } catch (e) {
      console.error(e);
      res.status(500).json({
        message: 'Error while creating todo'
      });
    }
};

// Edit a todo
exports.editTodo = async(req,res) => {
    const todoId = req.params.id;
    try {
        const { title, description, status } = req.body; 
        const [rowsUpdated] = await Todo.update(
          {
            title,
            description,
            status
          },
          {
            where: { id: todoId }
          }
        );
    
        if (rowsUpdated === 1) {
          res.status(200).json({
            message: 'Todo updated successfully'
          });
        } else {
          res.status(404).json({
            message: 'Todo not found'
          });
        }
      } catch (e) {
        console.error(e);
        res.status(500).json({
          message: 'Error while updating todo'
        });
      }
};

// Delete a perticular todo
exports.deleteTodo = async (req, res) => {
    const todoId = req.params.id; 
    try {
      const rowsDeleted = await Todo.destroy({
        where: { id: todoId }
      });
  
      if (rowsDeleted === 1) {
        res.status(200).json({
          message: 'Todo deleted successfully'
        });
      } else {
        res.status(404).json({
          message: 'Todo not found'
        });
      }
    } catch (e) {
      console.error(e);
      res.status(500).json({
        message: 'Error while deleting todo'
      });
    }
};
  