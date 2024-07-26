import { Metadata } from "next";
import PostsView from "./PostsView";


export const metadata : Metadata = {
    title: "مقاله ها | کافه رستوران میم",
    description: "مقاله های کافه رستوران میم"
   }
const Posts = () => {
    return <PostsView />
}
 
export default Posts;