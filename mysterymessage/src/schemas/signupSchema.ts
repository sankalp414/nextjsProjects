import {z} from 'zod'

export const usernameValidation = z
.string()
.min(2,"Username must be atleast 2 charactors")
.max(20,"Username must be no more then 20 charactors")
.regex(/^[a-zA-Z0-9_]+$/,"Username must not contain special character")


export const signUpSchema = z.object({
    username:usernameValidation,
    email: z.string().email({message:"Invalid email address"}),
    password: z.string().min(6,{message: "password must be atleast six charators"})
})