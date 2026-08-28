import { Button } from "@/components/ui/button";
import Question from "@/shared/components/Question";
import { Printer } from "lucide-react";

const questions = [
  {
    title: "How does escrow protection work?",
    description: "Your payment is held securely until you confirm delivery. The printer only receives payment once you approve the delivered product, protecting you from non-delivery or quality issues.",
  },
  {
    title: "How do I become a vendor on PUNQT?",
    description: 'Fill out the contact form selecting "Become a Vendor". Our vendor success team will reach out within 2 business days to begin the onboarding process.',
  },
  {
    title: "What if my order doesn't match the specification?",
    description: "Raise a dispute within 48 hours of delivery through your order page. Our team will mediate and ensure the issue is resolved — including reprinting or a refund if warranted.",
  },
  {
    title: "Can I get a sample before placing a full order?",
    description: "Yes. For most product types, you can request a physical sample for a small fee before committing to a full order. Contact us or ask the printer directly through the platform.",
  },
];

export default function CommonQuestions() {
  return (
    <section aria-labelledby="common-questions-heading">
      <h2 id="common-questions-heading" className="text-xl font-semibold">Common questions</h2>
      <p className="mt-2 text-sm font-medium text-muted-foreground">
        Quick answers to the most frequent questions.
      </p>

      <div className="mt-8 space-y-3">
        {questions.map(({ title, description }) => (
          <Question key={title} title={title} description={description} />
        ))}
      </div>

      <aside className="mt-5 rounded-3xl bg-primary p-6 text-primary-foreground">
        <div className="flex items-center gap-3">
          <Printer className="size-5" aria-hidden="true" />
          <h3 className="font-semibold">Own a printing business?</h3>
        </div>
        <p className="mt-3 max-w-md ps-8 text-xs leading-5 font-medium text-primary-foreground/90">
          Join 150+ verified printers on PUNQT. Get a steady stream of qualified orders with no marketing spend.
        </p>
        <Button type="button" className="mt-4 ms-8 h-8 rounded-xl bg-white px-4 text-xs text-primary hover:bg-white/90">
          Apply to become a vendor
        </Button>
      </aside>
    </section>
  );
}