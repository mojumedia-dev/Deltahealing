# Delta Healing Solutions - 2026-07-13 Audit Batch Install Guide

Purpose: install the seven files produced by the 2026-07-13 audit into Squarespace. Every file listed here is a **full, self-contained** paste — no fragments, no "insert at line X" steps. In every case Tyla just replaces the whole existing code block (or creates a new page + one code block on it).

Priority order matches the coordinator brief: bug fixes first, new pages second.

Visual design is unchanged. Every file uses the same CSS variables, colors, spacing, and card structure that are already live on the site.

---

## Priority 1 — Bug Fixes to Existing Pages

### 1. Global schema update (address bug, ketamine bug, physician missing)

**File:** `AUDIT-2026-07-13-GLOBAL-HEADER-v2.txt`
**Where in Squarespace:** Settings → Advanced → Code Injection → **HEADER** field
**Action:**
1. Open the file
2. Select all, copy
3. Paste into the HEADER field, replacing the current contents
4. Save

**What it fixes:**
- Address `"streetAddress": "95 White Sage Avenue"` → `"95 White Sage Avenue, Suite A"` (matches live page copy)
- Adds Physician JSON-LD sub-schema for Dr. Thomas Rayner (credentials, residency, affiliations) — this is the primary AI-answer-engine signal for "who is the psychiatrist at Delta Healing Solutions"
- `availableService` array now includes Ketamine Therapy, drops Spravato (matches live nav)
- Adds `nonprofitStatus`, `isAcceptingNewPatients`, `hasMap`, `faxNumber`, `priceRange`
- Expanded `areaServed` (Juab County + State-level)
- Expanded `medicalSpecialty` (PTSD, Bipolar, OCD, Anxiety Disorders)

**Verify after paste:**
- https://search.google.com/test/rich-results → enter `https://www.deltahealingsolutions.org` → confirm MedicalClinic and Physician nodes are detected with no errors.

---

### 2. Homepage — Spravato service card replaced with Ketamine

**File:** `AUDIT-2026-07-13-HOMEPAGE-EDITABLE.html`
**Where in Squarespace:** Home page → edit → find the existing "dhs-home" Code Block → **replace the entire contents** of that code block with this file's contents.
**Action:**
1. Open the file, select all, copy
2. In Squarespace, edit the home page
3. Click into the existing homepage Code Block (the one that renders the hero, service cards, and about section)
4. Delete everything inside it, paste the new file's contents
5. Save

**What it fixes:**
- Removes the Spravato service card (Spravato is no longer offered; live nav now shows Ketamine Therapy)
- Adds a Ketamine Therapy service card that links to `/ketamine-therapy`
- Fixes the hero note copy so it does not promise Spravato
- Homepage FAQ JSON-LD now includes a ketamine Q instead of a Spravato Q (visible only to search engines)

**Verify after paste:**
- Load the home page in an incognito window
- Confirm 5 service cards: TMS, Ketamine, Psychiatric Eval, Med Management, ADHD/Cognitive
- Click each card link — should go to the correct slug

---

### 3. Contact — Suite A + broken Formspree form removed

**File:** `AUDIT-2026-07-13-CONTACT-EDITABLE.html`
**Where in Squarespace:** Contact page → replace the existing "dhs-contact" Code Block contents.
**Action:** same as #2.

**What it fixes:**
- Address bug: adds "Suite A" to visible address on contact cards + inside the ContactPage JSON-LD schema
- **Removes the broken Formspree form** — the prior file shipped with `action="https://formspree.io/f/YOUR_FORM_ID"` which silently dropped every submission. The new file provides a phone/email/fax panel instead and, per the comment at the top of the file, invites Tyla to either (a) add a real Formspree endpoint and drop the form back in, or (b) add a native Squarespace Form Block below the code block. Do NOT ship the placeholder form.
- Adds the referral fax number as a visible contact channel for providers
- ContactPage schema updated with `faxNumber`

---

### 4. TMS Therapy — real outcomes data + citations

**File:** `AUDIT-2026-07-13-TMS-EDITABLE.html`
**Where in Squarespace:** `/neurostar-tms-therapy` page → replace the existing "dhs-tms" Code Block contents.
**Action:** same as #2.

