import { Hono } from "hono"
import { db } from "@/db/drizzle"
import { accounts } from "@/db/schema"

const app = new Hono()
    .get("/", async (c) => {
        const data = await db
            .select({
                id: accounts.id,
                name: accounts.name,
            })
            .from(accounts)
        return c.json({data})
    })
//RPC: operations done on server (in Next.js context: operations on server components that is in charge of data manipulation), this is
//an example of RPC
export default app