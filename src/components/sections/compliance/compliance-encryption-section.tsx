"use client";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { encryptionLayers } from "@/data/compliance";

export function ComplianceEncryptionSection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container space-y-8">
        <div className="space-y-3">
          <h3 className="text-3xl font-semibold md:text-4xl">Data Encryption & Secure Storage</h3>
          <p className="text-slate-600 md:max-w-4xl">
            Multi-layered encryption strategy that protects PHI in transit and at rest with managed keys and secure infrastructure.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {encryptionLayers.map((item, index) => (
            <Card key={item.title} className="border-slate-200 bg-white shadow-md">
              <CardHeader className="space-y-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
                    {index + 1}
                  </span>
                </div>
                <CardDescription className="text-slate-600">{item.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
        <p className="text-sm text-slate-600">
          Defense-in-depth means multiple protective mechanisms must fail before PHI could be compromised, reducing risk against evolving threats.
        </p>
      </div>
    </section>
  );
}
