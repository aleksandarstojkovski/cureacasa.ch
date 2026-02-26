Date | Operation | File | Backup | Description
2026-02-16 23:35:00 | MODIFY | src/components/Hero.jsx | src/components/Hero.jsx.backup-20260216233500 | Updated Hero background and layout to match medical theme reference image
2026-02-16 23:38:00 | MODIFY | Multiple Files | Various Backups | Update contact info and brand name
2026-02-16 23:39:00 | ASSET | src/assets/logo-icon.png, src/assets/logo-text.png | N/A | Added separated logo assets
2026-02-16 23:40:00 | MODIFY | src/components/Services.jsx | src/components/Services.jsx.backup-20260216234000 | Fix typo in service title and description
2026-02-16 23:48:00 | ASSET | src/assets/profile.png | src/assets/profile-backup.png | Updated profile image with new user provided image
2026-02-16 23:56:00 | MODIFY | src/components/About.jsx | N/A | Removed experience and passion stats from About section
2026-02-17 00:03:00 | MOVE | src/assets/ | N/A | Moved Gemini_Generated_Image.png, logo.png, text.png to src/assets/
2026-02-17 00:20:00 | ASSET | src/assets/profile.png | src/assets/profile.png.backup-20260217002000 | Replaced profile image with new user provided jpg
2026-02-17 23:06:00 | MOVE | public/ | public.backup-20260217230623 | Copied all PNG assets from src/assets/ to public/ folder for proper deployment
2026-02-17 23:06:00 | MODIFY | src/components/Header.jsx | src/components/Header.jsx.backup-20260217230623 | Updated image paths from /src/assets/ to / for public folder
2026-02-17 23:06:00 | MODIFY | src/components/Footer.jsx | src/components/Footer.jsx.backup-20260217230623 | Updated image paths from /src/assets/ to / for public folder
2026-02-17 23:06:00 | MODIFY | src/components/About.jsx | src/components/About.jsx.backup-20260217230623 | Updated profile image path from /src/assets/ to / for public folder
2026-02-17 23:06:00 | MODIFY | src/components/SEO.jsx | src/components/SEO.jsx.backup-20260217230623 | Updated Open Graph and Twitter meta image paths from /src/assets/ to / for public folder
2026-02-17 23:23:00 | CREATE | public/.htaccess | N/A | Added .htaccess to handle SPA routing and fix 404 errors on page refresh
2026-02-17 23:24:00 | DELETE | Multiple Files | N/A | Cleaned up project: removed all backup files/folders, unused assets (Gemini images, old logos), and unused scripts (extract_colors.js)
2026-02-17 23:25:00 | RENAME | public/profile.png | N/A | Renamed profile.png to natasha-maslarova.png for better semantics
2026-02-17 23:29:00 | MODIFY | index.html | index.html.backup-20260217232906 | Updated favicon to use logo-icon.png
2026-02-17 23:33:00 | MODIFY | src/components/Contact.jsx | src/components/Contact.jsx.backup-20260217233306 | Integrated EmailJS into the contact form with validation and status feedback
2026-02-18 00:09:00 | MODIFY | Multiple Files | Various Backups | Changed 'Infermiere' to 'Infermiera' in Hero, SEO components, and index.html
2026-02-20 15:46:00 - Modified Hero.jsx: Added LAMal recognition badge with green check icon. Backup: Hero.jsx.backup-20260220154530
2026-02-20 15:46:33 - Modified Hero.jsx: Set badges to vertical layout (flex-col). Backup: Hero.jsx.backup-20260220154617
2026-02-20 15:47:30 - Modified Hero.jsx: Made the border of the LAMal badge more visible (border-emerald-200). Backup: Hero.jsx.backup-20260220154715
2026-02-20 15:52:00 - Modified Services.jsx: Added Collaborazioni Interdisciplinari service box. Backup: Services.jsx.backup-20260220155100
2026-02-20 15:53:00 - Modified Services.jsx: Removed 'Valutazione e Pianificazione' service box. Backup: Services.jsx.backup-20260220155230
2026-02-20 15:53:15 - Modified Hero.jsx: Matched LAMal badge border with the other badge (border-primary-100). Backup: Hero.jsx.backup-20260220155250
2026-02-20 16:00:00 - Global Update: Replaced 'Ticino' with 'Locarno e dintorni' across Hero, About, SEO, Footer, and Contact components.
2026-02-20 16:05:00 - Global Update: Translated all URLs/routes to Italian (/chi-sono, /servizi, /contatti). Updated links and SEO canonicals across all components. Backup: *.backup-20260220160030
2026-02-26 16:54:38 | MODIFY | src/components/About.jsx | src/components/About.jsx.backup-20260226165438 | Replaced profile image with foto_personale.jpg and moved file to public/
2026-02-26 16:59:07 | MODIFY | src/components/Hero.jsx | src/components/Hero.jsx.backup-20260226165907 | Added personal photo image to home page Hero section.
2026-02-26 17:01:08 | MODIFY | src/components/Hero.jsx, src/components/About.jsx | Multiple Backups | Changed image border color to primary blue (#00476b).
2026-02-26 17:03:12 | MOVE/MODIFY | public/, src/components/Hero.jsx | Hero.jsx.backup-20260226170108 | Imported multiple personal photos, renamed to personale-1..5.jpg, and added dynamic photo switcher to Hero component.
2026-02-26 17:06:22 | MODIFY | src/components/Hero.jsx, src/components/About.jsx | Multiple Backups | Removed the blue border from the personal photos as requested.
2026-02-26 17:13:18 | MODIFY | src/components/Hero.jsx | Hero.jsx.backup-20260226171318 | Removed photo switcher button and implemented random photo selection from 3 images on page load.
2026-02-26 17:13:18 | MODIFY | src/components/About.jsx | About.jsx.backup-20260226171318 | Updated photo path to /personale-3.jpg.
2026-02-26 17:19:53 | MODIFY | src/components/Hero.jsx | Hero.jsx.backup-20260226171953 | Updated random photo logic to use only personale-1.jpg and personale-2.jpg.
2026-02-26 17:19:53 | MODIFY | src/components/About.jsx | About.jsx.backup-20260226171953 | Updated photo path to /personale-1.jpg (replacing deleted/renamed file).
2026-02-26 17:21:23 | MODIFY | src/components/About.jsx | src/components/About.jsx.backup-20260226172123 | Implemented random photo selection logic for the About section.
2026-02-26 17:22:08 | MODIFY | src/components/Contact.jsx, src/components/Footer.jsx | Multiple Backups | Made email and phone number clickable using mailto: and tel: links.
2026-02-26 17:30:00 | MODIFY | src/components/Footer.jsx | src/components/Footer.jsx.backup-20260226173000 | Updated location to Locarno, Ticino (CH) in the footer.
2026-02-26 17:31:24 | MODIFY | src/components/Hero.jsx | src/components/Hero.jsx.backup-20260226173124 | Made phone number clickable to start calls directly from the Home page.
2026-02-26 17:31:24 | MODIFY | src/components/Contact.jsx | src/components/Contact.jsx.backup-20260226173124 | Standardized location format to 'Locarno, Ticino (CH)' for consistency with the footer.
2026-02-26 17:32:21 | SEO | index.html, public/sitemap.xml, src/components/SEO.jsx | Multiple Backups | Enhanced SEO: set language to Italian, created sitemap.xml, and added Schema.org structured data (MedicalBusiness) for better search engine indexing.
