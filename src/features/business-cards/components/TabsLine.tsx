import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function TabsLine({ tabs }: {
    tabs: { value: string, label: string }[]
}) {
    return (
            <TabsList className={"order-2 xl:order-1"} variant="line">
                {tabs.map((tab) => (
                    <TabsTrigger className={"font-semibold! h-12"} key={tab.value} value={tab.value}>{tab.label}</TabsTrigger>
                ))}

            </TabsList>
    )
}
