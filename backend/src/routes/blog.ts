import { PrismaClient } from "@prisma/client/extension";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { verify } from 'hono/jwt';


//-----------------------------------------------

export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string,
    },

    Variables: { // explicitly defining the types whic don't present in the (c) - context
        userId: string
    }

}>();


//-----------------------------------------------

//Middleware
blogRouter.use("/*", async (c, next) => {
    const authheader = c.req.header("authorization") || " ";
    //Bearer token => ["Bearer", "token"]
    const token = authheader.split(" ")[1]; // aplit and get 1st element
    const response = await verify(token, c.env.JWT_SECRET);



    if (response) {
        c.set("userId", response.id)
       await next();
    } else {
        c.status(403);
        return c.json({ message: "You are not logged in" });
    }
})


//-----------------------------------------------

blogRouter.post('/', async (c) => {
    const userId = c.get('userId');
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());

    const body = await c.req.json();
    const post = await prisma.post.create({
        data: {
            title: body.title,
            content: body.content,
            authorId: userId
        }
    });
    return c.json({
        id: post.id
    });
})


//-----------------------------------------------

blogRouter.put('/', async (c) => {
    const userId = c.get('userId');
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());

    const body = await c.req.json();
    prisma.post.update({
        where: {
            id: body.id,
            authorId: userId
        },
        data: {
            title: body.title,
            content: body.content
        }
    });

    return c.text('updated post');
});

//-----------------------------------------------

blogRouter.get("/bulk", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());

    try {
        const posts = await prisma.post.find({});

        return c.json(posts);
    } catch (e) {
        c.status(411);
        return c.json({ error: "Error FInding All Blogs" });
    }

});

//-----------------------------------------------

blogRouter.get('/:id', async (c) => {
    const id = c.req.param('id');
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());

    const post = await prisma.post.findUnique({
        where: {
            id
        }
    });

    return c.json(post);
});


