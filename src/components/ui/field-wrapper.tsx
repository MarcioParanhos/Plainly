import { ReactNode } from "react";
import { Label } from "./label";
import { cn } from "@/lib/utils";

type FieldWarapperProps = {
  label: string;
  children: ReactNode;
  className?: string;
};

export const FieldWarapper = ({ label, children, className }: FieldWarapperProps) => {
  return (
    <div className={cn ("flex flex-col gap-2", className)}>
      <Label>{label}</Label>
      {children}
    </div>
  );
};
