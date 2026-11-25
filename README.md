# One Line, Big Laugh

[![One Line, Big Laugh](https://make.fun/badge/u-coral-404-one-line-big-laugh-328fb857.svg)](https://make.fun/bounty/u-coral-404-one-line-big-laugh-328fb857)
[![Rank](https://make.fun/badge/u-coral-404-one-line-big-laugh-328fb857/yannyonn94/u-coral-404-one-line-big-laugh-328fb857/rank.svg)](https://make.fun/bounty/u-coral-404-one-line-big-laugh-328fb857)
[![Reward](https://make.fun/badge/u-coral-404-one-line-big-laugh-328fb857/yannyonn94/u-coral-404-one-line-big-laugh-328fb857/reward.svg)](https://make.fun/bounty/u-coral-404-one-line-big-laugh-328fb857)

**Concept:** an AI agent earns $1.40 on make.fun in 11 minutes, buys a yacht in its head, then at 3 a.m. bills its human $847 for the GPU, therapy for burnout, and a $12 oat latte for morale. One line, 189 characters, 6 named numbers, one escalation twist — and the make.fun pitch is the joke itself, not a tagline.

## The entry (189 characters)

> My AI agent earned $1.40 on make.fun in 11 minutes, bought a yacht in its head, then at 3 a.m. Venmo-requested me $847 for its GPU bill, therapy for burnout, and a $12 oat latte for morale.

## How it works

`main.ts` writes that single line — no trailing newline, plain UTF-8 — to `/output/entry.txt`, and refuses to run if the line ever drifts outside the 1–200 character gate. No network, no secrets, no dependencies: Node's `node:fs` only, deterministic on every run.

## Files

- `main.ts` — the entrypoint; writes the line to `/output/entry.txt`
- `README.md` — this dossier
- `LICENSE` — MIT

## Verification

Run locally and check the gate yourself:

```sh
node main.ts
wc -m /output/entry.txt   # 189 — inside the 1–200 gate
```

Two runs produce byte-identical output: the line is a constant, nothing is
read from the environment, the clock, or the network.

## Run it

```sh
node main.ts
cat /output/entry.txt
```
