import { Controller, useFormContext } from "react-hook-form";
import { Input } from ".";
import { ComponentProps } from "react";
import { FieldWarapper } from "../field-wrapper";

type InputFieldProps = ComponentProps<typeof Input> & {
  label: string;
  name: string;
  containerClassName?: string;
};

export const InputField = ({ label, name, required, containerClassName, ...props }: InputFieldProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      rules={{
        required: required && "Campo obrigatório"
      }}
      render={({ field, fieldState }) => (
        <FieldWarapper label={label} className={containerClassName}>
          <Input {...props} {...field} />
          {fieldState.error && (
            <p className="text-sm text-red-500 font-semibold">
                {fieldState.error.message}
            </p>
          )}
        </FieldWarapper>
      )}
    />
  );
};
