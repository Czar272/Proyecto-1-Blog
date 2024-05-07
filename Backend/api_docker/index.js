// import express from 'express'
const express = require('express')
// import cors from 'cors'
const cors = require('cors')
// import {dirname} from 'path'
const { getAllPosts, createJuego, deleteJuego, editJuego } = require('./db') 

const app = express()
const port = 3000

console.log('enable cors')
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.listen(port, () => {
    /* console.log(`Server listening at http://127.0.0.1:${port}`) */
})

app.post('/juego', async (req, res) => {
    const [title, cont, img, creator] = [req.body.title, req.body.cont, req.body.img, req.body.creator]
    const juego = await createJuego()
    res.status(juego.status).json(juego)
})

app.get('/juego', async (req, res) => {
    const juego = await getAllPosts()
    res.status(juego.status).json(juego)
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
    const juego = await editJuego(id, title, cont, img, creator)
    res.status(juego.status).json(juego)
})

