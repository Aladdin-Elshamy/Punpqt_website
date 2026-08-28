import Question from "@/shared/components/Question";

const faqs = [
  {
    title: "What is escrow and how does it protect me?",
    description:
      "Your payment is held by PUNQT — not sent to the printer — until you confirm delivery. If an order isn't delivered or doesn't match what was agreed, you can raise a dispute and receive a refund.",
  },
  {
    title: "What happens if I don't like the digital proof?",
    description:
      "You can request revisions or reject the proof entirely. Production cannot begin without your approval. If you reject a proof, you can renegotiate or cancel the order.",
  },
  {
    title: "How are printers verified?",
    description:
      "Every printer goes through a manual verification process — including business registration checks, capability assessment, and an initial quality review — before being listed on PUNQT.",
  },
  {
    title: "Can I order without a design file?",
    description:
      "Yes. You can upload files after placing an order, or specify that you need the printer to create the design. Some printers offer design services as part of their quote.",
  },
  {
    title: "What's the difference between a fixed-price order and an RFQ?",
    description:
      "Fixed-price orders have a set price per spec — configure and checkout instantly. RFQs are for custom specs where pricing varies by printer. You submit a request and receive competing quotes.",
  },
  {
    title: "What if my order arrives damaged or incorrect?",
    description:
      "Raise a dispute within 48 hours of delivery through your order page. PUNQT will mediate and may require the printer to reprint or issue a refund from escrow.",
  },
];

export default function Common() {
  return (
    <section className="relative z-20 bg-white pt-16 sm:pt-36">
      <div className="container px-6 md:px-8 lg:px-6">
        <div className="mx-auto max-w-2xl text-center font-semibold">
          <h2 className="text-2xl sm:text-3xl">Common questions</h2>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {faqs.map(({ title, description }) => (
            <Question key={title} title={title} description={description} />
          ))}
        </div>
      </div>
    </section>
  );
}
