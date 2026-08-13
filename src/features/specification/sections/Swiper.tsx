'use client'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dynamic from "next/dynamic";
import { BoxIcon } from "lucide-react";
const Slider = dynamic(() => import("react-slick"), {
    ssr: false,
});

export default function Swiper() {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 280,
                settings: {
                    slidesToShow: 2,
                }
            }
        ],
        vertical: false,
        verticalSwiping: false,

    };
    return (
        <div className="slider-container">
            <Slider {...settings} className="mt-3 flex! gap-2 shrink-0 overflow-hidden">

                <div className="relative w-[90%]! h-36 rounded-2xl bg-[#F4F4F6] flex! items-center justify-center p-4 shrink-0">
                    <BoxIcon className="size-8 text-muted-foreground" />
                </div>


                <div className="relative w-[90%]! h-36 rounded-2xl bg-[#F4F4F6] flex! items-center justify-center p-4 shrink-0">
                    <BoxIcon className="size-8 text-muted-foreground" />
                </div>


                <div className="relative w-[90%]! h-36 rounded-2xl bg-[#F4F4F6] flex! items-center justify-center p-4 shrink-0">
                    <BoxIcon className="size-8 text-muted-foreground" />
                </div>


                <div className="relative w-[90%]! h-36 rounded-2xl bg-[#F4F4F6] flex! items-center justify-center p-4 shrink-0">
                    <BoxIcon className="size-8 text-muted-foreground" />
                </div>


                <div className="relative w-[90%]! h-36 rounded-2xl bg-[#F4F4F6] flex! items-center justify-center p-4 shrink-0">
                    <BoxIcon className="size-8 text-muted-foreground" />
                </div>

            </Slider>
        </div>
    );
}