import React from "react";
import { useField } from "formik";
import { useGetFieldLabel } from "../../../../hooks";
import { InputFields } from "../../../../Types/common";

interface RadioGroupTypes extends InputFields {
  children?: (is: boolean) => React.ReactNode;
}

const RadioGroup = ({
  id,
  name,
  required,
  children,
  ...props
}: RadioGroupTypes) => {
  const [{ onChange, ...field }, { error, touched }, { setValue }] =
    useField(name);
  const label = useGetFieldLabel(name);

  return (
    <div className="flex flex-col gap-3">
      <label
        className="capitalize text-sm font-bold text-[#666D83]"
        htmlFor={id}
      >
        {label}
        {required && <span className=" text-red-600 mx-1">*</span>}
      </label>

      <div className="flex flex-col gap-2 ">
        <label className="gap-2 flex  items-center">
          <input
            type="radio"
            id={id}
            checked={field.value}
            {...props}
            {...field}
            name={name}
            onChange={() => setValue(true)}
          />
          Yes
        </label>
        <label className="gap-2 flex items-center">
          <input
            className={`rounded-md  placeholder:text-[#D6D8DF] capitalize border-3 "focus:border-indigo-500 focus:ring-indigo-500" ${
              !(error && touched) ? "border-[#EBEDED]" : "border-red-600"
            }`}
            type="radio"
            checked={!field.value}
            id={id}
            {...props}
            {...field}
            name={name}
            onChange={() => setValue(false)}
          />
          No
        </label>
      </div>
      <div>{children?.(field.value)}</div>
      {error && touched && (
        <p className="text-red-500 font-semibold text-sm">{error}</p>
      )}
    </div>
  );
};

export default RadioGroup;
