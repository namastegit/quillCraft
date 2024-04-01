import { Hono } from 'hono';
import { userRouter } from './routes/user';
import { blogRouter } from './routes/blog';

// Create the main Hono app
const app = new Hono();
console.log("1")
app.route("api/v1/user", userRouter);
app.route("api/v1/blog", blogRouter);

export default app;