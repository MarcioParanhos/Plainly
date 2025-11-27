import { BaseDialogProps, Dialog } from "@/components/ui/dialog";
import { MultipleDragItemData } from ".";

type ManageMultipleItemDialogProps = BaseDialogProps & {
  data: MultipleDragItemData;
};

type FormConfig<T> = {
    label: string;
    key: keyof T;
    filedType?:  "text" | "editor" | "icon" | "slider" | "keywords";
    type?: string;
    placeholder?: string;
    fullWidth?: boolean;
    required?: boolean;
    className?: string;
}

export const ManageMultipleItemDialog = ({
  data,
  open,
  setOpen,
}: ManageMultipleItemDialogProps) => {
  return (
    <Dialog
      title="Adicionar novo item"
      open={open}
      setOpen={setOpen}
      content={
      <form>

      </form>
    }
    />
  );
};
