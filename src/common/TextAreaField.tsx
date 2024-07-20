import React from "react";
import { TextFieldType } from "src/types/textFieldType";

const TextAreaField = ({
  label,
  name,
  register,
  placeholder,
  ltr,
  required,
  validationSchema = {},
  errors,
}: TextFieldType) => {
  return (
    <div>
      <label htmlFor={name} className="flex mb-1">
        {label} {required && <span className="text-rose-500">*</span>}
      </label>
      <textarea
        {...register(name, validationSchema)}
        id={name}
        rows={6}
        autoComplete="off"
        placeholder={placeholder}
        className={`${ltr && "dir-ltr placeholder:text-right"} textField-input`}
      ></textarea>
      {errors && errors[name] && (
        <span className="block text-right text-rose-500 my-3.5 text-base">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
};

export default TextAreaField;
