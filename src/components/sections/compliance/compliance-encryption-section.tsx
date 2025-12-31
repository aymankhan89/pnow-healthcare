"use client";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { encryptionLayers } from "@/data/compliance";

export function ComplianceEncryptionSection() {
  return (
    <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 py-16 text-white lg:py-24">
      <div className="container space-y-8">
        <div className="space-y-3">
          <h3 className="text-3xl font-semibold md:text-4xl">Data Encryption & Secure Storage</h3>
          <p className="text-blue-100/85 md:max-w-4xl">
            Multi-layered encryption strategy that protects PHI in transit and at rest with managed keys and secure infrastructure.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {encryptionLayers.map((item, index) => (
            <Card key={item.title} className="border-white/10 bg-white/5 text-slate-100 shadow-2xl shadow-blue-500/20 backdrop-blur">
              <CardHeader className="space-y-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-sm font-semibold text-white">
                    {index + 1}
                  </span>
                </div>
                <CardDescription className="text-blue-100/85">{item.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
        <p className="text-sm text-blue-100/80">
          Defense-in-depth means multiple protective mechanisms must fail before PHI could be compromised, reducing risk against evolving threats.
        </p>
      </div>
    </section>
  );
}
