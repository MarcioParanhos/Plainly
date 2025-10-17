import { UserRound } from "lucide-react"
import { SectionTitle } from "../section-title"
import { InputField } from "@/components/ui/input/field"

export const BasicInfoSection = () => {
    return (
        <div>
            <SectionTitle title="Informações Básicas" icon={UserRound} />

            <div className="gird grid-cols-2 gap-4 mt-4 w-full">
                <div className="col-span-full w-full flex gap-3 items-end">
                    <InputField 
                        label="Foto"
                        placeholder="https://..."
                        name="content.image.url"
                        containerClassName="flex-1"
                    />
                </div>
            </div>
        </div>
    )
}