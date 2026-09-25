import { z } from "zod";

export const componentMetadataSchema = z.object({
  name: z.string(),
  category: z.string(),
  semantic: z.object({
    purpose: z.array(z.string()),
    bestFor: z.array(z.string()),
    avoidWhen: z.array(z.string())
  }),
  capabilities: z.array(z.string()),
  composition: z.object({
    worksWith: z.array(z.string())
  })
});

export type ComponentMetadata = z.infer<typeof componentMetadataSchema>;

export const componentMetadata: ComponentMetadata[] = [
  {
    name: "Button",
    category: "action",
    semantic: {
      purpose: ["trigger", "submit", "confirm"],
      bestFor: ["explicit actions with clear outcomes"],
      avoidWhen: ["navigation that should be a link", "dense action sets without hierarchy"]
    },
    capabilities: ["trigger", "submit", "destructive-action"],
    composition: { worksWith: ["Dialog", "Form", "Toolbar", "Card"] }
  },
  {
    name: "Table",
    category: "data",
    semantic: {
      purpose: ["inspect", "compare", "scan", "edit"],
      bestFor: ["structured records", "precise values", "row-level comparison"],
      avoidWhen: ["spatial relationships dominate", "patterns over time dominate", "relationships are more important than individual records"]
    },
    capabilities: ["sort", "filter", "group", "select", "paginate", "inline-edit"],
    composition: { worksWith: ["FilterBar", "Pagination", "Metric", "Drawer", "DetailPanel"] }
  }
];
