==========================================================
 SIAMS RB ENGINEERING & REFRIGERATION — Website
 Built to the Website Master Plan
==========================================================

A fast, fully static Bootstrap 5 website. No build step, no
database, no server-side code. Upload to cPanel and it works.

Company details already filled in:
  Phone:    +260 977 778 465  /  +260 954 711 297
  WhatsApp: +260 977 778 465  (wa.me/260977778465)
  Email:    info@siamsrb.com
  Address:  Plot 32, Great North Road, S.O.S, Lusaka, Zambia

----------------------------------------------------------
 PAGES (7)
----------------------------------------------------------
  index.html      -> Home (hero + ticker, animated stats, services,
                     why-us, featured project, testimonials carousel,
                     emergency banner, quick quote form)
  services.html   -> Services (Refrigeration, HVAC/AC, Electrical,
                     Cold Rooms, Generators, Engineering, Contracts)
  projects.html   -> Projects (filterable gallery)
  about.html      -> About (story, mission/vision/values, milestones,
                     coverage map, team)
  blog.html       -> Tips & Advice (SEO article cards)
  contact.html    -> Contact (quote form, channels, hours, map)
  emergency.html  -> 24/7 Emergency (big number, WhatsApp, quick alert form)
  thank-you.html  -> Form success page (forms redirect here)
  404.html        -> Custom "page not found" page
  .htaccess       -> Wires the 404 page (+ optional HTTPS redirect)

  Individual service pages (SEO landing pages):
  service-refrigeration.html · service-air-conditioning.html ·
  service-electrical.html · service-cold-rooms.html ·
  service-generators.html · service-engineering.html

  City / service-area pages (local SEO):
  lusaka.html · ndola.html · livingstone.html ·
  mufulira.html · solwezi.html

  css/style.css       -> Design system (logo colours + Bebas/Barlow type)
  js/main.js          -> Counters, form validation, gallery filter, nav
  img/siams_logo.png  -> Company logo
  img/clients/        -> Client logos (you upload here — see below)
  img/concept/        -> The original master-plan document (reference)

  NOTE: "Get a Quote" buttons open a pop-up (modal) form anywhere on
  the site — no page reload. It emails info@siamsrb.com like the others.

Bootstrap, Bootstrap Icons and Google Fonts load from a CDN —
no framework files to upload. (Visitors need internet, as normal.)

----------------------------------------------------------
 BRAND & DESIGN (from the plan)
----------------------------------------------------------
  Colours (CSS variables at top of css/style.css):
    --steel  #0D1B2A  dark backgrounds / headers
    --green  #2A9E5E  primary accent / CTAs   (logo green)
    --blue   #1E5FAD  secondary accent / nav  (logo blue)
    --gold   #F4C430  stat numbers / accents
    --danger #E63946  emergency red
  Fonts: Bebas Neue (headlines), Barlow Condensed (labels/buttons),
         Barlow (body). Change colours once to re-theme everything.

----------------------------------------------------------
 HOW TO UPLOAD TO CPANEL
----------------------------------------------------------
1. cPanel > File Manager > public_html (your site root).
   (If siamsrb.com is an add-on domain, use its folder instead.)
2. Upload ALL files, KEEPING folder structure (css/, js/, img/).
   Easiest: ZIP this folder, upload the .zip, then Extract.
3. Ensure index.html is directly in public_html.
4. Enable free SSL (cPanel > SSL/TLS Status > Let's Encrypt).
5. Visit https://siamsrb.com — done!

----------------------------------------------------------
 CONTACT / QUOTE FORMS  (Web3Forms)
----------------------------------------------------------
Every form on the site (Home quote form + quote pop-up, Contact,
Emergency, and the "Get a Quote" modal on each page) posts to
Web3Forms — no server code needed.

  Endpoint:   https://api.web3forms.com/submit
  Access key: ce3c1480-2ce3-492c-812a-a647f3921e6f
              (set in a hidden "access_key" field in every form)

Submissions are emailed to the address on the Web3Forms account
that owns this access key. So:
  1. Make sure that Web3Forms account is registered to the email
     you want enquiries to land in (e.g. info@siamsrb.com).
  2. No confirmation step needed — it works as soon as it's uploaded.
  3. Test once after upload: submit a form and check the inbox
     (and the spam folder the first time).

Each form also includes:
  - "subject"   — the email subject line (edit per form if you like)
  - "from_name" — shows as the sender name ("Siams RB Website")
  - "botcheck"  — a hidden honeypot field for spam protection

Optional extras (see web3forms.com docs):
  - Add <input type="hidden" name="redirect" value="https://siamsrb.com/thank-you.html">
    to send users to a custom thank-you page after submitting.
  - Add reCAPTCHA / hCaptcha for stronger spam protection.

----------------------------------------------------------
 BEFORE YOU GO LIVE  (launch checklist from the plan)
----------------------------------------------------------
  [ ] Real photos — replace the coloured placeholder tiles on
      projects.html, blog.html and the About team section with
      actual photos of your work, team and equipment.
  [x] Client logos — 7 logos are live in the Home "Clients We've
      Serviced" wall (KFC, Spar, Protea Hotel, Piatto, FoodBee,
      Just Halawi, Makeni Mall). Add more in img/clients/ anytime.
  [x] Testimonials — the Home carousel now uses these real client
      names. Tweak the wording anytime in index.html if you'd like.
  [ ] Confirm the contact form (steps above).
  [ ] Google Business Profile — create/claim it for local search.
  [ ] Google Map — the Contact map points to "Plot 32, Great North
      Road". Fine-tune via Google Maps > Share > Embed a map, then
      paste the new iframe src into contact.html.
  [ ] SSL certificate enabled (HTTPS).
  [ ] Test on a real Android phone — WhatsApp button, tel links, forms.
  [ ] Compress images (tinypng.com) — target < 3s load on mobile.
  [ ] (Recommended) Add Google Analytics (GA4) tracking code.

