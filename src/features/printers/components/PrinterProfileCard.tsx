"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import {
  Box,
  CheckCircle2,
  Clock3,
  Heart,
  MapPin,
  MessageSquare,
  Star,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export interface PrinterProfileCardProps {
  name: string;
  initials: string;
  location: string;
  description: string;
  logoUrl?: string;
  statusBadges?: ReactNode;
  serviceBadges?: ReactNode;
  isFavorite?: boolean;
  rating: number | string;
  reviewsCount: number | string;
  ordersCount: number | string;
  turnaround: string;
  onTimeRate: number | string;
  responseTime: string;
  viewProfileLabel?: string;
  messageLabel?: string;
  onMessage?: () => void;
  onFavoriteChange?: (isFavorite: boolean) => void;
  className?: string;
}

export default function PrinterProfileCard({
  name,
  initials,
  location,
  description,
  logoUrl,
  statusBadges,
  serviceBadges,
  isFavorite = false,
  rating,
  reviewsCount,
  ordersCount,
  turnaround,
  onTimeRate,
  responseTime,
  viewProfileLabel = "View Profile",
  messageLabel = "Message printer",
  onMessage,
  onFavoriteChange,
  className,
}: PrinterProfileCardProps) {
  const formatCount = (value: number | string) =>
    typeof value === "number" ? value.toLocaleString() : value;

  return (
    <Card
      className={cn(
        "@container/printer-card w-full gap-0 overflow-hidden rounded-[28px] border-0 bg-white py-0 shadow-sm ring-1 ring-black/8",
        className,
      )}
    >
      <CardContent className="p-0">
        <header className="flex flex-col gap-5 p-5 sm:p-7 pb-5! sm:flex-row justify-between items-start">
          <div className="flex min-w-0 items-center gap-4">
            <div className="relative flex size-16 shrink-0 items-center justify-center overflow-hidden rounded-3xl bg-[#101116]">
              {logoUrl ? (
                <Image
                  src={logoUrl}
                  alt={name}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              ) : (
                <span className="text-xl font-bold text-white">{initials}</span>
              )}
            </div>

            <div className="min-w-0">
              <h3 className="truncate text-lg font-semibold text-black sm:text-xl">
                {name}
              </h3>
              <p className="mt-2 flex items-center gap-1.5 text-sm font-semibold text-muted-foreground @sm/printer-card:text-base">
                <MapPin className="size-4 shrink-0" />
                <span className="truncate">{location}</span>
              </p>
            </div>
          </div>

          <div className="flex flex-wrap sm:flex-col sm:items-end justify-between gap-2 w-full sm:w-auto items-center">
            {statusBadges && (
              <div className="flex gap-2 flex-wrap sm:justify-end">{statusBadges}

              </div>
            )}
            <div className="ms-auto">
              <Button
                type="button"
                variant="ghost"
                size="icon"
                aria-label={
                  isFavorite ? "Remove from favorites" : "Add to favorites"
                }
                aria-pressed={isFavorite}
                onClick={() => onFavoriteChange?.(!isFavorite)}
                className="size-10 shrink-0 rounded-full text-muted-foreground hover:bg-primary/5 hover:text-primary"
              >
                <Heart
                  className={cn(
                    "size-6",
                    isFavorite && "fill-primary text-primary",
                  )}
                />
              </Button>
            </div>
          </div>
        </header>

        <Separator />

        <div className="space-y-6 p-5 sm:p-7">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-base font-semibold">
            <div className="flex items-end gap-2 text-black">
              <div className="flex items-center gap-1">
                <Star className="size-5 fill-amber-400 text-amber-400" />
                <span className="text-lg font-bold">{rating}</span>
              </div>
              <span className="text-muted-foreground">
                ({formatCount(reviewsCount)})
              </span>
            </div>

            <div className="flex items-end gap-2 text-muted-foreground">
              <Box className="size-5" />
              <span>{formatCount(ordersCount)} orders</span>
            </div>
          </div>

          <p className="max-w-3xl text-sm font-semibold leading-7 text-muted-foreground @sm/printer-card:text-base">
            {description}
          </p>

          <div className="grid grid-cols-1 gap-3 @sm/printer-card:grid-cols-2 @md/printer-card:grid-cols-3">
            <div className="rounded-2xl bg-[#F4F4F6] px-4 py-5 text-center">
              <Clock3 className="mx-auto size-5 text-primary" />
              <p className="mt-2 text-base font-bold text-black">{turnaround}</p>
              <p className="mt-1 text-sm font-semibold text-muted-foreground">
                Turnaround
              </p>
            </div>

            <div className="rounded-2xl bg-[#F4F4F6] px-4 py-5 text-center">
              <CheckCircle2 className="mx-auto size-5 text-primary" />
              <p className="mt-2 text-base font-bold text-black">
                {onTimeRate}
                {typeof onTimeRate === "number" ? "%" : ""}
              </p>
              <p className="mt-1 text-sm font-semibold text-muted-foreground">
                On-Time
              </p>
            </div>

            <div className="rounded-2xl bg-[#F4F4F6] px-4 py-5 text-center">
              <Zap className="mx-auto size-5 text-primary" />
              <p className="mt-2 text-base font-bold text-black">
                {responseTime}
              </p>
              <p className="mt-1 text-sm font-semibold text-muted-foreground">
                Response
              </p>
            </div>
          </div>

          {serviceBadges && (
            <div className="flex flex-wrap gap-2">{serviceBadges}</div>
          )}

          <div className="grid grid-cols-[minmax(0,1fr)_52px] gap-3">
            <Button
              type="button"
              render={<Link href="/custom-rfq">
                <span className="trim">{viewProfileLabel}</span>
              </Link>}
              nativeButton={false}
              className="h-13 rounded-3xl text-base font-medium"
            />

            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={onMessage}
              aria-label={messageLabel}
              title={messageLabel}
              className="size-13 rounded-2xl border-border bg-[#F4F4F6] text-muted-foreground"
            >
              <MessageSquare className="size-5" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}