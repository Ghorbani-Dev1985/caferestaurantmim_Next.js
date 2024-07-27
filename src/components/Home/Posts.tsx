"use client";
import { Spinner } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import PostCard from "src/common/Posts/PostCard";
import SectionTitle from "src/common/SectionTitle";
import { useGetPosts } from "src/hooks/usePosts";
import { PostsListType } from "src/types/posts";

const Posts = () => {
    const {data : posts , isPending} = useGetPosts();
    return (
      <article className="container">
          {isPending ? (
        <Spinner size="md" color="primary" className="flex-center" />
      ) : (
        <>
       <div className="flex-center flex-col gap-y-4 mb-8"><SectionTitle title=" خواندنی"/>  </div>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {posts?.slice(0,3).map((post: PostsListType) => {
              return (
                  <React.Fragment key={post.id}>
                <PostCard post={post} />
              </React.Fragment>
            );
        })}
        </section>
       <div className="flex-center flex-col my-8"><Link href="/posts"><SectionTitle title="  مشاهده همه ..."/> </Link></div>
        </>
      )}
      </article>
    );
  };
  
  export default Posts;