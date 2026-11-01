# Repository import verification

Source: https://github.com/Routbe/compass-navigator-f3b8cbff.git, main snapshot 208c700200c1d0db66ea9130be208836b943f8a7. Imported actual source, not the GitHub web page. No deployed source reference was supplied, so source/preview visual comparisons are blocked.

- Home desktop 1280x1800: renders; screenshot /tmp/browser/import/desktop.png.
- Home phone 390x844: renders without document horizontal overflow; screenshot /tmp/browser/import/phone.png.
- Static URL QR: entered https://example.com/import-check after hydration; QR generated and PNG download succeeded; screenshot /tmp/browser/import/final-qr.png.
- Primary navigation and all-route comparison: unverified.
- Account, profile data, dynamic links: blocked by missing original Neon connection and Better Auth configuration.
- External storage/email/payments: credentials not imported; unverified.
- Noncritical external favicon request was blocked by the browser.
- No reconstructed motion or replacement static imagery was introduced.
