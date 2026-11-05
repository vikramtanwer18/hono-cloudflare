import { Hono } from 'hono'

const app = new Hono()



app.post("/api/v1/signup", async (c) => {
  const body = await c.req.json()
  const { email, password } = body
  
  // Here you would typically handle the signup logic, such as saving the user to a database
  // For demonstration purposes, we'll just return the received data
  return c.json({
    message: 'User signed up successfully!',
  })
})


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
