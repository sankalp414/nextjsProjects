import {z} from "zod"

export const messageSchema = z.object({
    xontent:z
    .string()
    .min(10,{message:'Content must be minimum f 10 charactors'})
    .max(300,{message:'Content must be no longer then 300 characters'})
})