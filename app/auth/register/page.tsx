"use client"

import { Button } from '@/components/ui/button'
import Container from '@/components/ui/container'
import Image from 'next/image'
import React from 'react'
import spincityBlue from '../../../public/spincityBlue.png'
import spincityTransparent from '../../../public/spincityTransparent.png'
import { useForm } from 'react-hook-form'
import { userRegistration } from '../queries/authqueries'
import { zodResolver } from "@hookform/resolvers/zod"
import { RegistrationSchema, registerSchema } from '../validation'
import { Loader2 } from 'lucide-react'

type IRegisterPayload = {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
}

const Page = () => {

  const {
    handleSubmit,
    register,
    reset,
    formState:{errors},
  } = useForm<RegistrationSchema>({
    resolver: zodResolver(registerSchema),
  })

// create register use function fron react query
  const {createUser, creatingUser} = userRegistration()

  const onSubmit = async (payload:IRegisterPayload) =>{
    await createUser(payload)
  }



  return (
    <div>
      <Container>
        <div className='flex flex-col items-center justify-center max-w-2xl max-h-auto  mx-auto'>

          <div>
              <Image
                src={spincityTransparent}
                alt = {"Logo"}
                width = {200}
              />
          </div>
          <div className='border border-primary/30 rounded-md flex flex-col items-start p-8 m-4 w-full shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]' >
            
            <div className='flex flex-col w-full h-16 mb-6'>
              <label className='font-poppins'>Your name</label>
              <input type='text' className='border w-full h-full rounded-lg p-3' {...register("name")}/> 
              {errors.name && ( <p className='font-roboto text-xs text-red-500'>{errors.name?.message}</p>)} 
            </div>
            <div className='flex flex-col w-full h-16 mb-6'>
              <label className='font-poppins'>Email</label>
              <input type='email' className='border w-full h-full rounded-lg p-3' {...register("email")}  /> 
              {errors.email && ( <p className="font-poppins text-xs text-red-500"> {errors.email?.message}</p>)} 
            </div>
            <div className='flex flex-col w-full h-16 mb-6'>
              <label className='font-poppins'>Password</label>
              <input type='text' className='border w-full h-full rounded-lg p-3' {...register("password")} />  
              {errors.password && ( <p className="font-poppins text-xs text-red-500" >{errors.password?.message}</p>)}
            </div>
            <div className='flex flex-col w-full h-16 mb-6'>
              <label className='font-poppins'>Re-enter password</label>
              <input type='text' className='border w-full h-full rounded-lg p-3' {...register("confirm_password")} />
              {errors.password && ( <p className="font-poppins text-xs text-red-500" >{errors.password?.message}</p>)}
            </div>
            <Button variant="secondary" size="full" className='mb-6' onClick={ handleSubmit(onSubmit) } >
              {creatingUser ? (<Loader2 className='className="mr-2 h-4 w-4 animate-spin'/>) : ("Continue")}
            </Button>

            <div className='font-poppins'>
              <p>Already have and account? <span className='text-accent text-lg cursor-pointer hover:text-purple-400'>Sign in</span></p>
            </div>
          </div>

        </div>

        
      </Container>
    </div>
  )
}

export default Page