'use client'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dynamic from "next/dynamic";
import { BoxIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
const Slider = dynamic(() => import("react-slick"), {
    ssr: false,
});

function getSlidesToShow(width: number) {
    if (width >= 1280) return 5;
    if (width >= 1024) return 4;
    if (width >= 600) return 3;
    return 2;
}

export default function Swiper() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [slidesToShow, setSlidesToShow] = useState(1);

    useEffect(() => {
        const container = containerRef.current;

        if (!container) return;

        const updateSlidesToShow = (width: number) => {
            setSlidesToShow((current) => {
                const next = getSlidesToShow(width);
                return current === next ? current : next;
            });
        };

        updateSlidesToShow(container.getBoundingClientRect().width);

        const observer = new ResizeObserver(([entry]) => {
            updateSlidesToShow(entry.contentRect.width);
        });

        observer.observe(container);

        return () => observer.disconnect();
    }, []);

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow,
        slidesToScroll: 1,
        swipeToSlide: true,
        vertical: false,
        verticalSwiping: false,

    };
    return (
        <div ref={containerRef} className="slider-container min-w-0 w-full">
            <Slider {...settings} className="mt-3">

                <div className="px-2">
                    <div className="flex h-36 items-center justify-center rounded-2xl bg-[#F4F4F6] p-4">
                        <BoxIcon className="size-8 text-muted-foreground" />
                    </div>
                </div>
                <div className="px-2">
                    <div className="flex h-36 items-center justify-center rounded-2xl bg-[#F4F4F6] p-4">
                        <BoxIcon className="size-8 text-muted-foreground" />
                    </div>
                </div>
                <div className="px-2">
                    <div className="flex h-36 items-center justify-center rounded-2xl bg-[#F4F4F6] p-4">
                        <BoxIcon className="size-8 text-muted-foreground" />
                    </div>
                </div>
                <div className="px-2">
                    <div className="flex h-36 items-center justify-center rounded-2xl bg-[#F4F4F6] p-4">
                        <BoxIcon className="size-8 text-muted-foreground" />
                    </div>
                </div>
                <div className="px-2">
                    <div className="flex h-36 items-center justify-center rounded-2xl bg-[#F4F4F6] p-4">
                        <BoxIcon className="size-8 text-muted-foreground" />
                    </div>
                </div>
            </Slider>
        </div>
    );
}