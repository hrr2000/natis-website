import React from "react";
import { useField } from "formik";
import { useGetFieldLabel } from "../../hooks";
import { InputFields } from "../../Types/common";

const InputField = ({ name, id, required, textarea, rows, ...props }: InputFields) => {
  const [field, { error, touched }] = useField(name);
  const label = useGetFieldLabel(name);
  return (
    <div className="flex flex-col gap-3 ">
      <label className="capitalize  font-bold text-label" htmlFor={id}>
        {label}
        {required && <span className=" text-red-600 mx-1">*</span>}
      </label>
      {textarea ? (
        <textarea  className={`rounded-md  placeholder:text-placeholder border-3 focus:border-secondary focus:ring-secondary ${
          !(error && touched) ? "border-border" : "border-red-600"
        }`}
                   {...props}
                   {...field}
                   name={name}
                   id={id}
                   placeholder={`${label || ''}...`} rows={rows || 10} >
        </textarea>
      ) : (
        <input
          className={`rounded-md  placeholder:text-placeholder border-3 focus:border-secondary focus:ring-secondary ${
            !(error && touched) ? "border-border" : "border-red-600"
            }`}
          {...props}
          {...field}
          name={name}
          type={`text`}
          id={id}
          placeholder={`${label}...`}
        />
      )}
      {error && touched && (
        <p className="text-red-500 font-semibold text-sm">{error}</p>
      )}
    </div>
  );
};

export default InputField;
