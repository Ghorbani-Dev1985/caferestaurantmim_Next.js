import { Metadata } from "next";
import PostView from "./PostView";

export const metadata : Metadata = {
    title: " خواندنی‌ها | کافه رستوران ",
    description: "خواندنی‌ها  کافه رستوران میم"
   }
const Post = ({ params: { id } }: { params: { id: number } }) => {
    return <PostView id={id}/>
}
 
export default Post;