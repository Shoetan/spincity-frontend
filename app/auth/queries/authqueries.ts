import instance from "@/app/api/apiInstance";
import { useMutation } from "@tanstack/react-query";
import { RegisterUserResponse, RegisterUserType } from "../authTypes";
import React from "react";



const registerUser = async(payload: RegisterUserType):Promise<RegisterUserResponse> =>{
  const response  =  await instance.post<RegisterUserResponse>("apiV1/registerUser", payload)

  const {data} = response;
  return data
}




export const userRegistration = () =>{

  
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {mutate, isPending} = useMutation({
    mutationFn:(payload:RegisterUserType) =>{
      return registerUser(payload)
    }
  })

  return {createUser: mutate, creatingUser:isPending}
}

