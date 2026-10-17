import { useState, type FormEvent } from "react";
import {
  createFileRoute,
  Link,
  notFound,
  useNavigate,
} from "@tanstack/react-router";
import {
  ArrowLeft,
  Minus,
  Plus,
  ShieldCheck,
  Truck,
  Wallet,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ConfirmDialog, SummaryRow } from "@/components/zajul/confirm-dialog";
import { contact, makeReference, products } from "@/lib/zajul-data";

export const Route = createFileRoute("/checkout/$productId")({
  loader: ({ params }) => {
    const product = products.find((p) => p.id === params.productId);
    if (!product) throw notFound();
    return product;
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData
          ? `Order ${loaderData.name} | Zajul`
          : "Checkout | Zajul",
      },
      {
        name: "description",
        content:
          "Place your order with Zajul Technical Services. Payment on delivery.",
      },
      { property: "og:title", content: "Checkout | Zajul Technical Services" },
      {
        property: "og:description",
        content: "Confirm your order and pay on delivery.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Checkout,
});

function Checkout() {
  const product = Route.useLoaderData();
  const navigate = useNavigate();
  const [qty, setQty] = useState(1);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    location: "",
    notes: "",
  });
  const [open, setOpen] = useState(false);
  const total = product.price ? product.price * qty : undefined;
  const fmt = (n?: number) =>
    n ? `KSh ${n.toLocaleString()}` : "Quoted on confirmation";

  function review(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (e.currentTarget.reportValidity()) setOpen(true);
  }
  function place() {
    const ref = makeReference("ZT");
    toast.success("Order placed and on the way!", {
      description: `Payment on delivery. Questions? Call ${contact.phone}.`,
    });
    navigate({
      to: "/order-success",
      search: { ref, product: product.id, qty, name: form.name },
    });
  }

  return (
    <section className="bg-muted py-12 lg:py-20">
      <div className="mx-auto max-w-6xl px-5 lg:px-6">
        <Link
          to="/products/$productId"
          params={{ productId: product.id }}
          className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-secondary"
        >
          <ArrowLeft className="size-4" />
          Back to product
        </Link>
        <p className="section-kicker text-secondary">Checkout</p>
        <h1 className="mt-3 text-4xl font-bold text-primary">
          Complete your order
        </h1>
        <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <form
            onSubmit={review}
            className="grid gap-5 bg-background p-6 shadow-card sm:p-9"
          >
            <h2 className="text-xl font-bold text-primary">Delivery details</h2>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="form-label">
                Full name
                <Input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
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
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="e.g. 0712 345 678"
                />
              </label>
            </div>
            <label className="form-label">
              Delivery location
              <Input
                required
                value={form.location}
                onChange={(e) => setForm({ ...form, location: e.target.value })}
                placeholder="Town, estate or building"
              />
            </label>
            <label className="form-label">
              Order notes (optional)
              <Textarea
                value={form.notes}
                onChange={(e) => setForm({ ...form, notes: e.target.value })}
                placeholder="Landmarks, preferred delivery time..."
              />
            </label>
            <div className="flex items-start gap-3 border border-highlight/50 bg-highlight/10 p-4 text-sm">
              <Wallet className="mt-0.5 size-5 shrink-0 text-highlight-strong" />
              <p>
                <strong>Payment on delivery.</strong> Pay by cash or M-Pesa when
                your order arrives. No upfront payment needed.
              </p>
            </div>
            <Button type="submit" size="lg" className="w-full sm:w-fit">
              Make order
            </Button>
            <p className="text-xs text-muted-foreground">
              Prototype checkout — orders are not sent or stored.
            </p>
          </form>
          <aside className="h-fit bg-background p-6 shadow-card">
            <h2 className="text-xl font-bold text-primary">Order summary</h2>
            <div className="mt-5 flex gap-4">
              <img
                src={product.image}
                alt={product.name}
                className="size-20 object-cover"
                width="80"
                height="80"
              />
              <div>
                <p className="font-bold">{product.name}</p>
                <p className="text-xs text-muted-foreground">{product.model}</p>
                <p className="mt-1 text-sm font-semibold text-primary">
                  {fmt(product.price)}
                </p>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <span className="text-sm font-semibold">Quantity</span>
              <div className="flex items-center border border-border">
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  aria-label="Decrease quantity"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                >
                  <Minus />
                </Button>
                <span className="w-10 text-center font-bold">{qty}</span>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  aria-label="Increase quantity"
                  onClick={() => setQty((q) => Math.min(99, q + 1))}
                >
                  <Plus />
                </Button>
              </div>
            </div>
            <div className="mt-6 border-t border-border pt-4 text-sm">
              <SummaryRow label="Delivery" value="Confirmed by phone" />
              <div className="flex justify-between pt-3 text-lg font-bold text-primary">
                <span>Total</span>
                <span>{fmt(total)}</span>
              </div>
              <p className="mt-1 text-[11px] text-muted-foreground">
                Demonstration prices.
              </p>
            </div>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <Truck className="size-4 text-secondary" />
                Delivered by the Zajul team
              </li>
              <li className="flex gap-2">
                <ShieldCheck className="size-4 text-secondary" />
                Inspect before you pay
              </li>
            </ul>
          </aside>
        </div>
        <ConfirmDialog
          open={open}
          onOpenChange={setOpen}
          title="Confirm your order"
          confirmLabel="Confirm order"
          onConfirm={place}
        >
          <SummaryRow label="Product" value={product.name} />
          <SummaryRow label="Quantity" value={qty} />
          <SummaryRow label="Total" value={fmt(total)} />
          <SummaryRow label="Deliver to" value={form.location} />
          <SummaryRow label="Payment" value="On delivery" />
        </ConfirmDialog>
      </div>
    </section>
  );
}
