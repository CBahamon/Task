import {connect} from '../database';


export const getTasks = async (req, res) =>{
	const connection = await connect();
	const [rows] = await connection.query('SELECT * from tasks')
	res.json(rows)
}
export const getTask = async(req, res) =>{
	const connection = await connect();
	const [rows] = await connection.query('SELECT * from tasks WHERE id = ?',[
		req.params.id
	])
	res.json(rows[0])
}
export const getTaskCount = (req, res) =>{
	res.send("Hello World!!")
}
export const saveTask = (req, res) =>{
	res.send("Hello World!!")
}
export const deleteTask = (req, res) =>{
	res.send("Hello World!!")
}
export const updateTask = (req, res) =>{
	res.send("Hello World!!")
}