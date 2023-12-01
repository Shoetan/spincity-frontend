
import instance from "@/app/api/apiInstance";
import { useQuery } from "@tanstack/react-query";


export const useGetGenreQuery = () =>{
  const {data, isLoading} = useQuery({
		queryKey:["genres"],
		queryFn: async() => { 
        const response =  await instance.get("apiV1/returngenre")
        return response.data
    }
});
	return {genreData:data, isLoading:isLoading}
}