----------------------------------------------------------
 CLIENT LOGOS  ("Clients We've Serviced" on the Home page)
----------------------------------------------------------
1. Put each client's logo file in the  img/clients/  folder.
2. Name them exactly:  client-1.png, client-2.png, ... up to
   client-10.png  (PNG with a transparent background looks best;
   .jpg works too if you rename the file extension in index.html).
3. They appear automatically in the logo wall on the Home page.
   Slots with no file show a neutral "Client Logo" placeholder.
4. Want more than 10, or a different order? Tell me and I'll adjust,
   or copy a <div class="cl">...</div> block in index.html.

TESTIMONIALS FROM THOSE CLIENTS (recommended — big trust boost):
   For each client, a short quote works wonders. Send me, for each:
     - Client/company name (and person + role if possible)
     - One or two sentences they'd say about your work
     - Which service you did for them (cold room, AC, wiring, etc.)
   I'll drop them into the testimonials carousel on the Home page,
   attributed to the real company. Even a WhatsApp message from the
   client saying "great job" is enough to quote (with their OK).

----------------------------------------------------------
 SEO  (what's already set up)
----------------------------------------------------------
  - Unique title + meta description on every page.
  - Open Graph + Twitter cards on every page (nice link previews
    when shared on WhatsApp / Facebook / LinkedIn).
  - Canonical URL on every page.
  - LocalBusiness (HVACBusiness) structured data on the Home page:
    name, address, phone, email, hours, service areas (Lusaka, Ndola,
    Livingstone, Mufulira, Solwezi), services and social profiles.
  - sitemap.xml  and  robots.txt  in the site root.

  AFTER UPLOAD — do these for ranking (free):
  1. Google Search Console (search.google.com/search-console):
     add siamsrb.com, verify, and submit  sitemap.xml.
  2. Google Business Profile: create/claim "Siams RB Engineering &
     Refrigeration" at Plot 32, Great North Road, Lusaka. This is the
     #1 driver of local "near me" search traffic in Zambia.
  3. Make sure HTTPS/SSL is on (cPanel > Let's Encrypt).
  4. Compress hero.png (see above) so pages load fast — speed is a
     ranking factor, especially on mobile data.

  OPTIONAL polish:
  - Social share image: og:image currently uses the logo. For bigger,
    nicer share cards, make a 1200x630 banner, save as
    img/og-cover.jpg, and change the og:image / twitter:image URLs.
  - Update the geo coordinates in the Home page JSON-LD to your exact
    location (currently approximate Lusaka coordinates).
  - Do NOT upload the img/concept/ folder (it's the planning doc);
    robots.txt already asks Google to ignore it, but best to omit it.

----------------------------------------------------------
 EASY THINGS TO EDIT
----------------------------------------------------------
  Stats (10+, 500+, 5, 100+)  -> data-count="..." in index.html
                                  trust bar; update to real numbers.
  Milestones / founding year  -> about.html "Milestones" section.
  Social links (#)            -> footer of every page (FB, IG, LinkedIn).
  Blog articles               -> blog.html currently has topic cards;
                                  write full articles and link them.
  Hero background (above fold)-> your photo at  img/hero.png  is used
                                  as the hero/page-header background.
                                  Replace that file (same name) to change
                                  it. TIP: compress it (tinypng.com) — the
                                  current file is ~2.4MB, aim for <400KB
                                  for faster loading on mobile data.
                                  (Other section photos: swap the
                                  Unsplash URLs in css/style.css.)
  Favicon                     -> uses img/siams_logo.png. Replace that
                                  file (same name) to change the tab icon.

----------------------------------------------------------
 NOTES
----------------------------------------------------------
- Fully responsive and mobile-first (Bootstrap grid).
- Floating WhatsApp button + sticky "24/7 Emergency" link on every page.
- Logo file is img/siams_logo.png — keep the name or update the
  <img src="img/siams_logo.png"> tags if you rename it.
==========================================================
