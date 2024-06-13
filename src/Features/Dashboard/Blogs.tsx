"use client"
import React from "react";
import Alert from "@/UI/Alert";
import { TableColumn, Chip } from "@nextui-org/react";
import Http from "@/Services/HttpService";
import { useRouter } from "next/navigation";
import RouterPush from "@/Hooks/RouterPush";
import Image from "next/image";
import ModalPlacement from "@/UI/ModalPlacement";
import { BiShow } from "react-icons/bi";
import DOMPurify from "isomorphic-dompurify";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { RiDraftFill } from "react-icons/ri";
import ConfirmModal from "@/UI/ConfimModal";
import { BiTrash } from "react-icons/bi";
import toast from "react-hot-toast";
import CustomTable from "@/UI/CustomTable";
import useTitle from "@/Hooks/useTitle";
import useProtectRoute from "@/Hooks/useProtectRoute";

type BlogType = {
  _id: number,
  cover: string,
  title: string,
  shortName: string,
  description: string,
  body: string,
  publish: boolean,
}

const BlogsList = ({ blogsList } : {blogsList : object[]}) => {
  const title = useTitle("مقاله ها | کافه رستوران میم");
  const protect = useProtectRoute()
  const router = useRouter();
  const PublishBlogHandler = async (id : number) => {
    await Http.put("/articles", { id })
      .then(({ data }) => {
        toast.success(data.message);
        RouterPush(router);
      })
      .catch((err) => console.log(err));
  };
  const DeleteBlogHandler = async (id : number) => {
    await Http.delete(`/articles/${id}`)
      .then(({ data }) => {
        toast.success(data.message);
        RouterPush(router);
      })
      .catch((err) => toast.error(err.message));
  };
  const renderCell = (blog: BlogType, columnKey : React.Key) => {
    const cellValue = blog[columnKey];
    switch (columnKey) {
      case "cover":
        return (
          <Image
            width={100}
            height={100}
            alt="ghorbani-dev.ir"
            placeholder="blur"
            blurDataURL={`${process.env.NEXT_PUBLIC_DOMAINAPI_URL}${blog.cover}`}
            src={`${process.env.NEXT_PUBLIC_DOMAINAPI_URL}${blog.cover}`}
            className="object-fill rounded-lg"
          />
        );
      case "title":
        return blog.title;
      case "shortName":
        return blog.shortName;
      case "description":
        return (
          <ModalPlacement
            icon={<BiShow className="size-8 fill-sky-500" />}
            title="توضیحات"
            btnText="توضیحات"
          >
            {blog.description}
          </ModalPlacement>
        );
      case "body":
        return (
          <ModalPlacement
            icon={<BiShow className="size-8 fill-sky-500" />}
            title="بدنه"
            btnText="بدنه"
          >
            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(blog.body),
              }}
            ></div>
            {blog.body}
          </ModalPlacement>
        );
      case "publish":
        return blog.publish ? (
          <Chip
            startContent={<IoCheckmarkCircleSharp size={18} />}
            variant="faded"
            color="success"
            className="border border-emerald-500"
          >
            منتشر شده
          </Chip>
        ) : (
          <Chip
            startContent={<RiDraftFill size={18} />}
            variant="faded"
            color="warning"
            className="border border-amber-500 cursor-pointer"
            onClick={() => PublishBlogHandler(blog._id)}
          >
            پیش نویس
          </Chip>
        );
      case "act":
        return (
          <ConfirmModal
            btnIcon={<BiTrash className="size-5" />}
            confirmBtnText="حذف"
            titleText="حذف مقاله"
            confirmBtnHandler={() => DeleteBlogHandler(blog._id)}
          >
            <p className="flex-center gap-1.5">
              آیا از حذف مقاله با عنوان
              <span className="text-sky-500">{blog.title}</span> مطمعن هستید؟
            </p>
          </ConfirmModal>
        );
      default:
        return cellValue;
    }
  };
  return (
      blogsList.length ? (
        <CustomTable itemsArray={blogsList} renderCell={renderCell}>
          <TableColumn key="cover">تصویر</TableColumn>
          <TableColumn key="title">عنوان</TableColumn>
          <TableColumn key="shortName">لینک</TableColumn>
          <TableColumn key="description">توضیحات</TableColumn>
          <TableColumn key="body">بدنه</TableColumn>
          <TableColumn key="publish"> وضعیت انتشار</TableColumn>
          <TableColumn key="act"> عملیات</TableColumn>
        </CustomTable>
      ) : (
        <Alert alertText="تاکنون مقاله ای ثبت نگردیده است" />
      )
  );
};

export default BlogsList;
