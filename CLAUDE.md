# Claude Guide

## What This Project Is

Social Marketing Studio is Hair Solutions Co.'s private social media workspace for planning, reviewing, and operating social content. It covers content calendars, daily posting plans, mockups, production readiness, captions, Notion-backed planning data, and HubSpot Social shortcuts.

It is not customer-facing.

## Where It Lives

- Local repo: `/Users/vMac/03_agents/Projects/Social Media Marketing`
- GitHub repo: `https://github.com/vincent-laroche/social-marketing-studio`
- Primary branch: `main`
- Private live URL: `https://social-marketing-studio.hairsolutions.co`
- Cloudflare Worker: `social-marketing-studio`
- Cloudflare Access app: `Hair Solutions Social Marketing Studio`
- Access policy: `Vincent only` for `vincent@hairsolutions.co`

The live site is internal. Do not say it is private unless unauthenticated access redirects to Cloudflare Access.

## How To Inspect

Start with:

```bash
cd "/Users/vMac/03_agents/Projects/Social Media Marketing"
git status --short --branch
npm run lint
npm run build
```

Read these files before recommending structural changes:

- `README.md`
- `AGENTS.md`
- `app/components.tsx`
- `app/daily/page.tsx`
- `lib/data.ts`
- `lib/notion.ts`

## Review Focus

When reviewing the app, check:

- Operator usability for daily social execution.
- Clear production status and next-step guidance.
- Notion sync assumptions.
- Creative mockup readability.
- Brand consistency with Hair Solutions Co.
- Privacy, dignity, and claims safety.
- Whether pending assets/captions/dates are clearly visible.

## Language Guardrails

- Calm.
- Plain-spoken.
- Educational.
- Premium but discreet.
- Never pitying.
- Never clinical.
- No emoji unless Vincent asks for a specific artifact.
- No exclamation marks by default.
- No unverified before/after claims.
- No guaranteed transformation language.
- No medical framing.

## Social Platform Safety

Claude may review, draft, and critique social content. Claude must not recommend or perform live platform writes without Vincent's explicit approval.

Do not:

- Publish posts.
- Schedule posts.
- Send DMs, comments, or replies.
- Alter social account settings, ad accounts, pixels, audiences, billing, permissions, or integrations.
- Invent claims about products, outcomes, policies, discounts, refunds, shipping, or guarantees.

## Deployment Review

Deployment is through Cloudflare Workers:

```bash
npm run verify
set -a && source /Users/vMac/.env && set +a
export CLOUDFLARE_API_TOKEN="${CLOUDFLARE_SOCIAL_MARKETING_STUDIO_DEPLOY_TOKEN:-$CLOUDFLARE_MASTER_ACCOUNT_API_TOKEN}"
npm run deploy:worker
```

Cloudflare Access must protect `social-marketing-studio.hairsolutions.co` for `vincent@hairsolutions.co`.

Runtime secrets are Cloudflare-managed only and must never appear in docs, commits, screenshots, or messages.
