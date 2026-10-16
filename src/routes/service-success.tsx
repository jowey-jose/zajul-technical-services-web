import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SuccessPanel } from "@/components/zajul/success-panel";
import { services } from "@/lib/zajul-data";

type Search = { ref: string; service: string; name: string; location: string };

export const Route = createFileRoute("/service-success")({
  validateSearch: (s: Record<string, unknown>): Search => ({
    ref: String(s["ref"] ?? "ZS-DEMO"),
    service: String(s["service"] ?? ""),
    name: String(s["name"] ?? ""),
    location: String(s["location"] ?? ""),
  }),
  head: () => ({
    meta: [
      { title: "Technician on the way | Zajul Technical Services" },
      {
        name: "description",
        content:
          "Your Zajul service request was received and a technician is on the way.",
      },
      { property: "og:title", content: "Service request received | Zajul" },
      {
        property: "og:description",
        content: "A Zajul technician is on the way.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: ServiceSuccess,
});

function ServiceSuccess() {
  const { ref, service: slug, name, location } = Route.useSearch();
  const service = services.find((s) => s.slug === slug);
  return (
    <SuccessPanel
      title={`Request received${name ? `, ${name.split(" ")[0]}` : ""}!`}
      reference={ref}
      actions={
        <>
          <Button asChild>
            <Link to="/services">Explore more services</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/">Back to home</Link>
          </Button>
        </>
      }
    >
      <p className="flex gap-3">
        <Wrench className="mt-0.5 size-5 shrink-0 text-secondary" />
        <span>
          <strong>
            A technician is on the way
            {service ? ` for your ${service.title.toLowerCase()}` : ""}.
          </strong>{" "}
          Our team will call you shortly to confirm arrival time.
        </span>
      </p>
      {location && (
        <p className="flex gap-3">
          <MapPin className="mt-0.5 size-5 shrink-0 text-highlight-strong" />
          <span>
            Site: <strong>{location}</strong>
          </span>
        </p>
      )}
    </SuccessPanel>
  );
}
