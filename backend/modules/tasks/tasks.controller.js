import { pool as db } from '../../database/index.js'

// TODO: add try catch constructions
export class TasksController {
    async getTasks(req, res) {
        const response = await db.query('SELECT * FROM tasks ORDER BY id ASC')

        const tasks = response.rows 

        res.status(200).json(tasks)
    }
    async addTask(req, res) {
        const {text} = req.body

        // TODO: change this query
        await db.query('INSERT INTO tasks (text, completed) VALUES ($1, $2)', [text, false])

        res.status(200).json("ok")
    }
    async toggleTask(req, res) {
        const id = req.params.id

        const  response = await db.query('UPDATE tasks SET completed = NOT completed WHERE id = $1', [id])

        res.status(200).json("ok")
    }
    async editTask(req, res) {
        const id = req.params.id
        const {text} = req.body

        await db.query('UPDATE tasks SET text = $1 WHERE id = $2', [text, id])

        res.status(200).json("ok")
    }
    async deleteTask(req, res) {
        const id = req.params.id
        
        await db.query('DELETE FROM tasks WHERE id = $1', [id])

        res.status(200).json("ok")
    }
}