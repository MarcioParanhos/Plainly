import Link from "next/link";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ResumeCardButtonProps = {
  title: string;
  description: string;
  icon?: ReactNode;
};

export const ResumeCardButton = ({
  title,
  description,
  icon,
}: ResumeCardButtonProps) => {
  return (
    <button
      className={cn(
        "w-full h-[300px] bg-muted/50 rounded border border-muted-foreground/20",
        " flex items-center justify-center relative outline-none overflow-hidden",
        "hover:brightness-105 dark:hover:brightness-125 transition-all"
      )}
    >
      {icon}

      <div className="absolute w-full left-0 bottom-0 p-3 text-left bg-gradient-to-t from-background/80">
        <p className="text-sm font-semibold ">{title}</p>
        <span className="block text-xs text-muted-foreground">{description}</span>
      </div>
    </button>
  );
};

export const ResumeCard = () => {
  return (
    <Link href="/dashboard/resumes/example" className="bloc w-full">
        <ResumeCardButton title="Meu Curriculo" description="Ultima Atualização há 22 minutos"/>
    </Link>
  );
};
