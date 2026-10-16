import { useState, type FormEvent } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function InquiryForm({ serviceMode = false }: { serviceMode?: boolean }) {
  const [sent, setSent] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); if (event.currentTarget.checkValidity()) setSent(true); }
  if (sent) return <div role="status" className="border border-success/30 bg-success-soft p-8 text-center"><CheckCircle2 className="mx-auto size-10 text-success" /><h3 className="mt-4 text-xl font-bold">Thank you for your inquiry.</h3><p className="mt-2 text-sm text-muted-foreground">This prototype has recorded a demo success. No information was sent.</p><Button variant="outline" className="mt-6" onClick={() => setSent(false)}>Send another</Button></div>;
  return <form onSubmit={submit} className="grid gap-5" noValidate={false}>
    <div className="grid gap-5 sm:grid-cols-2"><label className="form-label">Full name<Input name="name" required placeholder="Your name" /></label><label className="form-label">Phone number<Input name="phone" required type="tel" placeholder="e.g. +254 ..." /></label></div>
    {serviceMode && <div className="grid gap-5 sm:grid-cols-2"><label className="form-label">Location<Input name="location" required placeholder="Project location" /></label><label className="form-label">Service required<select required name="service" className="form-control"><option value="">Choose a service</option><option>Solar installation</option><option>CCTV installation</option><option>Networking & cabling</option><option>Electrical installation</option></select></label></div>}
    {!serviceMode && <label className="form-label">Email address<Input name="email" type="email" required placeholder="you@example.com" /></label>}
    <label className="form-label">{serviceMode ? "Project description" : "How can we help?"}<Textarea required name="message" className="min-h-32" placeholder="Share the details we should know..." /></label>
    <Button type="submit" size="lg" className="w-full sm:w-fit">Send inquiry <Send /></Button><p className="text-xs text-muted-foreground">Prototype form — submissions are not sent or stored.</p>
  </form>;
}