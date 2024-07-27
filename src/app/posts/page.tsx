import { Metadata } from "next";
import PostsView from "./PostsView";


export const metadata : Metadata = {
    title: " خواندنی‌ها | کافه رستوران ",
    description: "خواندنی‌ها  کافه رستوران میم"
   }
const Posts = () => {
    return <PostsView />
}
 
export default Posts;