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
      { key: "sections.products.links.businessCards", href: "/products/business-cards" },
      { key: "sections.products.links.flyers", href: "/products/flyers" },
      { key: "sections.products.links.brochures", href: "/products/brochures" },
      { key: "sections.products.links.packaging", href: "/products/packaging" },
      { key: "sections.products.links.posters", href: "/products/posters" },
      { key: "sections.products.links.banners", href: "/products/banners" },
    ],
  },
  {
    titleKey: "sections.services.title",
    links: [
      { key: "sections.services.links.customRfq", href: "/custom-rfq" },
      { key: "sections.services.links.findPrinters", href: "/printers" },
      { key: "sections.services.links.sampleApproval", href: "#" },
      { key: "sections.services.links.orderTracking", href: "#" },
      { key: "sections.services.links.bulkOrders", href: "#" },
    ],
  },
  {
    titleKey: "sections.company.title",
    links: [
      { key: "sections.company.links.about", href: "/who-we-are" },
      { key: "sections.company.links.careers", href: "/careers" },
      { key: "sections.company.links.blog", href: "/blog" },
      { key: "sections.company.links.helpCenter", href: "/help-center" },
      { key: "sections.company.links.trustSafety", href: "/trust-safety" },
    ],
  },
  {
    titleKey: "sections.printers.title",
    links: [
      { key: "sections.printers.links.becomeVendor", href: "#" },
      { key: "sections.printers.links.vendorDashboard", href: "#" },
      { key: "sections.printers.links.pricing", href: "#" },
      { key: "sections.printers.links.resources", href: "#" },
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
    href: "/privacy-policy",
  },
  {
    labelKey: "legal.terms",
    href: "/terms-conditions",
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
      <div className="container px-6 py-16">
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
                  <li key={linkKey.key}>
                    <Link
                      href={linkKey.href}
                      className="text-sm text-white/40 font-medium transition-colors hover:text-white"
                    >
                      {t(linkKey.key)}
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
