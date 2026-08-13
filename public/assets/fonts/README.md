# Self-Hosted Fonts

These production font assets are unmodified official WOFF2 variable fonts. They are served from the same origin as the portfolio; the page makes no runtime font requests to third parties.

## Sources

| Asset                        | Official release                                                                                                                                                     | Upstream file                                                                                                                                                       | SHA-256                                                            |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| `Geist-Variable.woff2`       | [Geist v1.7.2](https://github.com/vercel/geist-font/releases/tag/v1.7.2), published June 1, 2026                                                                     | `Geist/webfonts/Geist[wght].woff2` from [`geist-font-v1.7.2.zip`](https://github.com/vercel/geist-font/releases/download/v1.7.2/geist-font-v1.7.2.zip)              | `a369fcf5628ea2aa4e1b9e2ec6a5b3624e365bda588e1f0f2f12b564f728fbb8` |
| `GeistMono-Variable.woff2`   | [Geist v1.7.2](https://github.com/vercel/geist-font/releases/tag/v1.7.2), published June 1, 2026                                                                     | `GeistMono/webfonts/GeistMono[wght].woff2` from [`geist-font-v1.7.2.zip`](https://github.com/vercel/geist-font/releases/download/v1.7.2/geist-font-v1.7.2.zip)      | `fba8f577f38a2bbcbe818efa6348dd58f36303a10b8737c42fefad275be563ab` |
| `Inter-Latin-Variable.woff2` | [Google Fonts Inter API](https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap), retrieved August 13, 2026; generated CSS identifies Inter `v20` | Official Google Fonts [Latin variable WOFF2](https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1ZL7W0Q5nw.woff2), weights 100–900, normal style | `c940764593d0fe5d596be327ca7558855e018039fb78509aa21921fd3644c3e4` |

The Inter Latin face uses the exact range published by the official Google Fonts CSS:

```text
U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193,
U+2212, U+2215, U+FEFF, U+FFFD
```

This includes Basic Latin and Latin-1 Supplement, including `á`, `é`, `í`, `ó`, `ú`, `ü`, `ñ`, and `Á`–`Ü` used by English and Spanish portfolio content. Characters outside the declared range, including emoji, continue through the system fallback stack.

## Licenses

- Geist and Geist Mono: `LICENSE-Geist-OFL-1.1.txt`
- Inter: `LICENSE-Inter-OFL-1.1.txt`

Both notices are copied unchanged from their official release archives. The fonts are distributed under the SIL Open Font License 1.1.
