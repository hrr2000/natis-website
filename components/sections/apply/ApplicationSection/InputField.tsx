import React from "react";
import { useField } from "formik";
import { useGetFieldLabel } from "../../../../hooks";
import { InputFields } from "../../../../Types/common";

const InputField = ({ name, id, required, ...props }: InputFields) => {
  const [field, { error, touched }] = useField(name);
  const label = useGetFieldLabel(name);
  return (
    <div className="flex flex-col gap-3 ">
      <label className="capitalize  font-bold text-label" htmlFor={id}>
        {label}
        {required && <span className=" text-red-600 mx-1">*</span>}
      </label>
      <input
        className={`rounded-md  placeholder:text-placeholder capitalize border-3 focus:border-secondary focus:ring-secondary ${
          !(error && touched) ? "border-border" : "border-red-600"
        }`}
        {...props}
        {...field}
        name={name}
        type="text"
        id={id}
        placeholder={`${label}...`}
      />
      {error && touched && (
        <p className="text-red-500 font-semibold text-sm">{error}</p>
      )}
    </div>
  );
};

export default InputField;
