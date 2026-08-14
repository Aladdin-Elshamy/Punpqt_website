import { BoxIcon } from "lucide-react";
import Swiper from "./Swiper";


export default function Gallery() {


    return (
        <section className="min-w-0 w-full flex-col">

            <div className="relative w-full h-92 sm:h-113 rounded-2xl bg-[#F4F4F6] flex items-center justify-center p-4">
                <BoxIcon className="size-16 text-muted-foreground" />
            </div>
            <Swiper />
        </section>

    )
}