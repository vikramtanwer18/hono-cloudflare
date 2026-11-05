import { Hono } from 'hono'
import { PrismaClient } from './generated/prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'

const app = new Hono<{ Bindings: { DATABASE_URL: string } }>()

app.post('/api/v1/signup', async (c) => {
  const { email, password } = await c.req.json()
  const prisma = new PrismaClient({
    adapter: new PrismaPg({ connectionString: c.env.DATABASE_URL }),
  })
  await prisma.user.create({ data: { email, password } })
  return c.json({ message: 'User signed up successfully!' })
})


  
  // Here you would typically handle the signup logic, such as saving the user to a database
  // For demonstration purposes, we'll just return the received data
  

app.post("/api/v1/login", async (c) => {
  const body = await c.req.json()
  const { email, password } = body
  
  // Here you would typically handle the login logic, such as verifying the user's credentials
  // For demonstration purposes, we'll just return a success message
  return c.json({
    message: 'User logged in successfully!',
  })
})



app.get("/api/v1/profile", (c) => {
  // Here you would typically retrieve the user's profile information from a database
  // For demonstration purposes, we'll just return a sample profile
  return c.json({
    message: 'User profile retrieved successfully!',
    profile: {
      name: 'John Doe',
      email: 'vikram@gmail.com',
    },
  })
})

app.get('/', (c) => {
  return c.json({
    message: 'Hello, World!',
  })
})



export default app
