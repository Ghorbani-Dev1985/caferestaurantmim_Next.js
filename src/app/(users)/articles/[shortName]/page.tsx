import BlogDetails from '@/Features/Blog/Blog'
import Http from "@/Services/HttpService";
import {notFound} from 'next/navigation';

async function getOneBlog(shortName : {shortName: string}){
  const { data: blog } = await Http.get(`/articles/${shortName}`);
  return blog
}

type ParamsType= {
  params : {
    shortName : string
  }
}

export async function generateMetadata({ params } : ParamsType) {
  const blog = await getOneBlog(params.shortName)
  return {
    title: `${blog.title} | کافه رستوران میم `,
    description: `${blog.title}`,
  }
}

const Blog = async ({params} : {params: {shortName : string}}) => {
  const blog = await getOneBlog(params.shortName)
  if(!blog.title) return notFound();
    return <BlogDetails blog={blog}/>
}
 
export default Blog;
