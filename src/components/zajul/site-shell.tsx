import { Link } from "@tanstack/react-router";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Menu,
  Phone,
  Youtube,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import logoAsset from "@/assets/PrimaryLogo_Color.svg";
import logoAssetFooter from "@/assets/PrimaryLogo_White.svg";
import { contact } from "@/lib/zajul-data";

const nav = [
  { label: "Home", to: "/" as const },
  { label: "Products", to: "/products" as const },
  { label: "Services", to: "/services" as const },
  { label: "About Us", to: "/about" as const },
  { label: "Contact", to: "/contact" as const },
];

export function Header() {
  return (
    <>
      <div className="hidden bg-primary text-primary-foreground lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs">
          <div className="flex gap-6">
            <span className="flex items-center gap-2">
              <MapPin className="size-3.5 text-highlight" />
              {contact.location}
            </span>
            <a
              className="flex items-center gap-2 hover:text-highlight"
              href={`mailto:${contact.email}`}
            >
              <Mail className="size-3.5" />
              {contact.email}
            </a>
          </div>
          <a
            className="flex items-center gap-2 font-semibold hover:text-highlight"
            href={`tel:${contact.phone.replaceAll(" ", "")}`}
          >
            <Phone className="size-3.5" />
            {contact.phone}
          </a>
        </div>
      </div>
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/95 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-6">
          <Link
            to="/"
            aria-label="Zajul Technical Services home"
            className="shrink-0"
          >
            <img
              src={logoAsset}
              alt="Zajul Technical Services Limited"
              className="h-14 w-auto max-w-[210px] object-contain"
              width="480"
              height="270"
            />
          </Link>
          <nav
            className="hidden items-center gap-8 lg:flex"
            aria-label="Main navigation"
          >
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className="nav-link text-sm font-semibold"
                activeProps={{
                  className: "nav-link nav-link-active text-sm font-semibold",
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="hidden lg:block">
            <Button asChild>
              <a
                href={`https://wa.me/${contact.whatsapp}`}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp us
              </a>
            </Button>
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                aria-label="Open menu"
              >
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[86%]">
              <SheetHeader>
                <SheetTitle>
                  <img
                    src={logoAsset}
                    alt="Zajul Technical Services"
                    className="h-14 w-auto"
                  />
                </SheetTitle>
              </SheetHeader>
              <nav
                className="mt-10 flex flex-col gap-1"
                aria-label="Mobile navigation"
              >
                {nav.map((item) => (
                  <SheetClose asChild key={item.to}>
                    <Link
                      to={item.to}
                      className="border-b border-border py-4 text-lg font-semibold"
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
              <Button asChild className="mt-8 w-full">
                <a
                  href={`https://wa.me/${contact.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp us
                </a>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </>
  );
}

export function Footer() {
  return (
    <footer className="bg-brand-dark text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-2 lg:grid-cols-[1.25fr_0.7fr_0.9fr] lg:px-6">
        <div>
          <img
            src={logoAssetFooter}
            alt="Zajul Technical Services Limited"
            className="mb-5 h-20 w-auto  px-3 py-2"
            loading="lazy"
          />
          <p className="max-w-md text-sm leading-7 text-primary-foreground/70">
            Equipment, engineering and practical technical support for homes,
            businesses and institutions.
          </p>
          <div className="mt-6 flex gap-3">
            {[Facebook, Instagram, Youtube].map((Icon, i) => (
              <a
                href="#"
                aria-label={["Facebook", "Instagram", "YouTube"][i]}
                key={i}
                className="grid size-9 place-items-center border border-primary-foreground/20 hover:border-highlight hover:text-highlight"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h2 className="mb-5 text-sm font-bold uppercase tracking-widest text-highlight">
            Navigate
          </h2>
          <div className="grid gap-3 text-sm text-primary-foreground/75">
            {nav.map((item) => (
              <Link key={item.to} to={item.to} className="hover:text-highlight">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="mb-5 text-sm font-bold uppercase tracking-widest text-highlight">
            Visit or call
          </h2>
          <div className="space-y-4 text-sm text-primary-foreground/75">
            <p className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-highlight" />
              {contact.location}
            </p>
            <a
              className="flex gap-3 hover:text-highlight"
              href={`tel:${contact.phone.replaceAll(" ", "")}`}
            >
              <Phone className="size-4 text-highlight" />
              {contact.phone}
            </a>
            <a
              className="flex gap-3 break-all hover:text-highlight"
              href={`mailto:${contact.email}`}
            >
              <Mail className="size-4 shrink-0 text-highlight" />
              {contact.email}
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 px-5 py-5 text-center text-xs text-primary-foreground/55">
        © 2026 Zajul Technical Services Limited.
      </div>
    </footer>
  );
}

export function PageIntro({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="bg-primary py-16 text-primary-foreground lg:py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-6">
        <p className="section-kicker text-highlight">{eyebrow}</p>
        <h1 className="mt-3 max-w-4xl text-4xl font-bold md:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-primary-foreground/75">
          {children}
        </p>
      </div>
    </section>
  );
}
