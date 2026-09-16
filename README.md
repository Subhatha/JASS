# Four Friends Kitchen

Next.js 15 / React 19 website with a split entrance for the restaurant and JASS cookbook. The existing dark and gold visual direction is shared across all pages.

## Development

Run `npm install` and `npm run dev`. Use `npm run build` to generate the static preview in `out/`. `npm start` is not supported for static exports. `npx tsc --noEmit` checks TypeScript.

## Pages

- `/`: split entrance
- `/restaurant`: dining homepage
- `/restaurant/menu`: category-filtered menu
- `/restaurant/about`: restaurant and chef story
- `/restaurant/contact`: location and directions
- `/restaurant/reservations`: accessible reservation enquiry form
- `/cookbook`: JASS product page
- `/cookbook/about`: book and author story
- `/cookbook/faq`: purchase questions
- `/success`: preview checkout notice
- `/cancel`: cancelled checkout
- Custom 404 for missing pages

## Configuration before launch

Copy `.env.example` to `.env.local` and supply verified values. Never commit secrets.

- `STRIPE_SECRET_KEY`: enables checkout. Without it, the purchase button reports that checkout is unavailable.
- `SITE_URL`: canonical public URL for Stripe redirects.
- `NEXT_PUBLIC_CONTACT_EMAIL`: verified restaurant email. Enables preparing reservation emails in the visitor’s email app. The visitor must send the email; this is not an automatic booking system.
- `NEXT_PUBLIC_CONTACT_PHONE`: optional verified telephone number.

Confirm the existing address in `src/lib/site-config.ts`, USD menu prices in `src/lib/menu.ts`, book price ($24.99 USD), book format, delivery, opening hours and return terms before accepting live orders. Delivery and automatic order fulfilment are not implemented. Stripe success only verifies payment; it does not fulfil orders or promise a confirmation email. Add webhook-based fulfilment when operational details are settled.

## Images

All images use existing assets in `public/images`. Menu image paths are centralized in `src/lib/menu.ts`. Pork quesadilla, desserts and some drinks reuse available photos as placeholders; replace those paths with the final photos. The chef image filename is case-sensitive: `chef.JPG`.

## JASS stories and slideshow

The book pages use `src/lib/jass-content.ts` for three people's stories and
the gallery images. These sections are only used on the book side.

- Put portraits and gallery images in `public/images/jass/`.
- In `jassStories`, update each person's `name`, `role`, `portrait`,
  `portraitAlt` and `paragraphs`. Enter each story once, one string per
  paragraph. Long stories show a preview; “Read more” reveals the rest. Susan, Dimitri and Subhatha use
  their named portraits; replace `aaaaaa` with their real story text.
- `jassSlides` contains the six other photos currently in the folder. Add
  another entry with `src`, `alt` and `caption` when the next image is ready.
- Missing images show deliberate placeholders. The gallery has manual
  previous/next controls and a selector for each image. It advances every 4.5
  seconds, with a pause button, hover/focus pausing and reduced-motion support.

## Accessibility

Responsive mobile navigation, keyboard-visible focus, skip links, labelled form fields, native form validation, reduced-motion support, and readable dish labels without hover.

## GitHub Pages preview

Push this project to the `main` branch of your GitHub repository. In the
repository's **Settings → Pages → Build and deployment**, choose **GitHub Actions**.
The existing workflow builds and publishes `out/`. Find the live URL in the
workflow's deployment or in Settings → Pages.

The workflow uses the repository name for the URL prefix. Local production
builds default to `/JASS`; set `NEXT_PUBLIC_BASE_PATH` to override it (use an
empty value for a root domain).

Checkout is disabled for this static preview. Original Stripe files are preserved
in `stripe-backup/`; no secret key is needed for GitHub Pages. To restore checkout
on a Next.js server host, restore `checkout-route.ts` to
`src/app/api/checkout/route.ts`, `success-page.tsx` to `src/app/success/page.tsx`,
and `buy-button.tsx` to `src/components/buy-button.tsx`. Remove `output: "export"`
and configure the base path for that host, then set the Stripe environment values
listed above. The backed-up `next.config.ts` was an unused duplicate configuration.
