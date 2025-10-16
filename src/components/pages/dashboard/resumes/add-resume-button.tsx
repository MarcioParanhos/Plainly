import { Plus } from "lucide-react";
import { ResumeCardButton } from "./resume-card";

export const AddResumeButton = () => {
  return (
    <ResumeCardButton
      title="Criar novo Currículo"
      description="Começe do zero"
      icon={<Plus size={50} />}
    />
  );
};
