import * as z from "zod"


export const registerSchema = z.object
({
  name: z.string().min(3,{message: "Name is required"}),
  email: z.string().min(1,{message: "Email is required"}).email({message: "Email is required"}),
  password: z.string().min(8,{message:"Password must be atlest 8 characters"}),
  confirm_password: z.string().min(8,{message:"Password must be at least 8 characters"})
})

export type RegistrationSchema = z.infer<typeof registerSchema>

export const loginSchema  =  z.object({
  email: z.string().min(1,{message: "Email is required"}).email({message: "Email is required"}),
  password: z.string().min(8,{message:"Password must be atlest 8 characters"})
})

export type LoginSchema =  z.infer<typeof loginSchema>