"use client";
import Image from "next/image";
import toast from "react-hot-toast";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import {
  Button,
  DatePicker,
  Select,
  SelectItem,
  Spinner,
} from "@nextui-org/react";
import TextField from "src/common/TextField";
import Breadcrumb from "src/common/Breadcrumb";
import { tables } from "src/constants/TableSelect";
import { I18nProvider } from "@react-aria/i18n";
import { ReservationType } from "src/types/reservation";
import { useAddReservation } from "src/hooks/useReservation";

const Reservation = () => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitting },
  } = useForm<ReservationType>({ mode: "all" });
  const { isPending, mutateAsync } = useAddReservation();
  const NewReservationHandler: SubmitHandler<ReservationType> = async (
    data
  ) => {
    const options: Intl.DateTimeFormatOptions = {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    };
    const persionDate = new Date(
      `${data.date.year}/${data.date.month}/${data.date.day}`
    ).toLocaleDateString("fa-IR", options);
    try {
      const res = await mutateAsync({ ...data, input_7: persionDate });
      toast.success(
        "رزرو میز با موفقیت ثبت شد و در اولین فرصت با شما تماس گرفته خواهد شد",
        { duration: 4000 }
      );
      reset();
    } catch (error) {
      toast.error("رزرو میز انجام نشد");
    }
  };
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item title="رزرو میز" />
      </Breadcrumb>
      <section className="w-full flex flex-1 flex-col items-center justify-center gap-y-12 border-1 border-gray-200 rounded-lg p-5">
        <h2 className="font-extrabold text-xl">رزرو میز کافه رستوران میم</h2>
        <Image
          width={110}
          height={25}
          alt="ghorbani-dev.ir"
          src="/images/titleLine/title.webp"
          className="object-fill"
        />
        {/* Reservation Form */}
        <form
          onSubmit={handleSubmit(NewReservationHandler)}
          className="w-full md:max-w-xl space-y-8"
        >
          <TextField
            name="input_1"
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
            name="input_3"
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
          <div className="w-full flex-between gap-x-10">
            <TextField
              name="input_5"
              type="number"
              placeholder="لطفا تعداد بزرگسال را وارد نمایید"
              label="تعداد بزرگسال"
              required
              register={register}
              validationSchema={{
                required: "لطفا تعداد بزرگسال را وارد نمایید",
                minLength: {
                  value: 1,
                  message: "حداقل ۱ کاراکتر وارد نمایید  ",
                },
                maxLength: {
                  value: 8,
                  message: "حداکثر ۸ کاراکتر وارد نمایید",
                },
              }}
              errors={errors}
            />
            <TextField
              name="input_4"
              type="number"
              placeholder="لطفا تعداد کودک را وارد نمایید"
              label="تعداد کودک"
              required
              register={register}
              validationSchema={{
                required: "لطفا تعداد کودک را وارد نمایید",
                minLength: {
                  value: 1,
                  message: "حداقل ۱ کاراکتر وارد نمایید  ",
                },
                maxLength: {
                  value: 8,
                  message: "حداکثر ۸ کاراکتر وارد نمایید",
                },
              }}
              errors={errors}
            />
          </div>
          <div className="w-full flex-between gap-x-10">
            <div className="w-full flex flex-col">
              <Controller
                control={control}
                name="input_6"
                rules={{
                  required: "لطفا یک میز را انتخاب نمایید",
                }}
                render={({ field: { onChange } }) => (
                  <Select
                    label="لطفا یک میز را انتخاب نمایید"
                    onChange={onChange}
                  >
                    {tables.map((table) => (
                      <SelectItem key={table.key}>{table.label}</SelectItem>
                    ))}
                  </Select>
                )}
              />
              {errors.input_6 && (
                <span className="block text-right text-rose-500 my-3.5 text-base">
                  {errors.input_6.message}
                </span>
              )}
            </div>
            <div className="w-full flex flex-col">
              <Controller
                control={control}
                name="date"
                rules={{
                  required: "لطفا تاریخ رزرو را انتخاب نمایید",
                }}
                render={({ field: { onChange, onBlur } }) => (
                  <I18nProvider locale="fa-IR">
                    <div className="w-full date-picker-custom">
                      <DatePicker
                        onBlur={onBlur}
                        isRequired
                        onChange={onChange}
                        classNames={{ base: "dir-ltr" }}
                        aria-label="date"
                      />
                    </div>
                  </I18nProvider>
                )}
              />
              {errors.date && (
                <span className="block text-right text-rose-500 my-3.5 text-base">
                  {errors.date.message}
                </span>
              )}
            </div>
          </div>
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
              " ثبت رزرو میز"
            )}
          </Button>
        </form>
      </section>
    </>
  );
};

export default Reservation;
