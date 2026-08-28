import Link from "next/link";
import Question from "./Question";

type PolicyItem = {
  title: string;
  description: string;
};

type PolicySection = {
  title: string;
  items: PolicyItem[];
};

const policySections: PolicySection[] = [
  {
    title: "Information We Collect",
    items: [
      {
        title: "Account Information",
        description:
          "When you register, we collect your name, email address, phone number, and business name (if applicable). This information is used to create and manage your PUNQT account.",
      },
      {
        title: "Order Information",
        description:
          "When you place an order or submit a quote request, we collect details about your print specifications, delivery address, and payment information. Payment data is processed securely through our payment partners and is never stored on our servers in full.",
      },
      {
        title: "Usage Data",
        description:
          "We collect information about how you interact with the platform — pages visited, searches performed, products viewed, and actions taken. This helps us improve the platform experience.",
      },
      {
        title: "Communications",
        description:
          "Messages sent between customers and printers through the platform, support requests, and feedback are stored to facilitate your orders and improve our service.",
      },
    ],
  },
  {
    title: "How We Use Your Information",
    items: [
      {
        title: "Order Fulfillment",
        description:
          "We share your order details and contact information with the printing house you select to fulfill your order. Printers receive only the information necessary to complete your job.",
      },
      {
        title: "Platform Improvement",
        description:
          "Aggregated, anonymized usage data helps us understand how customers use PUNQT and guides product improvements.",
      },
      {
        title: "Communications",
        description:
          "We use your email address to send order confirmations, status updates, quote notifications, and important platform communications. You can manage notification preferences in your account settings.",
      },
      {
        title: "Escrow & Payments",
        description:
          "Payment information is used solely to process transactions and manage the escrow mechanism that protects both buyers and sellers on the platform.",
      },
    ],
  },
  {
    title: "Information Sharing",
    items: [
      {
        title: "With Printers",
        description:
          "When you confirm an order or accept a quote, we share your delivery address, order specifications, and contact information with the fulfilling printer. We do not share your payment details with printers.",
      },
      {
        title: "Service Providers",
        description:
          "We work with trusted third-party providers for payment processing, cloud infrastructure, email delivery, and analytics. These providers are contractually bound to protect your data and use it only for the purposes we specify.",
      },
      {
        title: "Legal Requirements",
        description:
          "We may disclose information when required by Egyptian law, regulation, court order, or governmental authority.",
      },
      {
        title: "No Sale of Data",
        description:
          "We do not sell, rent, or trade your personal information to third parties for their marketing purposes.",
      },
    ],
  },
  {
    title: "Data Security",
    items: [
      {
        title: "Encryption",
        description:
          "All data transmitted between your browser and PUNQT is encrypted using TLS (HTTPS). Sensitive data at rest is encrypted using industry-standard algorithms.",
      },
      {
        title: "Access Controls",
        description:
          "Access to customer data within PUNQT is restricted to employees who need it to perform their job functions, governed by role-based permissions and audit logging.",
      },
      {
        title: "Escrow Protection",
        description:
          "Payments are held in a secure escrow account and released to printers only after you confirm receipt and satisfaction. This protects you from fraud and non-delivery.",
      },
    ],
  },
  {
    title: "Your Rights",
    items: [
      {
        title: "Access & Correction",
        description:
          "You can view and edit your account information at any time from your profile settings. If you need help accessing or correcting data, contact our support team.",
      },
      {
        title: "Data Deletion",
        description:
          "You may request deletion of your account and associated personal data. We will delete your data within 30 days, subject to retention obligations under Egyptian law (e.g., financial records for tax purposes).",
      },
      {
        title: "Data Portability",
        description:
          "You may request a copy of your order history and personal data in a structured, machine-readable format by contacting support.",
      },
      {
        title: "Opt-Out",
        description:
          "You can opt out of non-essential communications (promotional emails, newsletters) at any time via account settings or by clicking the unsubscribe link in any email.",
      },
    ],
  },
  {
    title: "Cookies & Tracking",
    items: [
      {
        title: "Essential Cookies",
        description:
          "We use cookies that are strictly necessary for the platform to function — session authentication, cart state, and security tokens. These cannot be disabled.",
      },
      {
        title: "Analytics Cookies",
        description:
          "With your consent, we use analytics cookies to understand how users navigate the platform. You can manage cookie preferences via the banner shown on first visit.",
      },
      {
        title: "No Third-Party Ad Tracking",
        description:
          "We do not use third-party advertising trackers or sell data to ad networks.",
      },
    ],
  },
  {
    title: "Changes to This Policy",
    items: [
      {
        title: "Notification",
        description:
          "We will notify you of material changes to this Privacy Policy via email or a prominent notice on the platform at least 14 days before the changes take effect.",
      },
      {
        title: "Continued Use",
        description:
          "Continued use of PUNQT after the effective date of a revised Privacy Policy constitutes your acceptance of the updated terms.",
      },
    ],
  },
];

export default function PolicyContent() {
  return (
    <section
      className="container mx-auto md:px-8 lg:px-6 2xl:w-full 2xl:px-0"
      aria-label="Privacy policy details"
    >
      <article className="space-y-16">
        {policySections.map(({ title, items }, index) => (
          <section
            key={title}
            aria-labelledby={`privacy-policy-section-${index + 1}`}
          >
            <h2
              id={`privacy-policy-section-${index + 1}`}
              className="border-b border-border pb-6 text-2xl font-semibold sm:text-3xl"
            >
              {index + 1}. {title}
            </h2>
            <div className="mt-6 space-y-6 sm:mt-8 sm:space-y-7">
              {items.map((item) => (
                <div key={item.title}>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-base leading-7 font-medium text-muted-foreground sm:text-lg sm:leading-8">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        ))}

        <Question />
      </article>
    </section>
  );
}
