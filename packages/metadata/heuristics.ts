export const experienceHeuristics = [
  { id: "intent-first", principle: "Choose representation from user intent, not component familiarity." },
  { id: "progressive-disclosure", principle: "Expose the minimum information needed for the current decision, then reveal detail on demand." },
  { id: "action-proximity", principle: "Keep important actions close to the information they affect." },
  { id: "consistency", principle: "Prefer stable interaction patterns unless context provides a strong reason to vary them." },
  { id: "accessible-by-default", principle: "Accessibility is a composition constraint, not a final QA step." }
] as const;
