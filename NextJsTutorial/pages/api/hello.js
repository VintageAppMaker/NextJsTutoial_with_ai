export default function handler(req, res) {
  res.status(200).json({ 
    message: 'Hello from Next.js!',
    timestamp: new Date().toISOString()
  })
}
