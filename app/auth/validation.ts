import * as z from "zod"
import { zodResolver } from '@hookform/resolvers/zod';

export const registerSchema = z.object
({
  name: z.string().min(3,{message: "Name is required"}),
  email: z.string().min(1,{message: "Email is required"}).email({message: "Email is required"}),
  password: z.string().min(8,{message:"Password must be atlest 8 characters"}),
  confrimPasswords: z.string().min(8,{message:"Password must be at least 8 characters"})
})

export const registerResolver = zodResolver(registerSchema)
