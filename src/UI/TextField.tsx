import React, { ReactNode } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

type TextFieldTypes = {
  children: ReactNode,
  name: string,
  label: string,
  required: boolean,
  type: string,
  register: UseFormRegister<FieldValues>,
  placeholder: string,
  ltr: boolean,
  validationSchema: object,
  errors: any,
}


const TextField = ({
  children,
  label,
  name,
  register,
  placeholder,
  ltr,
  type = "text",
  required,
  validationSchema = {},
  errors,
} : TextFieldTypes) => {
  return (
    <div>
      <label htmlFor={name} className="flex mb-1">
        {label} {required && <span className="text-rose-500">*</span>}
      </label>
      <div className="relative">
      <input
        {...register(name, validationSchema)}
        type={type}
        id={name}
        autoComplete="off"
        placeholder={placeholder}
        className={`${ltr && "dir-ltr placeholder:text-right"} textField-input placeholder:text-right`}
      />
      {children}
      </div>
      {errors && errors[name] && (
        <span className="block text-right text-rose-500 my-3 text-base">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
};

export default TextField;
