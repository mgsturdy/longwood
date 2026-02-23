# Chelsea at Longwood — Preview Site

A password-protected preview experience for three landing page concepts, built for **Studio 1299**.

## How It Works

- **`/login`** — Password gate (password: `foryourreview`)
- **`/`** — Landing page showing all 3 design options
- **`/v1`** — Classic Trust (navy/cream/gold)
- **`/v2`** — Modern Premium (charcoal/copper)
- **`/v3`** — Warm Community (sage/terracotta)

## Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Netlify

1. Push this `site/` directory to a Git repository
2. Connect the repo to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `.next`
5. Add environment variables in Netlify dashboard (see `.env.example`)

Or deploy via CLI:

```bash
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --prod
```

## Environment Variables

| Variable | Description |
|---|---|
| `RESEND_API_KEY` | Resend API key for email notifications |
| `NOTIFICATION_EMAIL` | Recipient email (default: info@askgreta.com) |
| `GOOGLE_SHEETS_ID` | Google Sheets spreadsheet ID |
| `GOOGLE_SERVICE_ACCOUNT_EMAIL` | Service account email |
| `GOOGLE_PRIVATE_KEY` | Service account private key |
| `NEXT_PUBLIC_SHOW_BOOK_SHOWING` | Feature flag for Book a Showing |
| `NEXT_PUBLIC_CALENDLY_URL` | Calendly embed URL |

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- Netlify (via @netlify/plugin-nextjs)
