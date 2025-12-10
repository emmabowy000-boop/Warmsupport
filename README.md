# Warm Support — Site

This repository contains a simple landing site for Warm Support (an emotional-support project). Changes in this update:

- Ensure contact details are not exposed in the public source by routing WhatsApp links through serverless redirects that use an environment variable (WA_PHONE).
- Add serverless function templates for Vercel (api/wa.js) and Netlify (netlify/functions/wa.js).
- Keep semantic `index.html` at the repository root and externalize CSS to `styles/styles.css`.
- Add a Privacy Policy at `privacy.html` and include an emergency safety disclaimer.
- Add a contact form placeholder (Formspree) — replace with your own endpoint or form ID.

Important: hide the phone number from the repository

- Set the WhatsApp phone number as an environment variable named `WA_PHONE` in your deployment platform. Do NOT commit the phone number to the repo.
  - Example (Vercel): Add an Environment Variable called `WA_PHONE` with the value `2349058814859` in your Vercel project settings.
  - Example (Netlify): In Site settings -> Build & deploy -> Environment, add `WA_PHONE` with value `2349058814859`.

How the redirect works

- The site links to `/api/wa` (Vercel) or Netlify will map `/.netlify/functions/wa` — both function templates read the `WA_PHONE` env var and 302-redirect the visitor to the correct `https://wa.me/<phone>` URL, preserving any query string (for text prefill).

Replacing the Formspree placeholder

- The contact form action in `index.html` currently points to `https://formspree.io/f/yourFormId`. Replace `yourFormId` with your Formspree ID, or replace the entire action with your own server endpoint to avoid third-party processors.

Testing locally

- Serverless functions require a hosting platform to run (Vercel or Netlify). For local testing you can:
  - Use Vercel CLI (vercel dev) or Netlify CLI (netlify dev) and set WA_PHONE in your local env.
  - Or temporarily add a static fallback link in `index.html` for local testing only (not recommended for production).

Deployment (GitHub Pages warning)

- GitHub Pages serves static content only and does not support serverless functions. To use the WA redirect pattern without exposing the phone number in source, deploy on a platform that supports serverless functions (Vercel or Netlify), and set the `WA_PHONE` environment variable in their settings.

Next recommended steps

- Replace the Formspree placeholder with your own form endpoint or a proper Formspree form ID.
- Add a LICENSE and .gitignore as needed.
- Add a favicon at `/favicon.ico`.
