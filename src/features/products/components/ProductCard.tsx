import Image, { type StaticImageData } from "next/image";

type ProductCardProps = {
  image: StaticImageData;
  title: string;
  description: string;
  printers: string;
  products: string;
};

export default function ProductCard({
  image,
  title,
  description,
  printers,
  products,
}: ProductCardProps) {
  return (
    <article className="relative overflow-hidden rounded-2xl border border-black/6 bg-white p-6 shadow-sm @container/product-card">
      <h3 className="text-lg font-semibold text-black">{title}</h3>
      <p className="mt-1 text-base leading-snug font-medium text-[#55577A]">
        {description}
      </p>

      <div className="mt-14 z-20 relative">
        <p className="text-lg font-bold text-primary">{printers}</p>
        <p className="mt-2 text-lg font-bold text-[#6B6B80]">{products}</p>
      </div>

      <Image
        src={image}
        alt={title}
        className="hidden @sm/product-card:block sm:block absolute md:-bottom-6 -end-12 bottom-0 h-auto w-64 sm:w-42 md:w-64 sm:-inset-e-10 md:-inset-e-12 z-10"
      />
    </article>
  );
}
