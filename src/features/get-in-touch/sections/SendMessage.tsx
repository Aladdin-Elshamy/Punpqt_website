"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { BriefcaseBusiness, CircleHelp, MessageSquare, Send } from "lucide-react";
import { useTranslations } from "next-intl";

export default function SendMessage() {
  const t = useTranslations("GetInTouch.form");

  const topics = [
    { label: t("topics.general"), value: "general", icon: MessageSquare },
    { label: t("topics.order"), value: "order", icon: CircleHelp },
    { label: t("topics.vendor"), value: "vendor", icon: BriefcaseBusiness },
    { label: t("topics.other"), value: "other", icon: CircleHelp },
  ];

  return (
    <section aria-labelledby="send-message-heading">
      <h2 id="send-message-heading" className="text-xl font-semibold">
        {t("title")}
      </h2>
      <p className="mt-2 text-sm font-medium text-muted-foreground">
        {t("subtitle")}
      </p>

      <form className="mt-8 space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="full-name" className="text-xs font-semibold">
              {t("fullName")} <span aria-hidden="true">*</span>
            </label>
            <Input id="full-name" name="fullName" autoComplete="name" placeholder="Ahmed Hassan" required className="mt-2 h-11 rounded-2xl border-black/6 bg-[#F4F4F6] px-4 shadow-none" />
          </div>
          <div>
            <label htmlFor="email" className="text-xs font-semibold">
              {t("email")} <span aria-hidden="true">*</span>
            </label>
            <Input id="email" name="email" type="email" autoComplete="email" placeholder="you@company.com" required className="mt-2 h-11 rounded-2xl border-black/6 bg-[#F4F4F6] px-4 shadow-none" />
          </div>
        </div>

        <div>
          <label htmlFor="phone" className="text-xs font-semibold">{t("phone")}</label>
          <Input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="+20 10 xxxx xxxx" className="mt-2 h-11 rounded-2xl border-black/6 bg-[#F4F4F6] px-4 shadow-none" />
        </div>

        <fieldset>
          <legend className="text-xs font-semibold">{t("topic")}</legend>
          <div className="mt-2 grid gap-2 sm:grid-cols-2" role="radiogroup">
            {topics.map(({ label, value, icon: Icon }) => (
              <label key={value} className="flex h-8 cursor-pointer items-center gap-2 rounded-2xl border border-black/6 px-3 text-xs font-semibold transition-colors has-[:checked]:border-primary has-[:checked]:bg-[#E8F4F4] has-[:checked]:text-primary">
                <input type="radio" name="topic" value={value} defaultChecked={value === "general"} className="sr-only" />
                <Icon className="size-3.5" aria-hidden="true" />
                {label}
              </label>
            ))}
          </div>
        </fieldset>

        <div>
          <label htmlFor="message" className="text-xs font-semibold">
            {t("message")} <span aria-hidden="true">*</span>
          </label>
          <Textarea id="message" name="message" placeholder={t("messagePlaceholder")} required className="mt-2 min-h-25 resize-y rounded-2xl border-black/6 bg-[#F4F4F6] px-4 py-3 shadow-none" />
        </div>

        <Button type="button" className="h-11 w-full rounded-2xl font-semibold">
          <Send className="size-4" aria-hidden="true" />
          {t("submit")}
        </Button>
      </form>
    </section>
  );
}