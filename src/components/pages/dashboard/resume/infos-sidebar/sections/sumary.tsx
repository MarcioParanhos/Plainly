import { ScrollText } from "lucide-react";
import { SectionTitle } from "../section-title";
import { Controller, useFormContext } from "react-hook-form";
import { Editor } from "@/components/ui/editor";

export const SumarySection = () => {
    const { control } = useFormContext();
  return (
    <div>
      <SectionTitle title="Sobre Você" icon={ScrollText} />

      <Controller
        control={control}
        name="content.sumary"
        render={({ field }) => <Editor {...field} className="min-h-[200px] max-h-[300px]: mt-4"/>}
      />
    </div>
  );
};
