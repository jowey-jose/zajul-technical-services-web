import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowLeft,
  CheckCircle2,
  ShoppingCart,
  MessageCircle,
  PackageCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/zajul/product-card";
import { contact, productDetails, products } from "@/lib/zajul-data";

export const Route = createFileRoute("/products_/$productId")({
  loader: ({ params }) => {
    const product = products.find((p) => p.id === params.productId);
    if (!product) throw notFound();
    return product;
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData
          ? `${loaderData.name} | Zajul`
          : "Product unavailable | Zajul",
      },
      {
        name: "description",
        content:
          loaderData?.description ??
          "The requested Zajul product could not be found.",
      },
      {
        property: "og:title",
        content: loaderData?.name ?? "Product unavailable",
      },
      {
        property: "og:description",
        content:
          loaderData?.description ??
          "Explore products from Zajul Technical Services.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProductDetails,
});
function ProductDetails() {
  const product = Route.useLoaderData();
  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);
  const message = encodeURIComponent(
    `Hello Zajul Technical Services, I would like to inquire about ${product.name} (${product.model}).`,
  );
  return (
    <>
      <section className="py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-6">
          <Link
            to="/products"
            className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-secondary"
          >
            <ArrowLeft className="size-4" />
            Back to products
          </Link>
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  className="size-full object-cover"
                  width="1200"
                  height="912"
                />
              </div>
              <div className="mt-3 grid grid-cols-3 gap-3">
                {[product.image, product.image, product.image].map((img, i) => (
                  <div
                    key={i}
                    className={`aspect-[4/3] overflow-hidden border ${i === 0 ? "border-secondary" : "border-border"}`}
                  >
                    <img
                      src={img}
                      alt={`${product.name} view ${i + 1}`}
                      className="size-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:pl-8">
              <p className="section-kicker text-secondary">
                {product.category}
              </p>
              <h1 className="mt-3 text-4xl font-bold text-primary lg:text-5xl">
                {product.name}
              </h1>
              <p className="mt-3 text-sm font-semibold text-muted-foreground">
                Model: {product.model}
              </p>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                {product.description}
              </p>
              <p className="mt-4 leading-7 text-muted-foreground">
                {productDetails[product.id]}
              </p>
              <div className="mt-7 flex items-center gap-3 border-y border-border py-5">
                <PackageCheck className="size-5 text-success" />
                <span className="font-bold">{product.stock}</span>
                <span className="text-xs text-muted-foreground">
                  Demonstration status
                </span>
              </div>
              <div className="mt-7">
                <p className="text-3xl font-bold text-primary">
                  {product.price
                    ? `KSh ${product.price.toLocaleString()}`
                    : "Request a Quote"}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Demonstration price only. Confirm current quotation.
                </p>
              </div>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link
                    to="/checkout/$productId"
                    params={{ productId: product.id }}
                  >
                    <ShoppingCart />
                    Make order
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a
                    href={`https://wa.me/${contact.whatsapp}?text=${message}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MessageCircle />
                    Inquire on WhatsApp
                  </a>
                </Button>
              </div>
              <p className="mt-3 text-xs text-muted-foreground">
                Payment on delivery. No upfront payment required.
              </p>
              <div className="mt-10">
                <h2 className="text-xl font-bold text-primary">
                  Technical specifications
                </h2>
                <dl className="mt-4 divide-y divide-border border-y border-border">
                  {product.specs.map(([k, v]) => (
                    <div
                      key={k}
                      className="grid grid-cols-2 gap-4 py-3 text-sm"
                    >
                      <dt className="font-semibold text-muted-foreground">
                        {k}
                      </dt>
                      <dd className="font-bold">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div className="mt-8 flex gap-3 text-sm text-muted-foreground">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-highlight-strong" />
                <p>
                  Ask our team to verify compatibility and size the complete
                  system for your application.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {related.length > 0 && (
        <section className="bg-muted py-16">
          <div className="mx-auto max-w-7xl px-5 lg:px-6">
            <h2 className="text-3xl font-bold text-primary">
              Related products
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
