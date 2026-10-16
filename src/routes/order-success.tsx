import { createFileRoute, Link } from "@tanstack/react-router";
import { Truck, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SuccessPanel } from "@/components/zajul/success-panel";
import { SummaryRow } from "@/components/zajul/confirm-dialog";
import { products } from "@/lib/zajul-data";

type Search = { ref: string; product: string; qty: number; name: string };

export const Route = createFileRoute("/order-success")({
  validateSearch: (s: Record<string, unknown>): Search => ({
    ref: String(s["ref"] ?? "ZT-DEMO"),
    product: String(s["product"] ?? ""),
    qty: Number(s["qty"] ?? 1) || 1,
    name: String(s["name"] ?? ""),
  }),
  head: () => ({
    meta: [
      { title: "Order placed | Zajul Technical Services" },
      {
        name: "description",
        content: "Your Zajul order is on the way. Payment on delivery.",
      },
      { property: "og:title", content: "Order placed | Zajul" },
      {
        property: "og:description",
        content: "Your order is on the way. Pay on delivery.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: OrderSuccess,
});

function OrderSuccess() {
  const { ref, product: id, qty, name } = Route.useSearch();
  const product = products.find((p) => p.id === id);
  return (
    <SuccessPanel
      title={`Order placed${name ? `, ${name.split(" ")[0]}` : ""}!`}
      reference={ref}
      actions={
        <>
          <Button asChild>
            <Link to="/products">Continue shopping</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/">Back to home</Link>
          </Button>
        </>
      }
    >
      {product && (
        <div className="text-sm">
          <SummaryRow label="Product" value={product.name} />
          <SummaryRow label="Quantity" value={qty} />
        </div>
      )}
      <p className="flex gap-3">
        <Truck className="mt-0.5 size-5 shrink-0 text-secondary" />
        <span>
          <strong>Your order is on the way.</strong> Our team will call to
          confirm the delivery time.
        </span>
      </p>
      <p className="flex gap-3">
        <Wallet className="mt-0.5 size-5 shrink-0 text-highlight-strong" />
        <span>
          <strong>Payment on delivery</strong> — pay by cash or M-Pesa once you
          receive and inspect your items.
        </span>
      </p>
    </SuccessPanel>
  );
}
