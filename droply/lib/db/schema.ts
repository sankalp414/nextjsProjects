
import {pgTable,text,uuid,integer,boolean, timestamp} from "drizzle-orm/pg-core"
import {defineRelations} from "drizzle-orm"

export const files = pgTable("files",{
    id:uuid("id").defaultRandom().primaryKey(),

    //basic file/folder informations

    name: text("name").notNull(),
    path: text("path").notNull(),   // /document/project/name
    size:integer("size").notNull(),
    type:text("type").notNull(),  //folder



    //storage information
        fileUrl:text("file_url").notNull(),  //url to access file
        thumbnailUrl:text("thumbnail_url"),


    //ownership information
    userId:text("user_id").notNull(),
    parentId:uuid("parent_id"), //parent holder id if null for root items

    //file folder flags

    isFolder:boolean("is_folder").default(false).notNull(),
    isStarred:boolean("is_starred").default(false).notNull(),
    isTrash:boolean("is_trash").default(false).notNull(),


    // this timestamps

    createdAt:timestamp("created_at").defaultNow().notNull(),
    updatedAt:timestamp("updated_at").defaultNow().notNull(),
    



})


export const fileRelations = defineRelations({files},(r)=>({
    files:{
        parent:r.one.files({
            from:r.files.parentId,
            to:r.files.id,
            
        }),
        children:r.many.files()
    }

    
}))


export type File = typeof files.$inferSelect
export type NewFile = typeof files.$inferInsert