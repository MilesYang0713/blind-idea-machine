# Blind Idea Machine

> Let ideas lose their owners first; let contributors reclaim recognition later.

Blind Idea Machine is a blind-deliberation prototype for teams. It does not replace leadership with a vote. Instead, it gives leaders a cleaner decision signal by allowing people to assess ideas before hierarchy, identity, meeting dynamics, or groupthink can distort the discussion.

## Core principles

1. **Eligibility is verifiable; identity is not part of deliberation.** Organisation accounts confirm eligibility and one vote per person, while review remains identity-blind.
2. **Randomised release reduces side-channel clues.** Proposals are released within a bounded random window, making authorship harder to infer from timing or context.
3. **No group signals before closing.** Totals, comments, voter lists, and participation progress remain hidden until the round closes.
4. **Results are signals, not commands.** The decision owner remains accountable for resources, risk, and the final disposition, and records a brief response.
5. **Contribution can be recovered.** Authorship is sealed and may be voluntarily revealed after a successful outcome for credit or reward.

## This MVP includes

- An anonymous proposal form with an identity-clue preflight
- A random release window and anonymous submission receipt
- Four independent judgment modes with a required rationale
- Post-close aggregate signals, anonymous themes, and a decision-owner response
- A Chinese / English interface toggle, with the visitor's choice remembered locally

## Current scope

This is a static, high-fidelity front-end demonstration. Demo data and submissions are stored only in the browser. It does not yet connect to real single sign-on, eligibility tokens, a database, scheduled jobs, or an AI service.

## Local preview

```powershell
python -m http.server 4173 --directory dist
```

Then open `http://127.0.0.1:4173`.

## Suggested next steps

1. Connect organisation identity and issue one-time anonymous voting credentials.
2. Implement auditable random release and close events with a server-side queue.
3. Add an AI redaction preview, a human-exception path, and an encrypted authorship vault.
4. Track the decision loop: adopt, pilot, defer, merge, or decline.

