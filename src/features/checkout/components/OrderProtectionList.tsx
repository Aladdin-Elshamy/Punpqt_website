import Check from "@/shared/icons/Check";
import Shield from "@/shared/icons/Shield";

export default function OrderProtectionList() {
  return (
    <>
      <div className="my-5 border-t border-border/80" />
      <div className="grid gap-2 font-semibold">
        <p className="flex items-center gap-2 text-xs text-muted-foreground">
          <Shield className="size-4 text-primary" />
          Escrow protected payment
        </p>
        <p className="flex items-center gap-2 text-xs text-muted-foreground">
          <Check className="size-4 text-primary" />
          Sample approval before production
        </p>
      </div>
    </>
  );
}