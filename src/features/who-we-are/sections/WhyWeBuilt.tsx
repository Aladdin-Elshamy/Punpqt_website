import WhyWeBuiltMetricCard from "../components/WhyWeBuiltMetricCard";

const milestones = [
  { value: "2026", label: "Founded in Cairo" },
  { value: "Day 1", label: "Escrow protection built-in" },
  { value: "150+", label: "Printers onboarded in year 1" },
  { value: "EGP 0", label: "Hidden fees for customers" },
];

export default function WhyWeBuilt() {
  return (
    <section className="container px-6 md:px-8 lg:px-6">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="text-2xl font-semibold sm:text-3xl">Why we built PUNQT</h2>

          <div className="mt-5 space-y-5 text-sm leading-6 font-semibold text-muted-foreground sm:text-base sm:leading-7">
            <p>
              Getting print work done in Egypt meant phone calls, WhatsApp
              negotiations, and hoping the quality matched the sample. There was
              no standard process, no price transparency, and no way to compare
              printers.
            </p>
            <p>
              We built PUNQT to change that. A single platform where you
              configure your spec, browse verified printers, get competing
              quotes, approve samples digitally, and pay securely � all in one
              place.
            </p>
            <p>
              For printers, it means a steady stream of qualified orders, digital
              workflow management, and a reputation system that rewards quality.
            </p>
          </div>
        </div>

        <dl className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
          {milestones.map(({ value, label }) => (
            <div key={value}>
              <dt className="sr-only">{label}</dt>
              <dd>
                <WhyWeBuiltMetricCard value={value} label={label} />
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}