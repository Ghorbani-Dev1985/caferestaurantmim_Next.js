"use client";
import Link from "next/link";
import React from "react";
import PostsView from "src/app/posts/PostsView";
import SectionTitle from "src/common/SectionTitle";


const Posts = () => {
    
    return (
        <>
        <PostsView slice={3}/>
       <div className="flex-center flex-col my-8"><Link href="/posts"><SectionTitle title="  مشاهده همه ..."/> </Link></div>
        </>
  
    );
  };
  
  export default Posts;