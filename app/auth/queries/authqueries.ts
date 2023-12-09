import instance from "@/app/api/apiInstance";
import { MutationFunction, useMutation } from "@tanstack/react-query";
import { RegisterUserResponse, RegisterUserType } from "../authTypes";
import { register } from "module";



const registerUser = async(payload: RegisterUserType):Promise<RegisterUserResponse> =>{
  const response  =  await instance.post<RegisterUserResponse>("apiV1/registerUser", payload)

  const {data} = response;
  return data

}

const printMessage = () =>{
  console.log("Hello");
}

export const userRegistration = () =>{
  
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {mutate} = useMutation({
    mutationFn:(payload:RegisterUserType) =>{
      return registerUser(payload)
    }
  })

  return {createUser: mutate}
}

