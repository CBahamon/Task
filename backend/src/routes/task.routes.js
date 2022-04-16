import { Router } from 'express';
import { deleteTask, getTask, getTaskCount, getTasks, saveTask, updateTask } from '../controllers/tasks'

const router = Router();


/** 
 * @swagger 
 * /tasks: 
  *   get:
 *     tags:
 *       - Tasks
 *     description: Get all tasks 
 */
router.get('/tasks', getTasks);

/** 
 * @swagger 
 * /tasks/count: 
  *   get:
 *     tags:
 *       - Tasks
 *     description: Get total tasks 
 */
router.get('/tasks/count', getTaskCount);

/** 
 * @swagger 
 * /tasks/:id: 
  *   get:
 *     tags:
 *       - Tasks
 *     description: Get task by id
 */
router.get('/tasks/:id', getTask)

/** 
 * @swagger 
 * /tasks: 
  *   post:
 *     tags:
 *       - Tasks
 *     description: Create a new task
 */
router.post('/tasks', saveTask);

/** 
 * @swagger 
 * /tasks/:id: 
  *   delete:
 *     tags:
 *       - Tasks
 *     description: Delete task by id 
 */
router.delete('/tasks/:id', deleteTask);

/** 
 * @swagger 
 * /tasks/:id: 
  *   put:
 *     tags:
 *       - Tasks
 *     description: update task by id 
 */
router.put('/tasks/:id', updateTask);


export default router;