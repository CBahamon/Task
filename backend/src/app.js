import express from 'express';
import taskRoutes from './routes/task.routes';

const app = express();
app.use(taskRoutes)

export default app; 
