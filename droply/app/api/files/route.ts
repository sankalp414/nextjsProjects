import { db } from "@/lib/db";
import { files } from "@/lib/db/schema";
import { auth } from "@clerk/nextjs/server";
import { NextResponse,NextRequest } from "next/server";
import {eq,and,isNull} from "drizzle-orm"


export async function GET(request:NextRequest){
    try {
        const {userId} = await auth()

        if(!userId){
            return NextResponse.json({error:"unauthorised"},{status:401})

        }
        const searchParams = request.nextUrl.searchParams
        const queryUserId = searchParams.get("userId")
        const parentId = searchParams.get("parentId")

        if(!queryUserId || queryUserId !== userId){
            return NextResponse.json({error:"Unauthorised"},{status:401})
        }

        let userFiles;
        if(parentId){
           userFiles = await db
                .select()
                .from(files)
                .where(
                    and(
                        eq(files.userId,userId),
                        eq(files.parentId,parentId)
                    )
                )
        }else{
            await db
            .select()
            .from(files)
            .where(
                and(
                    eq(files.userId,userId),
                    isNull(files.parentId)
                )
            )
        }

        return NextResponse.json(userFiles)

    } catch (error) {
        return NextResponse.json({error:"Failed to fetcch files"},{status:500})
        
    }

}