import { cn } from "@/lib/utils";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

type ProductCardProps = {
  image: StaticImageData;
  title: string;
  description: string;
  printers: string;
  products?: string;
  className?: string;
};

export default function ProductCard({
  image,
  title,
  description,
  printers,
  products,
  className,
}: ProductCardProps) {
  return (
      <article
        className={cn(
          "relative overflow-hidden hover:scale-103 transition-transform duration-300 rounded-3xl border border-black/6 bg-white p-6 shadow-sm @container/product-card",
          className,
        )}
      >
        <h3 className="text-lg font-semibold text-black">{title}</h3>
        <p className="mt-1 text-sm leading-snug font-medium text-[#55577A]">
          {description}
        </p>

        <div className="mt-14 z-20 relative font-semibold">
          <p className=" text-primary">{printers}</p>
          {products ? <p className="mt-2  text-[#6B6B80]">{products}</p> : null}
        </div>

        <Image
          src={image}
          alt={title}
          className="hidden @sm/product-card:block sm:block md:w-35 absolute md:bottom-0 md:-end-8 xl:-bottom-6 -end-12 bottom-0 h-auto w-64 sm:w-42 xl:w-54 sm:-inset-e-10 xl:-inset-e-10 z-10"
        />
      </article>
  );
}
