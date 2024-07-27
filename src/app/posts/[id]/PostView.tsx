"use client";
import ToLocalDateStringShort from "@/utils/toLocalDateStringShort";
import { Spinner } from "@nextui-org/react";
import Image from "next/image";
import { HiOutlineCalendar, HiOutlineClock } from "react-icons/hi";
import SectionTitle from "src/common/SectionTitle";
import { usePostById } from "src/hooks/usePosts";
import sanitizeHtml from "sanitize-html";
import Breadcrumb from "src/common/Breadcrumb";

const PostView = ({ id }: { id: number }) => {
  const { data: post, isPending } = usePostById(id);
  if (isPending) return <Spinner size="md" color="primary" />;
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item href="/posts" title="خواندنی‌ها" />
        <Breadcrumb.Item title={`${post.title.rendered}`} />
      </Breadcrumb>
      <section className="container my-8">
        <div className="flex flex-col items-center gap-6">
          {post && (
            <>
              <SectionTitle title={`${post.title.rendered}`} />
              <Image
                width={512}
                height={512}
                alt="ghorbani-dev.ir"
                placeholder="blur"
                blurDataURL={post._embedded["wp:featuredmedia"][0].source_url}
                src={post._embedded["wp:featuredmedia"][0].source_url}
                className="object-fill rounded-xl max-w-full"
              />
              <div className="flex-center gap-3 max-w-lg">
                <div className="flex-center gap-1">
                  <HiOutlineCalendar />
                  {ToLocalDateStringShort(post.date)}
                </div>
                <div className="flex-center gap-1">
                  <HiOutlineClock />
                  {post.date.slice(11, 16)}
                </div>
              </div>
              <article
                className="prose prose-xl prose-slate text-justify prose-p:leading-9 prose-div:text-justify prose-headings:text-orange-500 prose-headings:text-xl prose-headings:md:text-2xl prose-headings:my-5 prose-headings:font-bold prose-li:my-2 prose-li:text-justify prose-li:leading-9 my-16 prose-img:rounded-xl prose-img:mx-auto prose-img:shadow-lg prose-img:hover:scale-105 prose-img:transition-all prose-img:ease-linear prose-img:duration-300"
                dangerouslySetInnerHTML={{
                  __html: sanitizeHtml(post.content.rendered),
                }}
              ></article>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default PostView;
