# Repository import verification

Source: https://github.com/Routbe/compass-navigator-0961e654.git (main, shallow clone). Imported actual source, not the GitHub web page. Excluded `.git` and `.env` (backend keys of the source project). No deployed source reference supplied, so source/preview visual comparisons are blocked.

- Home desktop 1280x1800: renders (200); screenshot /tmp/browser/import/desktop.png. pass
- Home phone 390x844: renders; screenshot /tmp/browser/import/phone.png. pass
- Static URL QR: typed https://example.com/import-check after hydration; QR rendered, Download enabled; /tmp/browser/import/qr2.png. pass
- Header "Explore" link: navigates to /explore, page renders; /tmp/browser/import/explore.png. pass
- Phone menu, account/sign-in, profiles, dynamic links: unverified / blocked (original database and account system credentials not imported).
- Storage, email, payments, AI suggestions: credentials not imported; unverified.
- Typecheck timed out in the harness; build completed without errors.
