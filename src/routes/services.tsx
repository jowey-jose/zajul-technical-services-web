import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ClipboardCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InquiryForm } from "@/components/zajul/inquiry-form";
import { PageIntro } from "@/components/zajul/site-shell";
import { services } from "@/lib/zajul-data";
export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Technical Services | Zajul" },
      {
        name: "description",
        content:
          "Request solar, CCTV, networking and electrical installation services in Kitengela and surrounding areas.",
      },
      { property: "og:title", content: "Technical Services | Zajul" },
      {
        property: "og:description",
        content:
          "Professional installation and maintenance for power, security and connectivity.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});
function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Professional services"
        title="Technical work, carefully planned and delivered"
      >
        From the first site conversation to testing and handover, we focus on
        solutions that fit the environment and the people using them.
      </PageIntro>
      <section className="py-20">
        <div className="mx-auto max-w-7xl space-y-20 px-5 lg:px-6">
          {services.map((s, i) => (
            <article
              key={s.slug}
              className="grid items-center gap-10 lg:grid-cols-2"
            >
              <div className={i % 2 ? "lg:order-2" : ""}>
                <img
                  src={s.image}
                  alt={s.title}
                  className="aspect-[8/5] size-full object-cover"
                  width="1200"
                  height="912"
                  loading="lazy"
                />
              </div>
              <div className={i % 2 ? "lg:order-1 lg:pr-10" : "lg:pl-10"}>
                <p className="section-kicker text-secondary">
                  Service 0{i + 1}
                </p>
                <h2 className="mt-3 text-3xl font-bold text-primary">
                  {s.title}
                </h2>
                <p className="mt-4 leading-7 text-muted-foreground">
                  {s.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {s.benefits.map((b) => (
                    <li
                      key={b}
                      className="flex items-center gap-3 text-sm font-semibold"
                    >
                      <span className="grid size-6 place-items-center bg-highlight">
                        <Check className="size-3.5" />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Button asChild>
                    <Link to="/services/$slug" params={{ slug: s.slug }}>
                      Request This Service
                    </Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link to="/services/$slug" params={{ slug: s.slug }}>
                      View details
                    </Link>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section id="service-inquiry" className="bg-muted py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:px-6">
          <div>
            <ClipboardCheck className="size-10 text-highlight-strong" />
            <p className="section-kicker mt-6 text-secondary">
              Start a conversation
            </p>
            <h2 className="mt-3 text-3xl font-bold text-primary">
              Tell us about your project
            </h2>
            <p className="mt-5 leading-7 text-muted-foreground">
              Share the essentials and our team can help identify the right next
              step. This prototype form does not send data.
            </p>
          </div>
          <div className="bg-background p-6 shadow-card sm:p-9">
            <InquiryForm serviceMode />
          </div>
        </div>
      </section>
    </>
  );
}
