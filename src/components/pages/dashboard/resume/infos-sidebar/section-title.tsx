import { LucideIcon } from "lucide-react";

type SectionTitleProps = {
  icon: LucideIcon;
  title: string;
};

export const SectionTitle = ({ icon: Icon, title }: SectionTitleProps) => {
  return (
    <div className="flex items-center gap2">
      <Icon size={18} className="text-muted-foreground" />
      <h3 className="text-2xl ">{title}</h3>
    </div>
  );
};
