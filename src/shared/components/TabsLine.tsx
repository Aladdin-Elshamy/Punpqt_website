import { TabsList, TabsTrigger } from "@/components/ui/tabs"

export function TabsLine({ tabs, className }: {
    tabs: { value: string, label: string }[]
    className?: string
}) {
    return (
            <TabsList className={`${className}`} variant="line">
                {tabs.map((tab) => (
                    <TabsTrigger className={"font-semibold! h-12"} key={tab.value} value={tab.value}>{tab.label}</TabsTrigger>
                ))}

            </TabsList>
    )
}
