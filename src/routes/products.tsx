import { createFileRoute } from "@tanstack/react-router";
import { Search, SlidersHorizontal } from "lucide-react";
import { useMemo, useState } from "react";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/zajul/product-card";
import { PageIntro } from "@/components/zajul/site-shell";
import { categories, products } from "@/lib/zajul-data";

const searchSchema = z.object({ category: z.string().optional() });
export const Route = createFileRoute("/products")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Products | Zajul Technical Services" },
      {
        name: "description",
        content:
          "Browse sample solar, CCTV, networking and electrical equipment from Zajul Technical Services.",
      },
      { property: "og:title", content: "Technical Products | Zajul" },
      {
        property: "og:description",
        content:
          "Explore equipment for power, security, connectivity and electrical installations.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const initial = Route.useSearch().category ?? "All";
  const [category, setCategory] = useState(initial);
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("featured");
  const visible = useMemo(
    () =>
      products
        .filter(
          (p) =>
            (category === "All" || p.category === category) &&
            `${p.name} ${p.model} ${p.description}`
              .toLowerCase()
              .includes(query.toLowerCase()),
        )
        .sort((a, b) =>
          sort === "low"
            ? (a.price ?? Infinity) - (b.price ?? Infinity)
            : sort === "high"
              ? (b.price ?? 0) - (a.price ?? 0)
              : Number(Boolean(b.featured)) - Number(Boolean(a.featured)),
        ),
    [category, query, sort],
  );
  return (
    <>
      <PageIntro
        eyebrow="Product catalogue"
        title="Equipment selected for dependable systems"
      >
        Browse demonstration products, then contact our team to confirm the
        right specification, latest price and availability.
      </PageIntro>
      <section className="py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-6">
          <div className="mb-5 border-l-4 border-highlight bg-muted p-4 text-sm text-muted-foreground">
            <strong className="text-foreground">Prototype catalogue:</strong>{" "}
            prices, product models and stock states are demonstration data only.
          </div>
          <div className="sticky top-20 z-20 mb-10 border border-border bg-background p-4 shadow-card">
            <div className="grid gap-3 lg:grid-cols-[1fr_auto_auto]">
              <label className="relative">
                <span className="sr-only">Search products</span>
                <Search className="absolute left-3 top-3.5 size-4 text-muted-foreground" />
                <Input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="h-11 pl-10"
                  placeholder="Search products or models"
                />
              </label>
              <label className="flex items-center gap-2">
                <SlidersHorizontal className="size-4 text-primary" />
                <span className="sr-only">Category</span>
                <select
                  className="form-control min-w-52"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option>All</option>
                  {categories.map((c) => (
                    <option key={c.name}>{c.name}</option>
                  ))}
                </select>
              </label>
              <label>
                <span className="sr-only">Sort products</span>
                <select
                  className="form-control min-w-44"
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                >
                  <option value="featured">Featured first</option>
                  <option value="low">Price: low to high</option>
                  <option value="high">Price: high to low</option>
                </select>
              </label>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {["All", ...categories.map((c) => c.name)].map((c) => (
                <Button
                  key={c}
                  type="button"
                  size="sm"
                  variant={category === c ? "navy" : "ghost"}
                  onClick={() => setCategory(c)}
                >
                  {c}
                </Button>
              ))}
            </div>
          </div>
          <div className="mb-5 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Showing{" "}
              <strong className="text-foreground">{visible.length}</strong>{" "}
              products
            </p>
          </div>
          {visible.length ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {visible.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          ) : (
            <div className="border border-dashed border-border py-20 text-center">
              <h2 className="text-xl font-bold">No matching products</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Try another search or category.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
