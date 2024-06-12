
import { BASE_URL } from "./Services/HttpService";
import GetToken from "./utils/GetToken";


export async function middleware(req){
  const url = req.url;
  const pathname = req.nextUrl.pathname;
  
  const getToken = await GetToken();
console.log("token" , getToken)
   if(pathname.startsWith('/dashboard')){
//    const data = await fetch(`${BASE_URL}/auth/me` , {
//             method: "GET",
//             headers: {
//                 "Authorization" : `Bearer ${getToken}`
//             }
//         }
//     ).then((res) => res.json());
//         console.log("data" , data)
   }
}

export const config = {
    matcher: ["/dashboard" , "/newBlog" , "/contactUsList"]
}