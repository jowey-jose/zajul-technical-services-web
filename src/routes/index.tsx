import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/zajul/product-card";
import { categories, products, services } from "@/lib/zajul-data";
import heroImage from "@/assets/zajul-hero-solar.jpg";
import shopImage from "@/assets/zajul-shop.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zajul Technical Services | Power, Security & Connectivity" },
      {
        name: "description",
        content:
          "Solar, CCTV, networking and electrical products and installation services in Kitengela, Kenya.",
      },
      { property: "og:title", content: "Zajul Technical Services" },
      {
        property: "og:description",
        content:
          "Powering your world and securing your space with professional technical solutions.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <section className="relative min-h-[680px] overflow-hidden bg-brand-dark text-primary-foreground lg:min-h-[720px]">
        <img
          src={heroImage}
          alt="Engineer installing rooftop solar panels in Kenya"
          className="absolute inset-0 size-full object-cover object-[62%_center]"
          width="1920"
          height="1088"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--brand-dark)_0%,color-mix(in_oklab,var(--brand-dark)_92%,transparent)_38%,color-mix(in_oklab,var(--brand-dark)_18%,transparent)_78%)]" />
        <div className="relative mx-auto flex min-h-[680px] max-w-7xl items-center px-5 py-20 lg:min-h-[720px] lg:px-6">
          <div className="max-w-2xl">
            <p className="section-kicker mb-5 text-highlight">
              Equipment • Installation • Service
            </p>
            <h1 className="text-5xl font-bold leading-[1.08] sm:text-6xl lg:text-7xl">
              Powering Your World.
              <br />
              <span className="text-highlight">Securing Your Space.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-primary-foreground/80 sm:text-lg">
              Reliable solar energy, CCTV security, networking and electrical
              solutions—supplied and professionally installed for homes,
              businesses and institutions.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link to="/products">
                  Explore Products <ArrowRight />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/50 bg-transparent text-primary-foreground hover:bg-surface hover:text-primary"
              >
                <Link to="/services">Request a Service</Link>
              </Button>
            </div>
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-primary-foreground/75">
              {[
                "Professional guidance",
                "Quality equipment",
                "Local support",
              ].map((x) => (
                <span key={x} className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-highlight" />
                  {x}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-6">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="section-kicker text-secondary">Shop by solution</p>
              <h2 className="mt-3 text-3xl font-bold text-primary md:text-4xl">
                Everything your project needs
              </h2>
            </div>
            <Link
              to="/products"
              className="flex items-center gap-2 text-sm font-bold text-secondary"
            >
              View all products <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                to="/products"
                search={{ category: cat.name }}
                className="group relative aspect-[4/5] overflow-hidden bg-muted"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="size-full object-cover transition duration-500 group-hover:scale-105"
                  width="1200"
                  height="912"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_35%,color-mix(in_oklab,var(--brand-dark)_92%,transparent)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-primary-foreground">
                  <p className="text-xs font-bold uppercase text-highlight">
                    {cat.short}
                  </p>
                  <h3 className="mt-1 text-xl font-bold">{cat.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-primary-foreground/70">
                    {cat.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-muted py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-6">
          <div className="mb-10 max-w-2xl">
            <p className="section-kicker text-secondary">Featured equipment</p>
            <h2 className="mt-3 text-3xl font-bold text-primary md:text-4xl">
              Selected for real-world performance
            </h2>
            <p className="mt-4 text-muted-foreground">
              Sample products and prices for presentation. Confirm current
              specifications, availability and pricing with our team.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products
              .filter((p) => p.featured)
              .map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
          </div>
        </div>
      </section>
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-6">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="section-kicker text-secondary">
                Technical services
              </p>
              <h2 className="mt-3 text-3xl font-bold text-primary md:text-4xl">
                From planning to a clean, working installation
              </h2>
              <p className="mt-5 leading-7 text-muted-foreground">
                Our supply knowledge and practical engineering approach come
                together on site—helping customers choose, install and maintain
                the right solution.
              </p>
              <Button asChild variant="navy" className="mt-7">
                <Link to="/services">
                  Explore our services <ArrowRight />
                </Link>
              </Button>
            </div>
            <div className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
              {services.map((s, i) => (
                <div key={s.slug} className="bg-background p-7">
                  <span className="text-sm font-bold text-highlight-strong">
                    0{i + 1}
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-primary">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {s.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:px-6">
          <div>
            <p className="section-kicker text-highlight">Engineering-led</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Technical thinking. Practical outcomes.
            </h2>
            <p className="mt-5 leading-8 text-primary-foreground/75">
              Led by an electrical engineer, Zajul approaches each
              recommendation with attention to suitability, safety and the
              customer's real operating needs.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="border border-primary-foreground/15 p-6">
              <ShieldCheck className="size-8 text-highlight" />
              <h3 className="mt-5 font-bold">Considered solutions</h3>
              <p className="mt-2 text-sm leading-6 text-primary-foreground/65">
                Equipment and services matched to the application.
              </p>
            </div>
            <div className="border border-primary-foreground/15 p-6">
              <Wrench className="size-8 text-highlight" />
              <h3 className="mt-5 font-bold">Professional installation</h3>
              <p className="mt-2 text-sm leading-6 text-primary-foreground/65">
                Disciplined execution, testing and clear handover.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-6">
          <img
            src={shopImage}
            alt="Customer consultation in a technical equipment shop"
            className="aspect-[8/5] size-full object-cover"
            width="1600"
            height="1008"
            loading="lazy"
          />
          <div>
            <p className="section-kicker text-secondary">Our physical shop</p>
            <h2 className="mt-3 text-3xl font-bold text-primary md:text-4xl">
              See the equipment. Talk to our team.
            </h2>
            <p className="mt-5 leading-7 text-muted-foreground">
              Visit our Kitengela shop for product guidance, quotations and a
              practical conversation about your next project.
            </p>
            <p className="mt-6 flex items-center gap-3 font-bold text-primary">
              <MapPin className="size-5 text-highlight-strong" />
              OBC Plaza, Kitengela
            </p>
            <Button asChild variant="outline" className="mt-7">
              <Link to="/contact">
                Plan your visit <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
