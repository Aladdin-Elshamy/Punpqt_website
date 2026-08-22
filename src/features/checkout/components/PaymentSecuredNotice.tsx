import Check from "@/shared/icons/Check";

interface PaymentSecuredNoticeProps {
  total: string;
}

export default function PaymentSecuredNotice({
  total,
}: PaymentSecuredNoticeProps) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-primary/20 bg-primary/10 px-5 py-4">
      <span className="flex items-center justify-center rounded-full bg-primary p-2 text-white">
        <Check className="size-5 text-white" />
      </span>
      <div>
        <p className="text-sm font-semibold text-primary">
          Payment secured — {total} in escrow
        </p>
        <p className="mt-1 text-xs font-semibold text-muted-foreground">
          Now upload your design files so printers can start reviewing.
        </p>
      </div>
    </div>
  );
}