import { useTranslations } from "next-intl";
import Feedback from "../components/Feedback";
import Heading from "../components/Heading";

export default function CustomerStories() {
  const t = useTranslations("CustomerStories");

  const feedback = [
    {
      rating: 5,
      message: "hpasduivha",
      user: {
        name: "ahmed",
        department: "tech",
      },
    },
    {
      rating: 5,
      message: "hpasduivha",
      user: {
        name: "ahmed",
        department: "tech",
      },
    },
    {
      rating: 5,
      message: "hpasduivha",
      user: {
        name: "ahmed",
        department: "tech",
      },
    },
  ];

  return (
    <section className="container py-20 mx-auto px-0 my-16">
      <Heading
        className="text-center"
        title={
          <span className="tracking-widest uppercase">{t("title")}</span>
        }
        description={
          <p className="text-3xl font-semibold">
            {t("description.line1")} <br />
            {t("description.line2")}
          </p>
        }
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 mt-12">
        {feedback.map((item) => (
          <Feedback
            key={`${item.user.name}-${item.rating}`}
            rating={item.rating}
            message={item.message}
            user={item.user}
          />
        ))}
      </div>
    </section>
  );
}