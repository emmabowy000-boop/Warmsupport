# Warm Support — Site

This repository contains a simple landing site for Warm Support (an emotional-support project). Changes in this commit:

- Replace non-standard file with semantic `index.html` served from the repository root.
- Externalize CSS to `styles/styles.css`.
- Add a basic contact form (Formspree placeholder) so personal contact details are not exposed in the public source.
- Add a Privacy Policy skeleton at `privacy.html`.
- Add emergency / safety disclaimer in the site.
- Anonymize testimonials (initials only).

Important notes for deployment and private info:

- The contact form currently uses a placeholder Formspree action (https://formspree.io/f/yourFormId). Replace `yourFormId` with your Formspree form ID, or replace the `action` with your own server endpoint in `index.html` to avoid third-party processors.
- The WhatsApp links use the wa.me short-link format. The numeric phone is not shown in the page content, but it is used in the links; if you prefer to not include the number anywhere in the repo, consider storing it in an environment variable on the server or a deployment secret and injecting the runtime link.
- If you want to display contact phone or email publicly, make sure you understand the privacy implications.

Deployment tips:
- GitHub Pages will serve `index.html` from the repository root on the `main` branch. Ensure `index.html` is in the root and the repository settings use the `main` branch for Pages.

License: add a LICENSE file if you want to specify usage rights.
