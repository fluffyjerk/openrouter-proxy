import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import fetch from 'node-fetch'
import dotenv from 'dotenv'

dotenv.config()
const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(bodyParser.json())

app.post('/v1/chat/completions', async (req, res) => {
  const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(req.body),
  })
  const data = await response.json()
  res.json(data)
})

app.listen(port, () => {
  console.log(`Proxy server running on port ${port}`)
})
