import { useField } from "formik";
import { GRK } from "../../../../utils/functions";
import { useGetFieldLabel } from "../../../../hooks";
import { InputFields } from "../../../../Types/common";

interface SelectFieldTypes extends InputFields {
  options: string[];
}

const SelectField = ({
  id,
  name,
  required,
  options,
  ...props
}: SelectFieldTypes) => {
  const [field, { error, touched }] = useField(name);
  const label = useGetFieldLabel(name);
  return (
    <div className="flex flex-col gap-3 ">
      <label
        className="capitalize text-sm font-bold text-[#666D83]"
        htmlFor={id}
      >
        {label}
        {required && <span className=" text-red-600 mx-1">*</span>}
      </label>
      <select
        id={id}
        {...props}
        {...field}
        name={name}
        className={`rounded-md  placeholder:text-[#D6D8DF] capitalize border-3 "focus:border-indigo-500 focus:ring-indigo-500" ${
          !(error && touched) ? "border-[#EBEDED]" : "border-red-600"
        }`}
      >
        <option value="">-- select --</option>
        {options?.map((option) => (
          <option key={GRK(option)} className="capitalize" value={option}>
            {option}
          </option>
        ))}
      </select>

      {error && touched && (
        <p className="text-red-500 font-semibold text-sm">{error}</p>
      )}
    </div>
  );
};

export default SelectField;
