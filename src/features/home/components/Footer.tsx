import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import QLogo from "@/shared/icons/QLogo";
import { JetBrains_Mono } from "next/font/google";
import { useTranslations } from "next-intl";

const jetBrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
});

const footerSections = [
  {
    titleKey: "sections.products.title",
    links: [
      "sections.products.links.businessCards",
      "sections.products.links.flyers",
      "sections.products.links.brochures",
      "sections.products.links.packaging",
      "sections.products.links.posters",
      "sections.products.links.banners",
    ],
  },
  {
    titleKey: "sections.services.title",
    links: [
      "sections.services.links.customRfq",
      "sections.services.links.findPrinters",
      "sections.services.links.sampleApproval",
      "sections.services.links.orderTracking",
      "sections.services.links.bulkOrders",
    ],
  },
  {
    titleKey: "sections.company.title",
    links: [
      "sections.company.links.about",
      "sections.company.links.careers",
      "sections.company.links.blog",
      "sections.company.links.helpCenter",
      "sections.company.links.trustSafety",
    ],
  },
  {
    titleKey: "sections.printers.title",
    links: [
      "sections.printers.links.becomeVendor",
      "sections.printers.links.vendorDashboard",
      "sections.printers.links.pricing",
      "sections.printers.links.resources",
    ],
  },
];

const socials = [
  {
    icon: "X",
    href: "#",
    labelKey: "socials.twitter",
  },
  {
    icon: "Li",
    href: "#",
    labelKey: "socials.linkedIn",
  },
  {
    icon: "Ig",
    href: "#",
    labelKey: "socials.instagram",
  },
  {
    icon: "Fb",
    href: "#",
    labelKey: "socials.facebook",
  },
];

const legalLinks = [
  {
    labelKey: "legal.privacy",
    href: "#",
  },
  {
    labelKey: "legal.terms",
    href: "#",
  },
  {
    labelKey: "legal.cookies",
    href: "#",
  },
];

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid gap-12 grid-cols-2 md:grid-cols-3 lg:grid-cols-[320px_repeat(4,minmax(0,1fr))]">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-1">
            <Link href="/" className="flex items-center gap-3">
              <QLogo />

              <div>
                <h2 className="font-semibold tracking-wide">PUNQT</h2>
                <p className="text-sm text-white/70 font-medium">
                  {t("brand.tagline")}
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-xs text-base font-medium leading-7 text-white/40">
              {t("brand.description")}
            </p>

            <div className="mt-8 flex gap-3">
              {socials.map(({ icon, href, labelKey }) => (
                <Button
                  key={labelKey}
                  variant="outline"
                  size="icon"
                  className="h-10 w-10 rounded-lg border-white/10 bg-white/5 text-white/50 hover:bg-white/10 hover:text-white"
                >
                  <Link
                    href={href}
                    className={`font-normal ${jetBrains.className}`}
                    aria-label={t(labelKey)}
                  >
                    {icon}
                  </Link>
                </Button>
              ))}
            </div>
          </div>

          {/* Navigation */}
          {footerSections.map((section) => (
            <nav key={section.titleKey}>
              <h3 className="mb-5 text-sm font-semibold">
                {t(section.titleKey)}
              </h3>

              <ul className="space-y-3">
                {section.links.map((linkKey) => (
                  <li key={linkKey}>
                    <Link
                      href="#"
                      className="text-sm text-white/40 font-medium transition-colors hover:text-white"
                    >
                      {t(linkKey)}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <Separator className="my-12 bg-white/10" />

        <div className="flex flex-col items-center justify-between gap-6 text-sm text-white/25 md:flex-row font-medium">
          <p>{t("legal.copyright")}</p>

          <div className="flex gap-8">
            {legalLinks.map(({ labelKey, href }) => (
              <Link key={labelKey} href={href} className="hover:text-white">
                {t(labelKey)}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}