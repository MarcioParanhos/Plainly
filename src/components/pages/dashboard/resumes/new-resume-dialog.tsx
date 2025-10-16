"use client";

import { Button } from "@/components/ui/button";
import { BaseDialogProps, Dialog } from "@/components/ui/dialog";
import { InputField } from "@/components/ui/input/field";
import { FilePlus2, Plus } from "lucide-react";
import { FormProvider, useForm } from "react-hook-form";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";

type FormData = {
  title: string;
};

export const NewResumeDialog = (props: BaseDialogProps) => {
  const methods = useForm<FormData>();
  const onSubmit = (data: FormData) => {
    console.log(data);
  };
  return (
    <Dialog
      {...props}
      title="Cirar novo Currículo"
      description="Para começar, Escolha um titulo para seu currículo"
      content={
        <TooltipProvider>
          <FormProvider {...methods}>
            <form className="flex flex-col" onSubmit={methods.handleSubmit(onSubmit)}>
              <InputField label="Título" name="title" required />
              <Tooltip>
                <TooltipTrigger>
                  <Button type="submit" className="w-max mt-6 ml-auto flex items-end">
                    <FilePlus2 />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right">
                  <p>Criar novo Currículo</p>
                </TooltipContent>
              </Tooltip>
            </form>
          </FormProvider>
        </TooltipProvider>
      }
    />
  );
};
