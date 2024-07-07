import {pgTable, text} from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
import { z } from 'zod';


export const accounts = pgTable("accounts", {
    id: text("id").primaryKey(),
    plaidId: text("plaid_id"),
    name: text("name").notNull(),
    userId: text("user_id").notNull()
})

export const insertAccountSchema = createInsertSchema(accounts);

//Install dependencies
// npm install drizzle-orm @neondatabase/serverless
// npm install -D drizzle-kit dotenv
//add DATABASE_URL into env file

//create drizzle.ts in db/, contents: https://orm.drizzle.team/docs/get-started-postgresql
//creating schema: schema.ts in db/, contents: https://orm.drizzle.team/docs/schemas
//create config: drizzle.config.ts in root, contents: https://orm.drizzle.team/docs/migrations
//create in package.json scripts:
// "db:generate": "drizzle-kit generate",
//     "db:migrate": "drizzle-kit migrate",
//     "db:studio": "drizzle-kit studio"
//run in terminal: npm run db:generate to generate migrate script
//run npm run db:migrate to migrate the schema to neon
//run npm run db:studio to launch studio
