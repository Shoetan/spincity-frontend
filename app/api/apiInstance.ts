import axios from "axios";



//get token from local storage

const accessToken = localStorage.getItem("token")
const instance = axios.create ({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    "Content-type": "application/json",
    "Authorization": `Bearer ${accessToken}`,
  },
})

export default instance