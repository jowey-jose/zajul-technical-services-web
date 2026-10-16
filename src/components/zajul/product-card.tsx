import { Link } from "@tanstack/react-router";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { contact, type Product } from "@/lib/zajul-data";

export function ProductCard({ product }: { product: Product }) {
  const message = encodeURIComponent(`Hello Zajul Technical Services, I would like to inquire about ${product.name} (${product.model}).`);
  return <article className="group flex h-full flex-col overflow-hidden border border-border bg-card shadow-card transition hover:-translate-y-1 hover:shadow-card-hover">
    <Link to="/products/$productId" params={{ productId: product.id }} className="block aspect-[4/3] overflow-hidden bg-muted">
      <img src={product.image} alt={product.name} className="size-full object-cover transition duration-500 group-hover:scale-[1.03]" width="1200" height="912" loading="lazy" />
    </Link>
    <div className="flex flex-1 flex-col p-5">
      <div className="mb-3 flex items-center justify-between gap-3"><Badge variant="secondary">{product.category}</Badge><span className="text-xs text-muted-foreground">{product.model}</span></div>
      <h2 className="text-lg font-bold text-foreground"><Link to="/products/$productId" params={{ productId: product.id }} className="hover:text-secondary">{product.name}</Link></h2>
      <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted-foreground">{product.description}</p>
      <div className="mt-auto pt-5"><p className="mb-4 font-bold text-primary">{product.price ? `KSh ${product.price.toLocaleString()}` : "Request a Quote"} <span className="text-[10px] font-medium uppercase text-muted-foreground">Demo</span></p><div className="flex gap-2"><Button asChild variant="outline" size="sm" className="flex-1"><Link to="/products/$productId" params={{ productId: product.id }}>Details <ArrowUpRight /></Link></Button><Button asChild size="icon"><a href={`https://wa.me/${contact.whatsapp}?text=${message}`} target="_blank" rel="noreferrer" aria-label={`Inquire about ${product.name} on WhatsApp`}><MessageCircle /></a></Button></div></div>
    </div>
  </article>;
}