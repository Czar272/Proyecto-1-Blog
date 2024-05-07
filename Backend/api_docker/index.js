import express from 'express'
import cors from 'cors'
import {dirname} from 'path'
import { getAllPosts, createJuego, deleteJuego, editJuego } from './db'

const app = express()
const port = 3000

console.log('enable cors')
app.use(cors())

app.post('/juego', async (req, res) => {
    const [title, cont, img, creator] = [req.body.title, req.body.cont, req.body.img, req.body.creator]
    const juego = await createJuego()
    res.status(juego.status).json(juego)
})

app.get('/juego', async (req, res) => {
    const blogs = await getAllBlogs()
    res.status(blogs.status).json(blogs)
})

app.delete('/juego/:id', async (req,res) =>{
    const id = req.params.id
    console.log(id)
    const result = await deleteJuego(id)
    if (result.status === 404) {
      res.status(404).json({ error: 'Juego no encontrado' })
    } else {
      res.status(result.status).json({status: result.status})
    }
})

app.get('/juego/:id', async (req, res) => {
    const id = req.params.id
    console.log(id)
    const blog = await getJuegoById(id)
    res.status(blog.status).json(blog)
})

app.put('/juego/:id', async (req, res) => {
    const id = req.params.id
    console.log(id)
    const [title, cont, img, creator] = [req.body.title, req.body.cont, req.body.img, req.body.creator]
    const juego = await editBlog(id, title, cont, img, creator)
    res.status(juego.status).json(juego)
})

