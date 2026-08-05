import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Badge } from "../../components/ui/badge";

interface Link {
  label: string;
  url: string;
}

export default function BreadcrumbBasic({ links }: { links: Link[] }) {
  if (!links.length) {
    return null;
  }

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {links.map((link, index) => {
          const isLastItem = index === links.length - 1;

          return (
            <BreadcrumbItem key={`${link.label}-${link.url}`}>
              {isLastItem ? (
                <BreadcrumbPage>
                  <Badge className="h-10! bg-[#e8f4f4] font-semibold px-4 text-[#0A5C5F] border-[#0D73771A]">
                    {link.label}
                  </Badge>
                </BreadcrumbPage>
              ) : (
                <BreadcrumbLink href={link.url}>
                  <Badge className="h-10! bg-[#e8f4f4] font-semibold px-4 text-[#0A5C5F] border-[#0D73771A]">
                    {link.label}
                  </Badge>
                </BreadcrumbLink>
              )}
              {!isLastItem && <BreadcrumbSeparator>/</BreadcrumbSeparator>}
            </BreadcrumbItem>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
