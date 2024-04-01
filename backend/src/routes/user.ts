import { PrismaClient } from "@prisma/client/extension";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { sign} from "hono/jwt";

export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET : string,
    }
}>();

userRouter.post('/signup', async (c) => {
  console.log("reached inside signup route");
    const body = await c.req.json();
    console.log(body);
    console.log("BODY");
    const prisma = new 
    PrismaClient({
      datasourceUrl: c.env?.DATABASE_URL,
      
    }).$extends(withAccelerate());
  
  
    try {
      console.log("reached try catch block");
      const user = await prisma.user.create({
        data: {
          email: body.email,
          password: body.password,
          name: body.name
        }
      });
      // const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
      return c.json({ user });
    } catch (e) {
      c.status(403);
      return c.json({ error: "error while signing up" })
    }
  });
  
  userRouter.post("/signin", async (c) => {
    const body = await c.req.json();
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL
    });
  
  
    try {
      const user = await prisma.user.findUnique({
        where: {
          email: body.email,
          password: body.password
        }
      });
      if (!user) {
        c.status(403); //unauthorized status code
        return c.json({
          error: "User not found"
        });
      }
      const jwt = await sign({ id: user.id }, c.env.JWT_SECRET)
  
      return c.json({ jwt });
    } catch (e) {
      c.status(403);
      return c.json({ error: "Server Error" })
    }
  }
  );