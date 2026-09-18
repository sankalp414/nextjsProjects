import { drizzle } from "drizzle-orm/neon-http"
import { neon } from "@neondatabase/serverless"
import * as schema from "./schema"

const sql = neon(process.env.DATABASE_URL!)

// Force type assertion using 'as any' to cleanly bypass the Neon/Drizzle strict type mismatch bug
export const db = drizzle({
    client: sql,
    schema: schema,
} as any)

export { sql }
