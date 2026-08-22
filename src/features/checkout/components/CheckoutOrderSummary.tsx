import { Card, CardContent } from "@/components/ui/card";
import Check from "@/shared/icons/Check";
import Shield from "@/shared/icons/Shield";
import { CheckCircle2, ShieldCheck } from "lucide-react";

export interface CheckoutProduct {
  id: string;
  title: string;
  quantity: string;
  price: string;
  filesCount : number;
}

interface CheckoutOrderSummaryProps {
  products: CheckoutProduct[];
  showFileStatus?: boolean;
}

export default function CheckoutOrderSummary({
  products,
  showFileStatus = false,
}: CheckoutOrderSummaryProps) {
  return (
    <Card className="gap-0 rounded-2xl border border-border/80 py-0 shadow-sm ring-0 bg-white">
      <CardContent className="p-5">
        <h2 className="text-base font-semibold text-black">Order Summary</h2>

        <dl className="mt-5 space-y-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex items-start justify-between gap-4 text-sm"
            >
              <div>
                <dt className="font-semibold text-muted-foreground">
                  {product.title}
                </dt>
                <dd className="mt-1 text-xs font-semibold text-muted-foreground">
                  {product.quantity}
                </dd>
              </div>
              <dd className="shrink-0 font-semibold text-foreground">
                {product.price}
              </dd>
            </div>
          ))}

          <div className="flex items-center justify-between gap-4 text-sm">
            <dt className="font-semibold text-muted-foreground">Delivery</dt>
            <dd className="font-semibold text-foreground">EGP 80</dd>
          </div>
        </dl>

        <div className="my-5 border-t border-border/80" />

        <div className="flex items-center justify-between gap-4">
          <p className="font-semibold text-foreground">Total</p>
          <p className="text-lg font-semibold text-primary">EGP 620</p>
        </div>

        {showFileStatus && (
          <>
            <div className="my-5 border-t border-border/80" />
            <p className="text-xs font-bold tracking-wide text-muted-foreground uppercase">
              Files
            </p>
            <ul className="mt-3 grid gap-2">
              {products.map((product) => (
                <li
                  key={product.id}
                  className="flex items-center font-semibold justify-between gap-3 text-sm"
                >
                  <div className={"flex items-center gap-1.5 text-foreground"}>
                    {product?.filesCount > 0 ? (
                      <span className="flex items-center justify-center rounded-full bg-primary p-1 text-white">
                        <Check className="size-2.5 text-white" />
                      </span>
                    ) : (
                      <span className="flex items-center justify-center rounded-full bg-muted-foreground p-2 text-white" />

                    )}
                    {product.title}
                  </div>
                  <span className="font-normal text-primary">
                    {product?.filesCount > 0 ? `${product.filesCount} files` : "—"}
                  </span>
                </li>
              ))}
            </ul>
          </>
        )}

        <div className="my-5 border-t border-border/80" />

        <div className="grid gap-2 font-semibold">
          <p className="flex items-center gap-2 text-xs text-muted-foreground">
            <Shield className="size-3.5 text-primary" />
            Escrow protected payment
          </p>
          <p className="flex items-center gap-2 text-xs text-muted-foreground">
            <Check className="size-3.5 text-primary" />
            Sample approval before production
          </p>
        </div>
      </CardContent>
    </Card>
  );
}