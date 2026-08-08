"use client";

import { Menu } from "lucide-react";
import logo from "@/assets/images/logo.webp";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { LangSwitcher } from "./LangSwitcher";
import { useLocale, useTranslations } from "next-intl";
import Search from "@/shared/icons/Search";
import Cart from "@/shared/icons/Cart";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface Navbar1Props {
  className?: string;
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
    className?: string;
  };
  menu?: MenuItem[];
  auth?: {
    login: {
      title: string;
      url: string;
    };
    signup: {
      title: string;
      url: string;
    };
  };
}

const Navbar = ({ className }: Navbar1Props) => {
  const t = useTranslations("Navbar");
  const locale = useLocale();
  const pathname = usePathname();

  const menu: MenuItem[] = [
    {
      title: t("menu.products"),
      url: "/products",
    },
    {
      title: t("menu.printers"),
      url: "#",
    },
    {
      title: t("menu.customRfq"),
      url: "#",
    },
  ];

  const auth = {
    login: { title: t("auth.login"), url: "#" },
    signup: { title: t("auth.signup"), url: "#" },
  };

  return (
    <section
      className={cn("py-6 sticky border-b top-0 z-50 bg-white/75", className)}
    >
      <div className="px-6 mx-auto md:px-8 lg:px-12 xl:px-0 xl:container">
        {/* Desktop Menu */}
        <nav className="hidden items-center justify-between lg:flex">
          <div className="flex items-center gap-6">
            {/* Logo */}
            <Link href={"/"} className="flex items-center gap-2">
              <Image
                src={logo}
                className="max-w-28 dark:invert"
                alt={"Punpqt"}
              />
            </Link>
            <div className="ms-32 flex items-center">
              <NavigationMenu>
                <NavigationMenuList>
                  {menu.map((item) =>
                    renderMenuItem(item, pathname === "/" + item.url),
                  )}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <Button size="xs" variant={"ghost"}>
              <Search className="text-[#6B6B80] w-5! h-5!" />
            </Button>
            <Button size="xs" variant={"ghost"} className={"relative"}>
              <Cart className="text-[#6B6B80] w-5! h-5!" />
              <div className="absolute ps-[0.5px] pb-[0.5px] bg-white -top-1 end-1 text-white ">
                <span className="w-4 bg-primary flex items-center justify-center rounded-xl">
                  0
                </span>
              </div>
            </Button>
            <LangSwitcher />
            <Button
              size="sm"
              className={"h-10 px-6 text-sm rounded-xl font-medium"}
            >
              <Link href={auth.login.url}>{auth.login.title}</Link>
            </Button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href={"/"} className="flex items-center gap-2">
              <Image
                src={logo}
                className="max-w-24 dark:invert"
                alt={"Punpqt"}
              />
            </Link>
            <Sheet>
              <SheetTrigger>
                <Menu className="size-4" />
              </SheetTrigger>
              <SheetContent
                side={locale === "ar" ? "left" : "right"}
                className="overflow-y-auto"
              >
                <SheetHeader>
                  <SheetTitle>
                    <a href={"#"} className="flex items-center gap-2">
                      <Image
                        src={logo}
                        className="max-w-24 dark:invert"
                        alt={"Punpqt"}
                      />
                    </a>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 p-4">
                  <Accordion className="flex w-full flex-col gap-4">
                    {menu.map((item) =>
                      renderMobileMenuItem(item, pathname === "/" + item.url),
                    )}
                  </Accordion>

                  <div className="flex flex-col gap-3">
                    <LangSwitcher />
                    <Button variant="outline">
                      <a href={auth.login.url}>{auth.login.title}</a>
                    </Button>
                    <Button>
                      <a href={auth.signup.url}>{auth.signup.title}</a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

const renderMenuItem = (item: MenuItem, isActive: boolean) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
        <NavigationMenuContent className="bg-popover text-popover-foreground">
          {item.items.map((subItem) => (
            <NavigationMenuLink key={subItem.title} className="w-80">
              <SubMenuLink item={subItem} />
            </NavigationMenuLink>
          ))}
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink
        render={<Link href={item.url}>{item.title}</Link>}
        href={item.url}
        className={`group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm transition-colors hover:bg-muted hover:text-accent-foreground text-[#6B6B80] font-semibold ${isActive ? "border-b-4 rounded-none border-[#00645D] text-[#00645D]" : ""}`}
      />
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem, isActive: boolean) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <SubMenuLink key={subItem.title} item={subItem} />
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <Link key={item.title} href={item.url} className={`text-md font-semibold ${isActive ? 'border-b-2 border-[#00645D] text-[#00645D]': ''}`}>
      {item.title}
    </Link>
  );
};

const SubMenuLink = ({ item }: { item: MenuItem }) => {
  return (
    <a
      className="flex min-w-80 flex-row gap-4 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-muted hover:text-accent-foreground"
      href={item.url}
    >
      <div className="text-foreground">{item.icon}</div>
      <div>
        <div className="text-sm font-semibold">{item.title}</div>
        {item.description && (
          <p className="text-sm leading-snug text-muted-foreground">
            {item.description}
          </p>
        )}
      </div>
    </a>
  );
};

export default Navbar;
