"use client";
import React, { useMemo, useState } from "react";
import { Pagination, Spinner } from "@nextui-org/react";

import PostCard from "src/common/Posts/PostCard";
import { PostsListType } from "src/types/posts";
import { useGetPosts } from "src/hooks/usePosts";
import Breadcrumb from "src/common/Breadcrumb";

const PostsView = () => {
   const {data : posts , isPending} = useGetPosts();
  const [page, setPage] = useState(1);
  const rowsPerPage = 10;
  const pages = Math.ceil(posts?.length / rowsPerPage);
  const post = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return posts?.slice(start, end);
  }, [page, posts]);
  return (
    <>
     <Breadcrumb>
           <Breadcrumb.Item title="خواندنی‌ها"/>
          </Breadcrumb>
    <section className="container my-8">
      {isPending ? (
        <Spinner size="md" color="primary" className="flex-center" />
      ) : (
        <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {posts?.map((post: PostsListType) => {
            return (
              <React.Fragment key={post.id}>
                <PostCard post={post} />
              </React.Fragment>
            );
          })}
        </article>
      )}
      {pages > 1 && (
        <Pagination
          isCompact
          showControls
          showShadow
          color="primary"
          page={page}
          total={pages}
          onChange={(page) => setPage(page)}
          classNames={{
            base: "flex justify-center my-5",
            prev: "rotate-180",
            next: "rotate-180",
            forwardIcon: "rotate-180",
          }}
          />
        )}
    </section>
        </>
  );
};

export default PostsView;
