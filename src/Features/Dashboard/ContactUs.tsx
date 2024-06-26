"use client"
import Alert from "@/UI/Alert";
import React, { ReactNode, useCallback } from "react";
import CustomTable from "@/UI/CustomTable";
import { Chip, TableColumn } from "@nextui-org/react";
import ToLocalDateStringShort from "@/Server/Utils/ToLocalDateStringShort";
import ModalPlacement from "@/UI/ModalPlacement";
import { BiShow } from "react-icons/bi";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { RiDraftFill } from "react-icons/ri";
import ConfirmModal from "@/UI/ConfimModal";
import { BiTrash } from "react-icons/bi";
import { useRouter } from "next/navigation";
import Http from "@/Services/HttpService";
import DOMPurify from "isomorphic-dompurify";
import useTitle from "@/Hooks/useTitle";
import useProtectRoute from "@/Hooks/useProtectRoute";
import toast from "react-hot-toast";
import RouterPush from "@/Hooks/RouterPush";
import { ContactType } from "src/Types/ContactType";


const ContactUsList = ({contacts} : {contacts : ContactType[]}) => {
  const title = useTitle(" پیام ها | کافه رستوران میم");
  const protect = useProtectRoute()
   const router = useRouter()
   const AnsweredHandler = async (id : number) => {
      await Http.put('/contact/answered' , {id})
      .then(({data})=> {
       toast.success(data.message)
       RouterPush(router)
      })
      .catch((err) => {
       toast.error(err.message)
      })
   }
   const DeleteContactUsHandler = async (id : number) => {
     await Http.delete(`/contact/${id}`)
     .then(({data}) => {
       toast.success(data.message)
       RouterPush(router)
     })
     .catch((err) => toast.error(err.message))
   }
   const contactCell = useCallback((contact : ContactType , columnKey : keyof ContactType) => {
      const cellValue = contact[columnKey];
      switch (columnKey) {
        case "createdAt":
          return (
            ToLocalDateStringShort(contact.createdAt)
          );
        case "name":
          return (    
              contact.name
          );
        case "phone":
          return (
             contact.phone    
          );
          case "body" :
            return (
              <ModalPlacement
            icon={<BiShow className="size-8 fill-sky-500" />}
            title="متن کامل"
            btnText="متن کامل"
          >
              <div
                  dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(contact.body) }}
                ></div>
            {contact.body}
          </ModalPlacement>  
            );
         case "answer" :
            return (
               contact.answer ? (
                  <Chip
                    startContent={<IoCheckmarkCircleSharp size={18} />}
                    variant="faded"
                    color="success"
                    className="border border-emerald-500"
                  >
                    پاسخ داده شده
                  </Chip>
                ) : (
                  <Chip
                    startContent={<RiDraftFill size={18} />}
                    variant="faded"
                    color="warning"
                    className="border border-amber-500 cursor-pointer"
                    onClick={() => AnsweredHandler(contact._id)}
                  >
                    بی پاسخ
                  </Chip>
                )
            );
            case "act" :
            return (
              <ConfirmModal
              btnIcon={<BiTrash className="size-5" />}
              confirmBtnText="حذف"
              titleText="حذف پیام"
              confirmBtnHandler={() => DeleteContactUsHandler(contact._id)}
            >
             <p className="flex-center gap-1.5"> آیا از حذف پیام کاریز  
              <span className="text-sky-500">{contact.name}</span> مطمعن هستید؟</p>
            </ConfirmModal>
            );
        default:
          return cellValue;
      }
    }, []);
    return ( 
            contacts.length ?  
            <CustomTable itemsArray={contacts} renderCell={contactCell}>
                <TableColumn key="createdAt">تاریخ</TableColumn>
                <TableColumn key="name"> نام و نام خانوادگی</TableColumn>
                <TableColumn key="phone">  تلفن تماس</TableColumn>
                <TableColumn key="body"> متن کامل </TableColumn>
                <TableColumn key="answer">  وضعیت پاسخ</TableColumn>
                <TableColumn key="act"> عملیات</TableColumn>
            </CustomTable>
        :  <Alert alertText="تاکنون پیامی ثبت نگردیده است"/>
     );
}
 
export default ContactUsList;