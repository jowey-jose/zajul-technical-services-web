import { useState, type FormEvent } from "react";
import {
  createFileRoute,
  Link,
  notFound,
  useNavigate,
} from "@tanstack/react-router";
import { ArrowLeft, Check, Wrench } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ConfirmDialog, SummaryRow } from "@/components/zajul/confirm-dialog";
import {
  contact,
  makeReference,
  serviceDetails,
  services,
} from "@/lib/zajul-data";

export const Route = createFileRoute("/services_/$slug")({
  loader: ({ params }) => {
    const service = services.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return service;
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData
          ? `${loaderData.title} | Zajul`
          : "Service unavailable | Zajul",
      },
      {
        name: "description",
        content: loaderData?.description ?? "Technical services from Zajul.",
      },
      { property: "og:title", content: loaderData?.title ?? "Zajul services" },
      {
        property: "og:description",
        content: loaderData?.description ?? "Technical services from Zajul.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServiceDetail,
});

function ServiceDetail() {
  const service = Route.useLoaderData();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    location: "",
    date: "",
    description: "",
  });
  const [open, setOpen] = useState(false);
  const set = (k: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm({ ...form, [k]: e.target.value });
  function review(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (e.currentTarget.reportValidity()) setOpen(true);
  }
  function submit() {
    toast.success("Service request received!", {
      description: `A technician is on the way. Questions? Call ${contact.phone}.`,
    });
    navigate({
      to: "/service-success",
      search: {
        ref: makeReference("ZS"),
        service: service.slug,
        name: form.name,
        location: form.location,
      },
    });
  }

  return (
    <>
      <section className="py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-6">
          <Link
            to="/services"
            className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-secondary"
          >
            <ArrowLeft className="size-4" />
            Back to services
          </Link>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <img
              src={service.image}
              alt={service.title}
              className="aspect-[4/3] w-full object-cover"
              width="1200"
              height="912"
            />
            <div className="lg:pl-8">
              <p className="section-kicker text-secondary">
                Professional service
              </p>
              <h1 className="mt-3 text-4xl font-bold text-primary lg:text-5xl">
                {service.title}
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                {service.description}
              </p>
              <p className="mt-4 leading-7 text-muted-foreground">
                {serviceDetails[service.slug]}
              </p>
              <ul className="mt-6 space-y-3">
                {service.benefits.map((b) => (
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
              <Button asChild size="lg" className="mt-8">
                <a href="#request">Request this service</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section id="request" className="bg-muted py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:px-6">
          <div>
            <Wrench className="size-10 text-highlight-strong" />
            <p className="section-kicker mt-6 text-secondary">
              Book a technician
            </p>
            <h2 className="mt-3 text-3xl font-bold text-primary">
              Describe what you need
            </h2>
            <p className="mt-5 leading-7 text-muted-foreground">
              Tell us about the job and where it is. Our team will confirm
              details by phone and dispatch a technician. Payment is agreed
              after site assessment.
            </p>
          </div>
          <form
            onSubmit={review}
            className="grid gap-5 bg-background p-6 shadow-card sm:p-9"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="form-label">
                Full name
                <Input
                  required
                  value={form.name}
                  onChange={set("name")}
                  placeholder="Your name"
                />
              </label>
              <label className="form-label">
                Phone number
                <Input
                  required
                  type="tel"
                  pattern="[0-9+ ]{9,15}"
                  value={form.phone}
                  onChange={set("phone")}
                  placeholder="e.g. 0712 345 678"
                />
              </label>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="form-label">
                Site location
                <Input
                  required
                  value={form.location}
                  onChange={set("location")}
                  placeholder="Town, estate or building"
                />
              </label>
              <label className="form-label">
                Preferred date
                <Input type="date" value={form.date} onChange={set("date")} />
              </label>
            </div>
            <label className="form-label">
              Describe the service needed
              <Textarea
                required
                minLength={10}
                value={form.description}
                onChange={set("description")}
                className="min-h-32"
                placeholder="e.g. Install 4 outdoor cameras around a bungalow with phone viewing..."
              />
            </label>
            <Button type="submit" size="lg" className="w-full sm:w-fit">
              Request service
            </Button>
            <p className="text-xs text-muted-foreground">
              Prototype form — requests are not sent or stored.
            </p>
          </form>
        </div>
      </section>
      <ConfirmDialog
        open={open}
        onOpenChange={setOpen}
        title="Confirm service request"
        confirmLabel="Confirm request"
        onConfirm={submit}
      >
        <SummaryRow label="Service" value={service.title} />
        <SummaryRow label="Location" value={form.location} />
        {form.date && <SummaryRow label="Preferred date" value={form.date} />}
        <p className="pt-2">{form.description}</p>
      </ConfirmDialog>
    </>
  );
}
