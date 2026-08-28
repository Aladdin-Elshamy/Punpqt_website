import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Question() {
  return (
    <aside
      className="rounded-4xl border border-border bg-muted px-7 py-7 sm:px-10 sm:py-8"
      aria-labelledby="privacy-policy-questions-heading"
    >
      <h2
        id="privacy-policy-questions-heading"
        className="text-2xl font-semibold"
      >
        Legal questions?
      </h2>
      <p className="mt-3 max-w-4xl leading-7 font-semibold text-muted-foreground sm:leading-8">
        Contact our legal team at{" "}
        <a
          className="text-primary underline-offset-4 hover:underline"
          href="mailto:privacy@punqt.com"
        >
          legal@punqt.com
        </a>{" "}
      </p>
      <div className="flex items-start flex-col sm:flex-row gap-4 mt-4">
        <Link
          href="/get-in-touch"
          className="inline-flex h-12 items-center justify-center rounded-2xl bg-primary px-6 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/80"
        >
          Contact Us
        </Link>
        <Button
          nativeButton={false}
          variant={"secondary"}
          className={" border-black/6! h-12 px-6 rounded-2xl font-semibold"}
          render={<Link href={"/privacy-policy"}>Privacy Policy</Link>}
        />
      </div>
    </aside>
  );
}
