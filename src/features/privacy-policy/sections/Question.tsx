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
        Questions about this policy?
      </h2>
      <p className="mt-3 max-w-4xl leading-7 font-semibold text-muted-foreground sm:leading-8">
        If you have any questions about how we handle your data, please contact
        our Data Protection team at{" "}
        <a
          className="text-primary underline-offset-4 hover:underline"
          href="mailto:privacy@punqt.com"
        >
          privacy@punqt.com
        </a>{" "}
        or through our contact page.
      </p>
      <Link
        href="/get-in-touch"
        className="mt-6 inline-flex h-12 items-center justify-center rounded-3xl bg-primary px-6 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/80"
      >
        Contact Us
      </Link>
    </aside>
  );
}
