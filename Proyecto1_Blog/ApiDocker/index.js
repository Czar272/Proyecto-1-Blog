import express from 'express'
import cors from 'cors'
import {dirname} from 'path'
import { nose } from './db'

const app = express()
const port = 3000

app.use(cors())

app.post('/juego', async (req, res) => {
    const juego = await nose()
    res.status(juego.status).json(juego)
})

app.get('')