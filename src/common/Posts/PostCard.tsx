import Image from "next/image";
import Link from "next/link";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { PostsListType } from "src/types/posts";
import sanitizeHtml from "sanitize-html";

const PostCard = ({ post }: { post: PostsListType }) => {
  const { id, title, excerpt, _embedded } = post;
  return (
    <div className="w-full flex flex-col gap-8 items-center border border-gray-200 rounded-xl p-5">
      <div className="min-h-[279px] flex-center">
      <Link
        href={`/posts/${id}`}
        className="hover:scale-105 transition-transform duration-500"
      >
        <Image
          width={279}
          height={279}
          alt="ghorbani-dev.ir"
          placeholder="blur"
          blurDataURL={_embedded["wp:featuredmedia"][0].source_url}
          src={_embedded["wp:featuredmedia"][0].source_url}
          className="object-fill rounded-xl"
        />
      </Link>
      </div>
      <Link
        href={`/posts/${id}`}
        className="hover:text-primary transition-colors"
      >
        <h2 className="text-xl line-clamp-2 text-center min-h-16">
          {title.rendered}
        </h2>
      </Link>
      <p
        className="text-gray-400 text-base line-clamp-3 min-h-24"
        dangerouslySetInnerHTML={{
          __html: sanitizeHtml(excerpt.rendered),
        }}
      ></p>
      <Link
        href={`/posts/${id}`}
        className="flex-center gap-1 bg-primary-300 hover:bg-primary-500 text-primary-800 px-2 py-1 rounded-full transition-colors"
      >
        <HiArrowNarrowLeft />
        مطالعه کنید
      </Link>
    </div>
  );
};

export default PostCard;
