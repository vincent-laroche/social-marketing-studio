# Social Marketing Studio

Social Marketing Studio is the private Hair Solutions Co. workspace for social media planning, creative review, caption systems, brand consistency, asset production, and launch campaign support.

This is not a customer-facing site. It is an internal operating surface for Vincent, Claude, and Codex.

## Project Coordinates

- Local repo: `/Users/vMac/03_agents/Projects/Social Media Marketing`
- GitHub repo: `https://github.com/vincent-laroche/social-marketing-studio`
- Primary branch: `main`
- Private live URL: `https://social-marketing-studio.hairsolutions.co`
- Cloudflare Worker: `social-marketing-studio`
- Cloudflare Access app: `Hair Solutions Social Marketing Studio`
- Access policy: `Vincent only` for `vincent@hairsolutions.co`

The live URL must be private. A public unauthenticated `200` from `social-marketing-studio.hairsolutions.co` is a security bug.

## What This Repo Contains

- Vinext / React / TypeScript routes in `app/`.
- Social content seed data and completion logic in `lib/`.
- Notion read integration in `lib/notion.ts`.
- Cloudflare Worker entry in `worker/index.ts`.
- Cloudflare/Vinext build configuration in `vite.config.ts`.

## Install

```bash
cd "/Users/vMac/03_agents/Projects/Social Media Marketing"
npm install
```

## Run Locally

```bash
npm run dev
```

For a production-style local run:

```bash
npm run build
npm run start
```

## Verify

```bash
npm run lint
npm run build
npm run verify
```

There is no automated test suite yet. Add focused tests before broad sync, write-capable integrations, or large data-normalization changes.

## Deploy

Deployment uses the Vinext Cloudflare Worker output in `dist/server`.

```bash
npm run verify
set -a && source /Users/vMac/.env && set +a
export CLOUDFLARE_API_TOKEN="${CLOUDFLARE_SOCIAL_MARKETING_STUDIO_DEPLOY_TOKEN:-$CLOUDFLARE_MASTER_ACCOUNT_API_TOKEN}"
npm run deploy:worker
```

Runtime secrets must be set in Cloudflare, not committed:

- `NOTION_DEV_TOKEN`

After deploy, verify Cloudflare Access:

```bash
curl -I https://social-marketing-studio.hairsolutions.co
```

Expected unauthenticated behavior: a `302` redirect to Cloudflare Access login. A public `200` means the site is not private.

## Canonical Source

GitHub is the durable source of truth:

```text
https://github.com/vincent-laroche/social-marketing-studio
```

The repo should contain everything needed to understand, run, edit, maintain, and redeploy the studio without depending on hidden Codex-only state.

## Safety Rules

- Do not publish social posts.
- Do not schedule posts.
- Do not send DMs, replies, or comments.
- Do not alter social accounts, ad accounts, permissions, integrations, pixels, audiences, or billing without Vincent's explicit approval.
- Do not expose tokens, secrets, customer data, testimonials with private identifiers, unpublished campaign material, screenshots with private data, or `.env` values.
- Do not invent product claims, medical claims, guarantees, discounts, refund language, shipping promises, policy language, or customer outcomes.
- Keep changes small, reversible, documented, and verified.

## Brand and Content Rules

Hair Solutions Co. social creative should be calm, plain-spoken, educational, premium, and discreet.

Avoid:

- Pity-led language.
- Aggressive sales language.
- Clinical or medical framing.
- Emoji unless Vincent explicitly requests it for a specific artifact.
- Exclamation marks by default.
- Unverified before/after claims.
- Guaranteed transformation language.

Social creative should preserve privacy, dignity, and trust over virality.
