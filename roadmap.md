# Repository import

## Growth documentation and Studio cleanup
- [x] Remove Steam from QR choices; show four primary payments with international expansion; add Studio, dashboard, account and workspace guide links.
- [x] Add 52 recursive MDX pages, explicit nested routes, shared public header/footer, canonical metadata, HowTo/FAQ JSON-LD, sitemap and permanent QR spoke redirects.
- [x] Verify all 52 public routes return 200; SEPA/Wero/wifi render; FAQ schema, QR help, payment expansion, platform menu and phone layout pass browser checks without runtime errors. Manual typecheck exit 0; full suite 229 files / 1,311 tests passed; final targeted regression passed after QR deep-link fix.
- [ ] Verify authenticated dashboard, account and workspace help end-to-end — blocked by original Neon/Better Auth access; public guide destinations verified.
- [ ] Resolve restricted Neon access and persist workspace pricing intent/limits safely — reconnect completed but fresh query still identifies neondb_owner with BYPASSRLS; requires the existing rout_app connection, not a Neon management API key. No database or privilege changes made.

## Workspace pricing
- [x] Implement four-tier price/limit presentation catalog and category recommendations; use final prices and annual totals of ten months.
- [x] Replace workspace plan step with billing switch, pricing cards and expandable feature matrix.
- [x] Validate and pass tier ID and billing cycle through creation payload and response without granting unpaid premium access.
- [x] Verify rules and selection interactions: manual typecheck passed, 228 files / 1,305 tests passed; isolated cards checked on desktop and phone.
- [ ] Persist subscription intent in Neon and enforce new paid storage/QR/OIDC quotas — blocked by working restricted Neon access and a reviewed subscription checkout/activation flow. Existing paid entitlements are unchanged.
- [ ] Verify authenticated workspace creation end-to-end — blocked by original account configuration and restricted Neon access; isolated component verification is not full-flow verification.

## Vercel release readiness
- [x] Audit deployment adapter and environment requirements; preserve Neon gateway and Better Auth. Domain/DNS and Vercel settings remain externally unverified.
- [x] Add Vercel target, release environment validation, daily cleanup schedule and corrected deployment documentation.
- [x] Check content-route head coverage and all 35 documentation routes; replace 20 placeholders with substantive content while preserving ROUT's shared presentation. Full non-doc content/navigation review still needs live service setup.
- [x] Run regression tests: 226 files / 1,275 tests pass; manual typecheck passed. All 35 docs return 200; search, ToC, copy and phone navigation pass.
- [ ] Validate the actual Vercel build output — requires a Vercel deployment with its configured environment; not verified by local preview.
- [ ] Verify a gateway-compatible Better Auth transaction adapter — existing GatewayPool rejects interactive transactions; real account-flow verification also needs restricted Neon access.
- [ ] Verify the deployed Vercel domain and authenticated integrations — requires access to the Vercel deployment and working restricted Neon/auth configuration.

## Knowledge graph and credentials
- [x] Verify the complete four-pillar MDX catalogue; share the homepage header, footer and theme and order article navigation.
- [x] Verify reusable MDX components and detailed manifesto, badge and OIDC articles; expand custom-badge and credential documentation.
- [x] Audit OIDC sessions, account merge, email sync and existing credential visibility; distinguish source implementation from deployed functionality.
- [x] Verify public routing, MDX rendering, search, active ToC, clipboard and phone layout; typecheck passes and 1,268 tests pass with two workers.
- [ ] Verify authenticated OIDC, merge and webhook flows — blocked by restricted Neon connection and original authentication configuration.
- [ ] Complete external credential issuance and recipient controls — blocked by working restricted Neon access and verification of the deployed credential schema; issuance remains disabled.

- [x] Import repository source, styles, content, and assets without secrets or repository metadata.
- [x] Verify home page rendering on desktop/phone; routing and QR caption tests pass.
- [ ] Complete every-route and navigation comparison — blocked by no running reference site and service setup.
- [x] Link Neon and verify the database contains the imported app’s tables.
- [ ] Enable app data access — blocked because the linked connection uses neondb_owner; the app requires the existing restricted rout_app account.
- [ ] Configure the original account system — blocked by missing authentication configuration.
- [ ] Configure external storage, email, and payments — blocked by missing service credentials.
