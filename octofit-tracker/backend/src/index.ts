import express from 'express'
import mongoose from 'mongoose'

const app = express()
app.use(express.json())

const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/octofit'
const PORT = Number(process.env.PORT) || 8000

mongoose.connect(MONGO_URI).then(() => {
  console.log('Connected to MongoDB')
}).catch(err => {
  console.error('MongoDB connection error:', err)
})

app.get('/health', (_req, res) => res.json({ status: 'ok' }))

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
