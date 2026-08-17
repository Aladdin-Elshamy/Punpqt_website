import { Card, CardContent } from "@/components/ui/card";
import PrinterDetailCard from "@/features/specific-printer/components/PrinterDetailCard";
import Check from "@/shared/icons/Check";
import { Award, CircleCheck } from "lucide-react";

const capabilities = [
  "Digital Printing",
  "Offset Printing",
  "Large Format",
  "UV Printing",
  "Screen Printing",
  "Hot Foil Stamping",
  "Embossing",
  "Die Cutting",
  "Lamination",
  "Binding",
];

const equipment = [
  {
    title: "Heidelberg Speedmaster SM52",
    description: "Offset Press",
  },
  {
    title: "HP Indigo 7900",
    description: "Digital Press",
  },
  {
    title: "Polar 92X",
    description: "Cutting Machine",
  },
  {
    title: "Laminator Pro 1600",
    description: "Finishing Equipment",
  },
];

const certifications = [
  {
    title: "ISO 9001:2015",
    description: "Quality Management",
  },
  {
    title: "FSC Certified",
    description: "Environmental Standards",
  },
];

export default function AboutUs() {
  return (
    <section className="container mx-auto px-6 py-8 md:px-8 lg:px-6">
      <Card className="rounded-3xl px-0 py-0 shadow-sm">
        <CardContent className="p-6 md:p-8">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground">
              About Us
            </h2>
            <div className="grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(18rem,1fr)] lg:gap-14">
              <div className="mt-3 space-y-4 text-sm leading-relaxed">
                <p>
                  Premium Print Co. is a leading commercial printing company in
                  Egypt with over 15 years of experience in delivering
                  high-quality printing solutions. We specialize in business
                  cards, brochures, catalogs, packaging, and large-format
                  printing.
                </p>

                <p>
                  Our state-of-the-art facility is equipped with the latest
                  printing technology, including Heidelberg offset presses and
                  HP Indigo digital presses. We pride ourselves on exceptional
                  quality, fast turnaround times, and outstanding customer
                  service.
                </p>
              </div>
              <div>
                <h2 className="text-base font-semibold text-foreground">
                  Printing Capabilities
                </h2>

                <ul className="mt-3 grid gap-y-3 sm:grid-cols-2">
                  {capabilities.map((capability) => (
                    <li
                      key={capability}
                      className="flex items-center gap-2 text-sm text-foreground"
                    >
                      <Check className="size-4 shrink-0 text-primary" />
                      {capability}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>



          <div className="my-6 h-px bg-border" />

          <div>
            <h2 className="text-base font-semibold text-foreground">Equipment</h2>

            <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {equipment.map((item) => (
                <PrinterDetailCard key={item.title} {...item} />
              ))}
            </div>
          </div>

          <div className="mt-7">
            <h2 className="text-base font-semibold text-foreground">
              Certifications
            </h2>

            <div className="mt-4 grid max-w-2xl gap-3 sm:grid-cols-2">
              {certifications.map((certification, index) => (
                <PrinterDetailCard
                  key={certification.title}
                  {...certification}
                  icon={Award}
                  highlighted={index === 1}
                />
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}