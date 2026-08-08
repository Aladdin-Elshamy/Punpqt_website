import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

type PopularProductProps = {
  image: StaticImageData;
  title: string;
  description: string;
  link: string;
};

export default function PopularProduct({
  image,
  title,
  description,
  link
}: PopularProductProps) {
  return (
    <Link href={link}>
      <article className="overflow-hidden hover:scale-103 transition-transform duration-300 rounded-2xl border border-black/5 bg-white shadow-sm relative @container/popular-product">
        <div className=" h-28 bg-[linear-gradient(90deg,#F4F4F6_0%,#00645D_100%)]"></div>
        <Image src={image} alt={title} className="sm:block absolute top-5 @sm/popular-product:max-w-72 @sm/popular-product:-top-5 @md/popular-product:max-w-84 @md/popular-product:-inset-e-20 @md/popular-product:-top-10  -inset-e-10 max-w-50" />

        <div className="p-4 pb-5">
          <h3 className="text-sm font-semibold text-black">{title}</h3>
          <p className="mt-1 text-xs font-semibold text-[#6B6B80]">{description}</p>
        </div>
      </article>
    </Link>
  );
}
