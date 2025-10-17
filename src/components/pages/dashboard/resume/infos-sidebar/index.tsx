import Link from "next/link"
import Logo from "@/assets/logo.svg"
import { AiGenerationDropdown } from "./ai-generation-dropdown"
import { Separator } from "@/components/ui/separator"
import { BasicInfoSection } from "./sections/basic-info"


export const InfosSidebar = () => {
   return (
    <aside className="w-full h-full p-6 overflow-y-auto">
        <div className="w-full flex items-center justify-between">
            <Link href="/dashboard/resumes">
            <Logo className="w-full pb-3 max-w-[240px]" />
            </Link>

            <AiGenerationDropdown />
        </div>

        <Separator className="my-2" />

        <BasicInfoSection />
    </aside>
   ) 
}