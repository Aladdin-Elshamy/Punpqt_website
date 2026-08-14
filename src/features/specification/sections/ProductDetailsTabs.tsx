import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs";
import ProductDescription from "./ProductDescription";
import ProductReviews from "./ProductReviews";
import { TabsLine } from "@/shared/components/TabsLine";

export default function ProductDetailsTabs() {
    return (
        <section className="container mx-auto px-6 pb-20 md:px-8 lg:px-6 2xl:px-0">
            <Tabs defaultValue="description" className="w-full gap-0">
                <TabsLine
                    tabs={[
                        { value: "description", label: "Description" },
                        { value: "reviews", label: "Reviews (1,240)" },
                    ]}
                />

                <TabsContent value="description">
                    <ProductDescription />
                </TabsContent>
                <TabsContent value="reviews">
                    <ProductReviews />
                </TabsContent>
            </Tabs>
        </section>
    );
}