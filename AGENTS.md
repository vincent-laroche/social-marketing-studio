# Social Marketing Studio Agent Rules

## Purpose

Social Marketing Studio is Hair Solutions Co.'s private social media operating workspace. It supports content planning, creative review, caption drafting, launch calendars, asset readiness, and campaign support.

This is internal only. Do not treat it as a customer-facing website.

## Project Coordinates

- Local repo: `/Users/vMac/04_marketing/social-media-marketing-site`
- GitHub repo: `https://github.com/vincent-laroche/Social-Marketing-Studio`
- Primary branch: `main`
- Private live URL: `https://social-marketing-studio.hairsolutions.co`
- Cloudflare Worker: `social-marketing-studio`
- Cloudflare Access app: `Hair Solutions Social Marketing Studio`
- Access policy: `Vincent only` for `vincent@hairsolutions.co`

The live URL must be protected by Cloudflare Access. A public unauthenticated `200` is a release blocker.

## Setup

```bash
npm install
npm run dev
```

## Build and Verification

```bash
npm run lint
npm run build
npm run verify
```

## Deployment

Deploy only from a clean, verified build:

```bash
npm run verify
set -a && source /Users/vMac/.env && set +a
export CLOUDFLARE_API_TOKEN="${CLOUDFLARE_SOCIAL_MARKETING_STUDIO_DEPLOY_TOKEN:-$CLOUDFLARE_MASTER_ACCOUNT_API_TOKEN}"
npm run deploy:worker
```

Cloudflare runtime secrets must be set through Wrangler or the Cloudflare dashboard, never committed:

- `NOTION_DEV_TOKEN`

After deployment, verify unauthenticated traffic redirects to Cloudflare Access:

```bash
curl -I https://social-marketing-studio.hairsolutions.co
```

## Repo Structure

- `app/`: Vinext/React app routes and UI.
- `lib/`: social content seed data, Notion read integration, completion logic.
- `worker/`: Cloudflare Worker entrypoint.
- `build/`: Sites/Vinext build helper.
- `public/`: static assets.

## Git Rules

- Use `main` as the primary branch unless Vincent explicitly changes it.
- Keep GitHub remote `origin` pointed at `https://github.com/vincent-laroche/Social-Marketing-Studio`.
- Preserve the prior Sites source remote as `sites-source` if still needed.
- Keep changes small, reviewable, and reversible.
- Do not commit generated folders, screenshots, local logs, `.env`, or secrets.

## Social Platform Safety

Do not perform these actions without Vincent's explicit approval:

- Publish or schedule social posts.
- Send DMs, comments, replies, or public messages.
- Alter social accounts, ad accounts, permissions, integrations, pixels, audiences, billing, or connected apps.
- Change customer-facing policy, pricing, discount, shipping, refund, guarantee, medical, or outcome claims.
- Use customer/testimonial material that includes private identifiers or lacks consent.

## Content Rules

Hair Solutions Co. voice is calm, plain-spoken, educational, premium, and discreet.

Avoid:

- Pity-led or aggressive sales language.
- Medical framing.
- Unverified before/after claims.
- Guaranteed transformation language.
- Emoji unless Vincent explicitly requests it for a specific artifact.
- Exclamation marks by default.

Social creative should preserve trust, privacy, and dignity.

## Review Checklist

- App builds.
- GitHub source is pushed to `main`.
- Live URL is protected by Cloudflare Access.
- No secrets or customer data are committed.
- Notion integration remains read-only unless Vincent approves writes.
- Social platform actions remain read-only unless Vincent approves publishing/scheduling.
