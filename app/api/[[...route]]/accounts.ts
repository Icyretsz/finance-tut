import { Hono } from "hono"
import { db } from "@/db/drizzle"
import { accounts, insertAccountSchema } from "@/db/schema"
import { clerkMiddleware, getAuth } from "@hono/clerk-auth"
import {eq} from "drizzle-orm";
import {zValidator} from "@hono/zod-validator";
import { v4 as uuid } from 'uuid'


const app = new Hono()
    .get(
        "/",
        clerkMiddleware(),
        async (c) => {
            const auth = getAuth(c)
            if (!auth?.userId) {
                return c.json({ error : "Unauthorized"}, 401)
            }
        const data = await db
            .select({
                id: accounts.id,
                name: accounts.name,
            })
            .from(accounts)
            .where(eq(accounts.userId, auth.userId))
        return c.json({data})
    })
    .post(
        "/",
        clerkMiddleware(),
        zValidator("json", insertAccountSchema.pick({
            name : true
        })),
        async (c) => {
            const auth = getAuth(c);
            const values = c.req.valid("json")
            if (!auth?.userId) {
                return c.json({Error: "Unauthorized"}, 401)
            }
            const [data] = await db //[data]: get the first element (since inserting always singular)
                .insert(accounts)
                .values({
                    id: uuid(),
                    userId: auth.userId,
                    ...values
                }).returning()
                //while select return array of selected object, insert return nothing. Use returning() if returning the inserted
                //is required, this will return an array containing the inserted
                .execute();
            return c.json({data})
        }
    )
//RPC: operations done on server (in Next.js context: operations on server components that is in charge of data manipulation), this is
//an example of RPC
export default app