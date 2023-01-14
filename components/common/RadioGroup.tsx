import React from "react";
import { useField } from "formik";
import { useGetFieldLabel } from "../../hooks";
import { InputFields } from "../../Types/common";
import {GRK} from "../../utils/functions";

interface RadioGroupTypes extends InputFields {
  children?: (is: boolean) => React.ReactNode;
  list: string[];
}

const RadioGroup = ({
  id,
  name,
  list,
  required,
  children,
  ...props
}: RadioGroupTypes) => {
  const [{ onChange, ...field }, { error, touched }, { setValue }] =
    useField(name);
  const label = useGetFieldLabel(name);

  return (
    <div className="flex flex-col gap-3">
      <p className={`font-bold text-sm`}>
        {label}
      </p>
      <div className="flex flex-col gap-2 ">
        {list?.map((answer) => {
          const currentId = GRK('choice');
          return (
            <label htmlFor={currentId} key={GRK('question_answer')} className="gap-2 flex  items-center">
              <input
                type="radio"
                id={currentId}
                checked={field.value === answer}
                {...props}
                {...field}
                name={name}
                onChange={() => setValue(answer)}
              />
              {answer}
            </label>
          )
        })}
      </div>
      <div>{children?.(field.value)}</div>
      {error && touched && (
        <p className="text-red-500 font-semibold text-sm">{error}</p>
      )}
    </div>
  );
};

export default RadioGroup;
