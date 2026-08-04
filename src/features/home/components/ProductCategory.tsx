import Image, { StaticImageData } from "next/image";

export default function ProductCategory({
  title,
  description,
  src
}: {
  title: string;
  description: string;
  src: StaticImageData;
}) {
  return (
    <div className="border rounded-2xl shadow-sm py-1">
      <div className="flex flex-row items-center">
        <Image src={src} alt={title} className="max-w-30" />
        <div className="flex flex-col items-start">
          {title && <h4 className="font-semibold">{title}</h4>}
          {description && (
            <p className="text-muted-foreground">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
}
