# Velmurugan Fertiliser Company – Website

Next.js (App Router) · TypeScript · Tailwind CSS v4 · Lucide icons. All pages are statically prerendered and ready for Vercel.

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build && npm start
```

## Pages

| Route | Page |
| --- | --- |
| `/` | Home |
| `/about` | About Us |
| `/manufacturing` | Manufacturing & Unit II |
| `/products` | Products (category filter) |
| `/international-business` | International Business |
| `/quality` | Quality |
| `/infrastructure` | Infrastructure, Research & Downloads (downloads filter) |
| `/contact` | Contact Us (enquiry form, map) |
| `/privacy-policy`, `/terms`, `/sitemap-page` | Footer pages (Privacy/Terms are placeholders) |

## Structure

- `src/constants/site.ts` – company details, navigation, downloads list.
- `src/components/layout` – top bar, header, footer.
- `src/components/sections` – page hero, feature strip, CTA band, product catalog, downloads grid, enquiry form.
- `src/components/ui` – button, section titles, social and certification marks.
- `public/images` – photos and logos.

## Things to replace before launch

- **Images** – every file in `public/images` was cropped from the reference screenshots (no original photo/logo files were supplied), so they are low resolution. Replace them with the originals under the same filenames; nothing else needs to change. This includes `logo-header.png` and `logo-footer.png`.
- **Certification marks** – ISO / FCO / REACH marks in `CertMark.tsx` are simple vector stand-ins. Use the official artwork.
- **Downloads** – drop the PDFs into `public/downloads` (names are in `DOWNLOADS`) and set `available: true`. Until then the Download buttons open the enquiry form.
- **Enquiry form** – there is no backend. Submitting opens the visitor's email app with the enquiry pre-filled (`export@` for export enquiries, otherwise `info@`). Replace `handleSubmit` in `EnquiryForm.tsx` with an API call / Server Action when a mail or CRM service is available.
- **Social links** – `SITE.social` currently points to the platforms' home pages.
- **Privacy Policy / Terms** – add the real legal text.
