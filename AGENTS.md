<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Source import architecture
- Public growth pages use the recursive MDX catalog for content, explicit TanStack routes, canonical metadata and structured data; legacy QR spokes redirect while /qr remains the working generator. Why: one editorial source without duplicate indexed content or broken tool deep links.
- Documentation mirrors verified source behavior and labels examples or unverified operational status explicitly. Why: privacy, billing, retention and competitor claims must not exceed implemented guarantees.
- Workspace pricing uses a separate shared catalog for purchase intent; workspace creation validates plan_id and billing_cycle but never grants paid access from client input. Why: a pricing selection is not a verified subscription, and legacy entitlements require a separately reviewed migration and checkout.
- Keep the imported TanStack Start file routes, server entry, MDX catalog, and source design system together; public pages rely on these shared conventions.
- Preserve generated Lovable Cloud integrations and project settings; repository imports must not overwrite managed files or credentials.
- The imported application still uses its existing Neon gateway and Better Auth account system; do not silently replace it or apply its database scripts to the Cloud database.
- Every gateway batch starts with `set local role rout_app` before the role guard, and Better Auth uses the gateway Kysely dialect with `transaction: false`. Why: the linked login may be the owner, yet RLS must still apply, and the gateway has no interactive transactions.
- Subdirectories may contain their own AGENTS.md; read them before changing files there.
- Use the repository compiler and test configuration, including MDX virtual catalog support; its imported source was authored against those settings.
- Documentation uses AppLayout for the same public header/footer and inherited theme as the homepage; MDX enhancements stay inside the article, never define a separate site palette. Why: public and developer information must remain recognizably ROUT.
- External Vercel builds use build:vercel and the Vercel Nitro preset, while the Lovable wrapper retains its managed preview target; release configuration checks only report setting names. Why: catch mismatched origins and missing gateway credentials without exposing secrets or replacing the existing auth/database architecture.
- Workspace data that crosses membership boundaries (slug availability, team e-mails, invite acceptance, token lookups, public workspace pages, sunset cron) goes through narrow SECURITY DEFINER `rout_*` helpers from db/0155; plain tables keep member-scoped RLS. Why: rout_app must not see other tenants, yet creation, invites and public pages still need answers.
- Wallet top-up amounts come only from the shared tier list in `src/lib/wallet-tiers.ts`; checkout rejects non-tier amounts and the Stripe webhook credits only when the provider's paid amount and currency match the tier, keyed per PaymentIntent. Why: the client must never decide what gets credited, and session + intent events must not double-credit.
- Public endpoints return generic visitor errors and log through `src/lib/security/safe-errors.ts` / `redact.ts`; mail logs record param keys and lengths only. Why: raw database/provider errors and personal data must never reach visitors or logs.
