import Link from "next/link";
import Question from "./Question";

type TermsItem = {
  title: string;
  description: string;
};

type TermsSection = {
  title: string;
  description?: string;
  items?: TermsItem[];
};

const termsSections: TermsSection[] = [
  {
    title: "Acceptance of Terms",
    description:
      'By accessing or using the PUNQT platform ("the Platform"), you agree to be bound by these Terms and Conditions. If you do not agree to these terms, you may not use the Platform. These terms apply to all visitors, customers, and registered vendors.',
  },
  {
    title: "Platform Description",
    description:
      'PUNQT is an online marketplace that connects customers seeking printing services with verified printing houses ("Vendors") operating in Egypt. PUNQT facilitates transactions between customers and Vendors but is not itself a printing company. PUNQT does not produce printed materials and is not responsible for the physical output of Vendors.',
  },
  {
    title: "Account Registration",
    description:
      "You must register an account to place orders or submit quote requests. You agree to provide accurate, current, and complete information during registration and to keep your account information updated. You are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account. You must notify PUNQT immediately of any unauthorized use of your account.",
  },
  {
    title: "Customer Terms",
    items: [
      {
        title: "Orders & Payments",
        description:
          "By placing an order, you authorize PUNQT to charge the specified amount to your chosen payment method. Payment is held in a secure escrow account managed by PUNQT until you confirm delivery.",
      },
      {
        title: "Escrow Protection",
        description:
          "Funds are released to the Vendor only after you confirm satisfactory delivery or after a 7-day automatic release period following confirmed delivery if no dispute is raised.",
      },
      {
        title: "Cancellations",
        description:
          "Orders may be cancelled within 2 hours of placement for a full refund. After production has begun, cancellations are subject to Vendor approval and may incur charges for work already completed.",
      },
      {
        title: "Sample Approval",
        description:
          "For eligible orders, you will receive a digital proof for approval before production begins. Approval of the proof confirms you accept the design and releases the Vendor to proceed with production.",
      },
      {
        title: "Disputes",
        description:
          "If the delivered product does not match the approved specification, you may raise a dispute within 48 hours of delivery through the platform. PUNQT will mediate disputes in good faith.",
      },
      {
        title: "Contact",
        description:
          "For questions about these Terms, please contact us at legal@punqt.com or through the Contact Us page.",
      },
    ],
  },
  {
    title: "Vendor Terms",
    items: [
      {
        title: "Verification",
        description:
          "Vendors must complete PUNQT's verification process before listing services. Verification includes business registration confirmation, capability assessment, and agreement to quality standards.",
      },
      {
        title: "Listing Accuracy",
        description:
          "Vendors are responsible for the accuracy of their listings, including specifications, pricing, and turnaround times. Misleading listings may result in account suspension.",
      },
      {
        title: "Order Fulfillment",
        description:
          "Vendors agree to fulfill accepted orders to the specification confirmed by the customer, within the agreed turnaround time. Repeated failures to fulfill orders may result in removal from the platform.",
      },
      {
        title: "Fees",
        description:
          "PUNQT charges Vendors a commission on completed orders. The commission rate is disclosed in the Vendor Agreement signed at onboarding and may be updated with 30 days' notice.",
      },
      {
        title: "Payment",
        description:
          "Vendors receive payment within 3 business days of customer delivery confirmation, minus PUNQT's commission and any applicable platform fees.",
      },
    ],
  },
  {
    title: "Intellectual Property",
    description:
      "Customers retain ownership of all design files, artwork, and content they upload to the Platform. By uploading files, customers grant PUNQT a limited license to reproduce and transmit those files solely for the purpose of fulfilling their orders. PUNQT's trademarks, logos, platform design, and content are the exclusive property of PUNQT and may not be used without written permission.",
  },
  {
    title: "Prohibited Uses",
    description:
      "You may not use the Platform to: produce materials that infringe third-party intellectual property rights; produce illegal, defamatory, or obscene content; engage in fraudulent transactions; attempt to circumvent the escrow payment system; reverse-engineer or scrape the platform; or harass other users or Vendors.",
  },
  {
    title: "Limitation of Liability",
    description:
      "To the maximum extent permitted by Egyptian law, PUNQT's liability for any claim arising out of or relating to these Terms or your use of the Platform is limited to the amount paid by you for the specific order giving rise to the claim in the 3 months preceding the claim. PUNQT is not liable for indirect, incidental, special, or consequential damages.",
  },
  {
    title: "Governing Law",
    description:
      "These Terms are governed by the laws of the Arab Republic of Egypt. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the competent courts of Cairo, Egypt.",
  },
  {
    title: "Changes to Terms",
    description:
      "PUNQT reserves the right to modify these Terms at any time. We will provide at least 14 days' notice of material changes via email or platform notification. Continued use of the Platform after the effective date constitutes acceptance of the revised Terms.",
  },
];

const sectionId = (index: number) => `terms-section-${index + 1}`;

export default function TermsContent() {
  return (
    <section
      className="container mx-auto md:px-8 lg:px-6 2xl:w-full 2xl:px-0"
      aria-label="Terms and conditions details"
    >
      <nav
        className="rounded-4xl border border-border px-7 py-6 sm:px-10 sm:py-7"
        aria-label="Terms and conditions contents"
      >
        <h2 className="text-sm font-bold uppercase">Contents</h2>
        <ol className="mt-4 grid gap-x-12 gap-y-2 text-sm font-semibold text-primary sm:grid-cols-2 sm:text-base">
          {termsSections.map(({ title }, index) => (
            <li key={title} className="list-inside marker:font-bold">
              <Link className="hover:underline" href={`#${sectionId(index)}`}>
                {index + 1}. {title}
              </Link>
            </li>
          ))}
          <li className="list-inside marker:font-bold">
            <Link className="hover:underline" href="#terms-section-11">
              11. Contact
            </Link>
          </li>
        </ol>
      </nav>

      <article className="mt-12 space-y-14 sm:mt-16 sm:space-y-16">
        {termsSections.map(({ title, description, items }, index) => (
          <section key={title} aria-labelledby={sectionId(index)}>
            <h2
              id={sectionId(index)}
              className="scroll-mt-8 border-b border-border pb-4 text-2xl font-semibold sm:pb-5 sm:text-3xl"
            >
              {index + 1}. {title}
            </h2>
            {description ? (
              <p className="mt-5 text-base leading-7 font-medium text-muted-foreground sm:mt-6 sm:text-lg sm:leading-8">
                {description}
              </p>
            ) : null}
            {items ? (
              <div className="mt-5 space-y-5 sm:mt-6 sm:space-y-6">
                {items.map((item) => (
                  <div
                    key={item.title}
                    className="border-l-2 border-primary/10 pl-4 sm:pl-5"
                  >
                    <h3 className="text-base font-semibold sm:text-lg">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-base leading-7 font-medium text-muted-foreground sm:mt-2 sm:text-lg sm:leading-8">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            ) : null}
          </section>
        ))}

        <Question />
      </article>
    </section>
  );
}
