import { createFileRoute } from "@tanstack/react-router";
import {
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { InquiryForm } from "@/components/zajul/inquiry-form";
import { PageIntro } from "@/components/zajul/site-shell";
import { contact } from "@/lib/zajul-data";
export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Shop | Zajul Technical Services" },
      {
        name: "description",
        content:
          "Visit Zajul Technical Services above Quick Matt Supermarket in Kitengela or contact our team.",
      },
      { property: "og:title", content: "Contact & Visit Zajul" },
      {
        property: "og:description",
        content: "Find our Kitengela shop and speak to our technical team.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});
function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact & physical shop"
        title="Let’s talk about what you need"
      >
        Visit the shop, call our team or send an inquiry. We’ll help you move
        from questions to a practical next step.
      </PageIntro>
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:px-6">
          <div className="space-y-5">
            <Info icon={MapPin} title="Physical shop">
              {contact.location}
            </Info>
            <Info icon={Navigation} title="Postal address">
              {contact.postal}
            </Info>
            <Info icon={Phone} title="Call us">
              <a
                href={`tel:${contact.phone.replaceAll(" ", "")}`}
                className="block hover:text-secondary"
              >
                {contact.phone} — CEO
              </a>
              <a
                href={`tel:${contact.marketingPhone.replaceAll(" ", "")}`}
                className="mt-1 block hover:text-secondary"
              >
                {contact.marketingPhone} — Marketing
              </a>
            </Info>
            <Info icon={Mail} title="Email">
              <a
                href={`mailto:${contact.email}`}
                className="break-all hover:text-secondary"
              >
                {contact.email}
              </a>
            </Info>
            <Info icon={Clock3} title="Opening hours">
              [Opening hours to be confirmed]
            </Info>
            <Button asChild size="lg" className="w-full">
              <a
                href={`https://wa.me/${contact.whatsapp}`}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle />
                Chat on WhatsApp
              </a>
            </Button>
          </div>
          <div className="bg-muted p-6 sm:p-9">
            <h2 className="text-2xl font-bold text-primary">Send a message</h2>
            <p className="mb-7 mt-2 text-sm text-muted-foreground">
              Tell us what you are looking for and how to reach you.
            </p>
            <InquiryForm />
          </div>
        </div>
      </section>
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-6">
          <div className="grid min-h-80 place-items-center border border-dashed border-primary-foreground/35 bg-brand-dark text-center text-primary-foreground">
            <div>
              <MapPin className="mx-auto size-10 text-highlight" />
              <h2 className="mt-4 text-2xl font-bold">Shop map placeholder</h2>
              <p className="mt-2 text-sm text-primary-foreground/65">
                Kitengela, above Quick Matt Supermarket
              </p>
              <p className="mt-1 text-xs text-primary-foreground/50">
                Exact map pin to be added after confirmation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
function Info({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof MapPin;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4 border-b border-border pb-5">
      <span className="grid size-11 shrink-0 place-items-center bg-primary text-highlight">
        <Icon className="size-5" />
      </span>
      <div>
        <h2 className="text-sm font-bold text-primary">{title}</h2>
        <div className="mt-1 text-sm leading-6 text-muted-foreground">
          {children}
        </div>
      </div>
    </div>
  );
}