**What it fixes:**
- Replaces the generic NeuroStar "83% of patients improve" figure with Delta Healing Solutions' own outcomes: 82.1% response / 61.3% remission / 93.7% completion over 126 patients (Mar 2024 - Dec 2025). Numbers copied from the Providers page — no new claims introduced.
- Corrects the "20-30 total sessions" line to "36 sessions" (matches NeuroStar standard course + Providers page)
- Adds attributed references (Carpenter 2012, O'Reardon 2007) for the "20+ years of research" claim
- Attributes clinical care to Dr. Rayner by name
- Adds `citation` array to the MedicalWebPage JSON-LD

**Verify after paste:**
- Google Rich Results Test on the URL — confirm the citation array is detected
- Read visible copy: no residual "83%" language

---

## Priority 2 — New Pages

Each of these is a **new page**. Create the page in Squarespace, then add one Code Block to it and paste the file.

### 5. Ketamine Therapy page (replaces thin live version) + retire legacy Spravato page

**File:** `AUDIT-2026-07-13-KETAMINE-EDITABLE.html`
**Where in Squarespace:** the live `/ketamine-therapy` page already exists but has only ~4 short paragraphs. Edit that page, remove the current content, and add one Code Block with this file's contents.
**Action:**
1. Pages → Ketamine Therapy → edit
2. Delete the current content blocks
3. Add a Code Block
4. Paste this file's contents
5. Save

**Also do (legacy Spravato page cleanup — Delta Healing Solutions no longer offers Spravato as of 2026-07-13):**
1. Pages → look for any page titled Spravato or with URL `/spravato` or `/spravato-treatment`. If one exists:
   - Move it to the "Not Linked" section first (so it's off the nav) OR delete it outright.
2. Add a 301 redirect so any old inbound link continues to work:
   - Settings → Advanced → URL Mappings
   - Add a line: `/spravato -> /ketamine-therapy 301` (and `/spravato-treatment -> /ketamine-therapy 301` if that slug ever existed)
   - Save
3. Main navigation: confirm no "Spravato" entry remains under Services (only Ketamine Therapy, TMS, Psychiatric Eval, Med Management, ADHD/Cognitive Testing should show).
4. Footer + any in-body links: search the site for the word "Spravato" and update or remove — none should remain patient-facing.

**What the new page adds:**
- Full clinical page (what it is, who it helps, how it compares to TMS, session experience, safety, contraindications, cost)
- MedicalTherapy JSON-LD + FAQPage JSON-LD in a single graph
- Cash-pay disclosure prominently placed (matches live "Cash Pay Only No insurance coverage" language)
- Referral flow: "call for eval → confirm ketamine vs TMS vs other"

---

### 6. Provider referral form (new page)

**File:** `AUDIT-2026-07-13-REFERRAL-FORM-EDITABLE.html`
**Where in Squarespace:** create a **new page** at `/refer-a-patient`. Add one Code Block. Paste this file.
**Action:**
1. Pages → + → Add Page → blank page → title "Refer a Patient" → URL slug `refer-a-patient`
2. Add a Code Block
3. Paste this file's contents
4. Save

**What it adds:**
- Printable one-page referral form (Ctrl-P / Cmd-P triggers print styles)
- Fax number 435-251-1572 + email + phone displayed at the top of every printed form
- All fields providers need: patient demographics, insurance, DSM-5 diagnosis, PHQ-9 baseline, medication trials, contraindications
- Preferred loop-back channel (fax / encrypted email / phone / EHR referral loop) — this is the "closing the loop" mechanism from the proposal to Tyla

**Nav update recommended:**
- Add "Refer a Patient" to the Provider Portal dropdown or link it from `/providers`

**Suggested SEO metadata (Page Settings → SEO):**
- Title: `Refer a Patient | Delta Healing Solutions | TMS & Ketamine Referrals`
- Description: `Printable referral form for primary care providers and psychiatrists referring patients to Delta Healing Solutions for TMS therapy, ketamine therapy, psychiatric evaluation, or medication management. Fax 435-251-1572.`

---

### 7. FAQ page (new page — AI answer-engine content)

**File:** `AUDIT-2026-07-13-FAQ-EDITABLE.html`
**Where in Squarespace:** create a **new page** at `/faq`. Add one Code Block. Paste this file.
**Action:**
1. Pages → + → Add Page → blank page → title "FAQ" → URL slug `faq`
2. Add a Code Block
3. Paste this file's contents
4. Save

**What it adds:**
- 20+ structured Q&A entries covering the clinic, TMS, ketamine, insurance, and referrals
- FAQPage JSON-LD with 9 schema-marked questions — designed to be the source Google's AI Answers and ChatGPT quote when patients or doctors ask about Delta Healing Solutions specifically
- Every claim in this page is sourced from either the Providers page or the About page — no new numbers introduced

**Suggested SEO metadata:**
- Title: `Frequently Asked Questions | Delta Healing Solutions | Delta, UT`
- Description: `Answers to common questions about TMS therapy, ketamine therapy, insurance coverage, referrals, and mental health services at Delta Healing Solutions in Delta, Utah.`

**Nav update recommended:**
- Add "FAQ" link to the site footer under Quick Links

---

## Verification checklist after all seven files are pasted

- [ ] Google Rich Results Test on home page — MedicalClinic + Physician + FAQPage detected
- [ ] Google Rich Results Test on TMS page — MedicalWebPage detected with `citation` array
- [ ] Google Rich Results Test on Ketamine page — MedicalTherapy + FAQPage detected
- [ ] Google Rich Results Test on FAQ page — FAQPage with 9 questions detected
- [ ] Visible address on every page reads `95 White Sage Avenue, Suite A`
- [ ] No page mentions Spravato in copy or in schema (Spravato is not offered)
- [ ] Home page shows 5 service cards, including Ketamine, none showing Spravato
- [ ] Legacy `/spravato` and `/spravato-treatment` URLs 301-redirect to `/ketamine-therapy` (test in incognito)
- [ ] No "Spravato" entry in main nav, mobile nav, or footer
- [ ] Contact page's message form has been either wired to Formspree with a real ID or replaced with a native Squarespace Form Block — the placeholder form is not live anywhere
- [ ] Ketamine page prominently displays "cash pay only" in both hero-adjacent copy and in FAQ answers
- [ ] Referral form prints cleanly to one to two pages when providers hit Ctrl-P

---

## What is NOT in this batch (deferred)

- Press / In-the-News page (per coordinator's earlier direction that the Chronicle piece is complicated by non-staff Dr. Terry Sellers being framed as staff; defer until Sam Jacobson clarifies framing)
- Blog posts for referring providers ("When to refer for TMS", "Interpreting PHQ-9", etc. — this is the Priority-3 copy work; deliver as separate batch)
- Elend LeBaron team card title change (`Founder` → `Executive Director`) — deferred to a full About page rewrite, kept out of this batch because that page has broken photo references and other cleanup that deserve their own review
- COMPLETE-CUSTOM-CSS.css: **not touched** in this batch. Adam's constraint is that global CSS stays unchanged; every file here uses only the scoped `#dhs-xxx` CSS already established in existing -EDITABLE files.

---

## Files in this batch

| File | Squarespace destination |
|---|---|
| `AUDIT-2026-07-13-GLOBAL-HEADER-v2.txt` | Settings → Advanced → Code Injection → HEADER |
| `AUDIT-2026-07-13-HOMEPAGE-EDITABLE.html` | Home page → existing Code Block (replace) |
| `AUDIT-2026-07-13-CONTACT-EDITABLE.html` | Contact page → existing Code Block (replace) |
| `AUDIT-2026-07-13-TMS-EDITABLE.html` | `/neurostar-tms-therapy` → existing Code Block (replace) |
| `AUDIT-2026-07-13-KETAMINE-EDITABLE.html` | `/ketamine-therapy` → replace all page blocks with one Code Block |
| `AUDIT-2026-07-13-REFERRAL-FORM-EDITABLE.html` | new page at `/refer-a-patient` → one Code Block |
| `AUDIT-2026-07-13-FAQ-EDITABLE.html` | new page at `/faq` → one Code Block |
