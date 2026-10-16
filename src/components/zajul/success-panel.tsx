import type { ReactNode } from "react";
import { CheckCircle2, Phone } from "lucide-react";
import { contact } from "@/lib/zajul-data";

export function SuccessPanel({ title, reference, children, actions }: { title: string; reference: string; children: ReactNode; actions: ReactNode }) {
  return <section className="bg-muted py-16 lg:py-24"><div className="mx-auto max-w-2xl px-5">
    <div className="bg-background p-8 text-center shadow-card sm:p-12">
      <CheckCircle2 className="mx-auto size-14 text-success" />
      <h1 className="mt-5 text-3xl font-bold text-primary sm:text-4xl">{title}</h1>
      <p className="mt-2 text-sm text-muted-foreground">Reference <span className="font-bold text-foreground">{reference}</span></p>
      <div className="mt-6 space-y-3 text-left text-sm leading-6">{children}</div>
      <div className="mt-8 border border-primary/20 bg-primary p-5 text-primary-foreground">
        <p className="text-sm text-primary-foreground/75">Questions? Call Zajul customer care</p>
        <a href={`tel:${contact.phone.replaceAll(" ", "")}`} className="mt-1 inline-flex items-center gap-2 text-2xl font-bold text-highlight"><Phone className="size-5" />{contact.phone}</a>
        <p className="mt-1 text-xs text-primary-foreground/60">Alternative: {contact.marketingPhone}</p>
      </div>
      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">{actions}</div>
      <p className="mt-6 text-xs text-muted-foreground">Prototype confirmation — nothing was sent or stored.</p>
    </div>
  </div></section>;
}
