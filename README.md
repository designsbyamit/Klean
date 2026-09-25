# Klean

Klean is a small, semantic design system built as a laboratory for compositional and generative UI.

## Goal

Move from:

Prompt -> LLM -> UI

toward:

Intent -> Context -> UX reasoning -> Capability -> Composition -> Component -> UI

Klean separates **design intelligence** from any particular renderer. React is the first renderer, but the semantic model is intended to remain renderer-agnostic.

## Stack

- TypeScript
- React + Next.js
- Tailwind CSS
- Radix primitives
- Zod
- Vitest + Testing Library

## Structure

- `src/components` - reusable Klean UI components
- `packages/metadata` - machine-readable component semantics and heuristics
- `src/app` - docs/playground surface

## First experiment

The initial registry deliberately stays small. The next stage is to expand semantic metadata, composition rules and a generator/critic playground rather than simply adding dozens of components.
