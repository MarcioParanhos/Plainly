import { ReactNode } from "react";
import { Label } from "./label";

type FieldWarapperProps = {
  label: string;
  children: ReactNode;
};

export const FieldWarapper = ({ label, children }: FieldWarapperProps) => {
  return (
    <div className="flex flex-col gap-2">
      <Label>{label}</Label>
      {children}
    </div>
  );
};
