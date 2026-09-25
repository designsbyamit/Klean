import { Badge } from "@/components/badge";
import { Button } from "@/components/button";
import { Card, CardContent, CardHeader } from "@/components/card";
import { Input } from "@/components/input";
import { Table } from "@/components/table";

const components = [
  { name: "Button", role: "action", status: "ready" },
  { name: "Badge", role: "status", status: "ready" },
  { name: "Card", role: "container", status: "ready" },
  { name: "Input", role: "capture", status: "ready" },
  { name: "Table", role: "inspect / compare", status: "ready" }
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="max-w-3xl">
          <Badge>Klean v0.1</Badge>
          <h1 className="mt-5 text-5xl font-semibold tracking-tight">A design system that can reason about UI.</h1>
          <p className="mt-5 text-lg leading-8 text-neutral-600">
            Klean is a small, semantic design system built as a laboratory for compositional and generative UI.
            Components are not only visual building blocks. They carry meaning, capabilities and composition guidance.
          </p>
          <div className="mt-7 flex gap-3">
            <Button>Explore components</Button>
            <Button variant="outline">Read the model</Button>
          </div>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          <Card>
            <CardHeader>
              <h2 className="font-semibold">The Klean model</h2>
              <p className="mt-1 text-sm text-neutral-500">From intent to composition</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 font-mono text-sm">
                {["Intent", "Task", "Capability", "Composition", "Component", "UI"].map((item, i) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="w-6 text-neutral-400">{String(i + 1).padStart(2, "0")}</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h2 className="font-semibold">Try the atoms</h2>
              <p className="mt-1 text-sm text-neutral-500">Small components, real behavior</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input placeholder="Type something..." aria-label="Klean input example" />
              <div className="flex flex-wrap gap-2">
                <Button size="sm">Primary</Button>
                <Button size="sm" variant="outline">Secondary</Button>
                <Button size="sm" variant="soft">Soft</Button>
                <Badge>Semantic</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        <section className="mt-14">
          <h2 className="text-2xl font-semibold">Component registry</h2>
          <p className="mt-2 text-neutral-600">The first layer of Klean's machine-readable design language.</p>
          <div className="mt-5">
            <Table>
              <thead><tr className="border-b border-neutral-200 text-xs uppercase tracking-wide text-neutral-500">
                <th className="px-4 py-3">Component</th><th className="px-4 py-3">Semantic role</th><th className="px-4 py-3">Status</th>
              </tr></thead>
              <tbody>{components.map((c) => <tr key={c.name} className="border-b border-neutral-100 last:border-0">
                <td className="px-4 py-3 font-medium">{c.name}</td><td className="px-4 py-3 text-neutral-600">{c.role}</td><td className="px-4 py-3"><Badge>{c.status}</Badge></td>
              </tr>)}</tbody>
            </Table>
          </div>
        </section>
      </section>
    </main>
  );
}
