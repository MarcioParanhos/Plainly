"use client"

import { BaseDialogProps, Dialog } from "@/components/ui/dialog";

type FormData = {
    title: string;
}

export const NewResumeDialog = (props: BaseDialogProps) => {
  return (
    <Dialog
      {...props}
      title="Cirar novo Currículo"
      description="Para começar, Escolha um titulo para seu currículo"
      content={<form></form>}
    />
  );
};
