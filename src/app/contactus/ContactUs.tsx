"use client";
import toast from "react-hot-toast";
import AddressItems from "src/common/Footer/AddressItems";
import GoogleMap from "src/common/GoogleMap";
import { useAddContactUs } from "src/hooks/useContactUs";
import { SubmitHandler, useForm } from "react-hook-form";
import { ContactUsType } from "src/types/contactUs";
import { Button, Spinner } from "@nextui-org/react";
import TextField from "src/common/TextField";
import TextAreaField from "src/common/TextAreaField";
import Breadcrumb from "src/common/Breadcrumb";
import SectionTitle from "src/common/SectionTitle";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactUsType>({ mode: "all" });
  const { isPending, mutateAsync } = useAddContactUs();
  const NewContactUsHandler: SubmitHandler<ContactUsType> = async (data) => {
    try {
      const res = await mutateAsync({ ...data });
      toast.success(
        "پیام شما با موفقیت ثبت شد و در اولین فرصت با شما تماس گرفته خواهد شد"
      ), { duration: 4000};
      reset();
    } catch (error) {
      toast.error("ارسال پیام انجام نشد");
    }
  };
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item title="ارتباط با کافه رستوران میم" />
      </Breadcrumb>
      <section className="container w-full flex flex-col md:flex-row justify-between gap-12 mt-8">
        <div className="flex flex-1 flex-col items-center justify-center gap-y-12 border-1 border-gray-200 rounded-lg p-5">
         <SectionTitle title="ارتباط با کافه رستوران میم"/>
          <div className="space-y-10">
            <AddressItems />
          </div>
          {/* Contact US Form */}
          <form
            onSubmit={handleSubmit(NewContactUsHandler)}
            className="w-full space-y-8"
          >
            <TextField
              name="input_7"
              placeholder="لطفا نام و نام خانوادگی را وارد نمایید"
              label="نام و نام خانوادگی"
              required
              register={register}
              validationSchema={{
                required: "لطفا نام و نام خانوادگی را وارد نمایید",
                minLength: {
                  value: 3,
                  message: "حداقل ۳ کاراکتر وارد نمایید  ",
                },
                maxLength: {
                  value: 30,
                  message: "حداکثر ۳۰ کاراکتر وارد نمایید",
                },
                pattern: {
                  value: /^[\u0600-\u06FF\s]+$/g,
                  message: "لطفا فقط حروف فارسی وارد نمایید",
                },
              }}
              errors={errors}
            />
            <TextField
              name="input_5"
              type="tel"
              placeholder="لطفا شماره موبایل خود را وارد نمایید"
              label="شماره موبایل"
              required
              register={register}
              validationSchema={{
                required: "لطفا شماره موبایل را وارد نمایید",
                minLength: {
                  value: 10,
                  message: "حداقل ۱۰ کاراکتر وارد نمایید  ",
                },
                maxLength: {
                  value: 12,
                  message: "حداکثر ۱۲ کاراکتر وارد نمایید",
                },
                pattern: {
                  value:
                    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/g,
                  message: "لطفا فقط عدد انگلیسی وارد نمایید",
                },
              }}
              errors={errors}
            />
            <TextAreaField
              name="input_6"
              placeholder="پیام خود را وارد نمایید"
              label="پیام شما"
              required
              register={register}
              validationSchema={{
                required: "لطفا پیام خود را وارد نمایید",
                minLength: {
                  value: 25,
                  message: "حداقل ۲۵ کاراکتر وارد نمایید  ",
                },
                maxLength: {
                  value: 350,
                  message: "حداکثر ۳۵۰ کاراکتر وارد نمایید",
                },
              }}
              errors={errors}
            />
            <Button
              type="submit"
              size="md"
              color="primary"
              disabled={isSubmitting}
              className="w-full font-extrabold disabled:bg-slate-300 disabled:opacity-70"
            >
              {isPending ? (
                <Spinner size="sm" color="primary" className="flex-center" />
              ) : (
                "ارسال پیام"
              )}
            </Button>
          </form>
        </div>
        <div className="flex flex-1 border-1 border-gray-200 rounded-lg">
          <GoogleMap style="min-h-screen" />
        </div>
      </section>
    </>
  );
};

export default ContactUs;
