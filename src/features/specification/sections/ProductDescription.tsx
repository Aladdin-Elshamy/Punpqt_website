import ProductGridCard from "@/features/specific-product/components/ProductGridCard";
import {
  CircleCheck,
  FileCheck2,
  PackageCheck,
  Truck,
} from "lucide-react";
import WorkflowRow from "../components/WorkflowRow";
import Check from "@/shared/icons/Check";

const productFeatures = [
  "High-quality coated paper stock",
  "Crisp, accurate color reproduction",
  "Clean, precise die-cutting",
  "Multiple finishing options available",
  "Bulk discounts available",
];

const workflowSteps = [
  {
    title: "File Review",
    duration: "Same day",
    icon: FileCheck2,
  },
  {
    title: "Digital Proof",
    duration: "1 business day",
    icon: CircleCheck,
  },
  {
    title: "Production",
    duration: "1–2 business days",
    icon: PackageCheck,
  },
  {
    title: "Delivery",
    duration: "1 business day",
    icon: Truck,
  },
];

const recommendations = [
  {
    title: "Spot UV Cards",
    price: 380,
  },
  {
    title: "Foil Business Cards",
    price: 450,
  },
  {
    title: "Round Corner Cards",
    price: 220,
  },
];

export default function ProductDescription() {
  return (
    <div className="space-y-14 pt-7">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <section className="font-semibold">
          <h2 className="text-xl text-black">About This Product</h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">
            Our premium business cards are printed on high-quality coated stock
            with vibrant, long-lasting colors. Perfect for professionals who
            want to make a lasting first impression.
          </p>

          <ul className="mt-5 space-y-2.5">
            {productFeatures.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-2 text-sm font-semibold text-black"
              >
                <Check className="text-primary"/>
                {feature}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-black">Production Workflow</h2>
          <div className="mt-4 space-y-2.5">
            {workflowSteps.map((step) => (
              <WorkflowRow key={step.title} {...step} />
            ))}
          </div>
        </section>
      </div>

      <section>
        <h2 className="text-xl font-semibold text-black">You Might Also Like</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {recommendations.map((product) => (
            <ProductGridCard
              key={product.title}
              title={product.title}
              vendor="Elite Printing Co."
              price={product.price}
              currency="From EGP"
              deliveryTime="2–3 days"
              badge=" "
              className="rounded-2xl"
            />
          ))}
        </div>
      </section>
    </div>
  );
}