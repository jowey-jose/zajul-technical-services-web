import { createFileRoute } from "@tanstack/react-router";
import {
  HeartHandshake,
  Lightbulb,
  ShieldCheck,
  Target,
  UserRound,
} from "lucide-react";
import { PageIntro } from "@/components/zajul/site-shell";
export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Zajul Technical Services" },
      {
        name: "description",
        content:
          "Meet the family-owned Kitengela business behind Zajul's electrical engineering and customer service.",
      },
      { property: "og:title", content: "About Zajul Technical Services" },
      {
        property: "og:description",
        content:
          "An engineering-led family business serving homes, businesses and institutions.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});
function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About Zajul"
        title="A family business built around practical solutions"
      >
        Based in Kitengela, we bring product supply, technical knowledge and
        customer care together under one trusted local name.
      </PageIntro>
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:px-6">
          <div>
            <p className="section-kicker text-secondary">Our company</p>
            <h2 className="mt-3 text-3xl font-bold text-primary">
              Technology made useful, reliable and accessible
            </h2>
            <p className="mt-5 leading-8 text-muted-foreground">
              Zajul Technical Services Limited imports and supplies solar,
              security, networking and electrical products through its physical
              shop, while also providing professional installation and technical
              services.
            </p>
            <p className="mt-4 leading-8 text-muted-foreground">
              We serve residential customers, businesses, institutions and
              organisations looking for a team that can connect product
              decisions with practical implementation.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <Value
              icon={Target}
              title="Mission"
              text="To provide dependable technical products and services that solve real customer needs. Editable wording for leadership review."
            />
            <Value
              icon={Lightbulb}
              title="Vision"
              text="To be a trusted technical solutions partner for customers and organisations. Editable wording for leadership review."
            />
            <Value
              icon={ShieldCheck}
              title="Our expertise"
              text="Solar energy, surveillance, networking and electrical installation brought together in one team."
            />
            <Value
              icon={HeartHandshake}
              title="Our commitment"
              text="Clear guidance, quality-minded work and responsive customer engagement from inquiry to handover."
            />
          </div>
        </div>
      </section>
      <section className="bg-muted py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-6">
          <div className="max-w-2xl">
            <p className="section-kicker text-secondary">Leadership team</p>
            <h2 className="mt-3 text-3xl font-bold text-primary">
              Engineering direction. Customer focus.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Names and roles are drawn from the supplied business cards.
              Additional biographies and qualifications remain ready for
              leadership approval.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Team
              name="Zacharia Mbuku"
              role="Chief Executive Officer"
              text="An electrical engineer who leads the company's technical direction and overall operations. Professional biography and qualification details to be added after approval."
            />
            <Team
              name="Julie Kinyumu"
              role="Marketing Manager"
              text="Responsible for marketing and customer engagement, helping customers connect with the right products and services. Profile details to be added after approval."
            />
          </div>
        </div>
      </section>
    </>
  );
}
function Value({
  icon: Icon,
  title,
  text,
}: {
  icon: typeof Target;
  title: string;
  text: string;
}) {
  return (
    <div className="border border-border bg-background p-6 shadow-card">
      <Icon className="size-7 text-highlight-strong" />
      <h3 className="mt-5 text-lg font-bold text-primary">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p>
    </div>
  );
}
function Team({
  name,
  role,
  text,
}: {
  name: string;
  role: string;
  text: string;
}) {
  return (
    <article className="grid gap-6 border border-border bg-background p-7 sm:grid-cols-[80px_1fr]">
      <div className="grid size-20 place-items-center bg-primary text-primary-foreground">
        <UserRound className="size-9" />
      </div>
      <div>
        <p className="section-kicker text-secondary">{role}</p>
        <h3 className="mt-2 text-2xl font-bold text-primary">{name}</h3>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p>
      </div>
    </article>
  );
}
