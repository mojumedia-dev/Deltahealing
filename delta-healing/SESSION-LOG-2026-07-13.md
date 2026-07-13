# Delta Healing Solutions — Session Log
**Date:** 2026-07-13
**Scope:** Full site audit + AI-visibility investigation + Spravato retirement + Ketamine transition

---

## Trigger events

- Adam sent Meta AI + ChatGPT screenshots showing how Delta surfaces (or doesn't) in TMS-in-central-Utah queries
- Adam shared Millard County Chronicle Progress article (2026-07-08) covering Delta's ketamine expansion
- Adam requested full site audit + code-block deliverables
- Adam corrected: Dr. Terry Sellers is NOT staff (Chronicle article implied he was)
- Adam corrected: Spravato is no longer offered — only ketamine
- Adam corrected: address includes Suite A (had been dropped from schema)

---

## AI-search state discovered

Both Meta AI and ChatGPT know Delta exists and correctly geolocate them (Delta UT, Millard County). But:

- Neither surfaces Delta on a bare "central Utah TMS" query — only after user narrows to "south of Provo/Spanish Fork"
- Both miss ketamine, cognitive testing, ADHD services in their responses (only TMS + psychiatry)
- ChatGPT cites third-party TrailBlaze Utah directory rather than Delta's own site
- Chronicle article at `https://www.millardccp.com/articles/featured-news/delta-healing-solutions-expands-treatment-options/` does NOT link to Delta's own site (the news site owns that page, we can't edit)

---

## Audit findings

Two audit passes produced in this session:

1. **`AUDIT_20260713.md`** — full audit report (findings, top 5 fixes, 30-day build order), later annotated with same-day Spravato retirement note
2. **`AUDIT-2026-07-13-INSTALL-GUIDE.md`** — step-by-step Squarespace paste instructions for the code-block files, includes legacy Spravato cleanup steps (delete page + 301 redirect `/spravato` → `/ketamine-therapy` + nav sweep)

Big gaps identified:
- Ketamine-assisted therapy nowhere in the schema/copy (Chronicle article covers it, site didn't)
- Suite A stripped from all 12 JSON-LD schema blocks (visible copy had it)
- Delta's own PHQ-9 outcome data (126 patients, 82.1% response, 61.3% remission, 93.7% completion) walled off on Providers page while public pages quoted generic NeuroStar "83%"
- Zero Person/Physician schema for any staff

---

## Code-block deliverables produced (`AUDIT-2026-07-13-*` files)

Full standalone HTML code blocks, ready to paste into Squarespace as single Code Block per page:

- `AUDIT-2026-07-13-GLOBAL-HEADER-v2.txt` — expanded MedicalClinic + Physician JSON-LD for Dr. Rayner, Suite A, ketamine service (Settings → Advanced → Code Injection → HEADER, replace all)
- `AUDIT-2026-07-13-HOMEPAGE-EDITABLE.html` — Spravato tile swapped for Ketamine, hero copy updated, FAQ schema updated
- `AUDIT-2026-07-13-CONTACT-EDITABLE.html` — Suite A + broken Formspree removed + phone/email/fax panel
- `AUDIT-2026-07-13-TMS-EDITABLE.html` — Delta's PHQ-9 outcomes (82.1/61.3/93.7) replace generic "83%" + Carpenter 2012 & O'Reardon 2007 citations + corrected 36 sessions
- `AUDIT-2026-07-13-KETAMINE-EDITABLE.html` — full new page, MedicalTherapy + FAQPage schema
- `AUDIT-2026-07-13-REFERRAL-FORM-EDITABLE.html` — printable provider referral form with CSS print styles
- `AUDIT-2026-07-13-FAQ-EDITABLE.html` — 9 schema-marked Q&As written to be quoted by ChatGPT / Google AI answers
- `AUDIT-2026-07-13-INSTALL-GUIDE.md` — Adam's paste playbook

---

## Inline fixes applied to original EDITABLE files (Suite A + Elend + em dashes + mojibake)

Address Suite A added to 14 files (both JSON-LD schema and visible copy):
- `2-GLOBAL-HEADER.txt` (schema + also updated description to remove Spravato, add ketamine, add "central Utah communities")
- `CONTACT-EDITABLE-NO-FORM.html`, `CONTACT-EDITABLE.html`, `CONTACT-PART-2-MAP.html`, `CONTACT-PART-1-TOP.html`
- `PROVIDERS-EDITABLE.html` (visible copy)
- `ADHD-page-code-block.html`, `MED-MGMT-page-code-block.html`, `PSYCH-EVAL-page-code-block.html`, `SPRAVATO-page-code-block.html`, `TMS-page-code-block.html` (all schema)
- `delta-healing-seo-code.html`
- `CONTACT-INSTALL-GUIDE.md` (line 102 landmine corrected from "no Suite A" to explicit Suite A instruction with 2026-07-13 correction note)
- `DONATE-INSTALL-GUIDE.md`, `delta-healing-QUICK-START.txt`, `delta-healing-seo-checklist.md`, `delta-healing-spravato-content.md`

Other inline fixes:
- Elend LeBaron title: `Founder` → `Founder & Executive Director` (4 locations across ABOUT-EDITABLE.html + PAGE-About.html)
- SPRAVATO-EDITABLE.html mojibake: 6 `âœ"` glyphs fixed to `✓`
- Em dashes: 4 replaced with commas across ABOUT-EDITABLE.html + PAGE-About.html

---

## Spravato retirement sweep

Delta no longer offers Spravato per Adam. Full sweep applied:

**Archived** (`_archive/` subfolder, renamed `ARCHIVED-*`):
- `ARCHIVED-SPRAVATO-EDITABLE.html`
- `ARCHIVED-PAGE-Spravato.html`
- `ARCHIVED-SPRAVATO-page-code-block.html`
- `ARCHIVED-delta-healing-spravato-content.md`

**Updated (Spravato → ketamine)** — 14 EDITABLE / page files:
ABOUT-EDITABLE, PAGE-About, HOMEPAGE-EDITABLE, COMPLETE-HOMEPAGE, HOME-page-code-block, CONTACT-EDITABLE, THANK-YOU-EDITABLE, PSYCH-EVAL-EDITABLE, PAGE-Psychiatric-Evaluation, EVENTS-EDITABLE, DONATE-EDITABLE, DONATE-PART-1-TOP, DONATE-PART-2-BOTTOM, delta-healing-seo-code

**Docs updated** — 8 files:
CONTACT-INSTALL-GUIDE, EDITABLE-PAGES-README, SQUARESPACE-INSTALL-GUIDE, SQUARESPACE-QUICK-REFERENCE, delta-healing-QUICK-START, delta-healing-seo-checklist, PROPOSAL-authority-and-ai-trust-strategy, convert-to-editable.ps1

**Preserved** — current-state snapshots (`about-current.html`, `contact-current.html`, `delta-current.html`, `homepage-check.html`) and `original-pages/` folder left intact as historical reference.

---

## Deferred / not yet built

- **AUDIT versions of remaining EDITABLE pages** — Adam wants a code block per page. Existing AUDIT-2026-07-13-* covers Home, Contact, TMS, Ketamine, Referral Form, FAQ, Global Header. Still to produce full audit-updated code blocks for: About, ADHD/Cognitive Testing, Donate, Events, Med Mgmt, Patient Portal, Providers, Psychiatric Evaluation, Thank You. Adam confirmed iterative loop — he pastes, gives feedback, I adjust.
- **Press / In-the-News page** — held pending Sam Jacobson clarification on Dr. Terry Sellers's affiliation (article implied he's Delta staff but Adam confirmed he's not).
- **Talk Therapy page** — orphaned service, still needs its own page.
- **Peer-reviewed citations across service pages** — active work per PROPOSAL-authority-and-ai-trust-strategy.md.

---

## Correction log (things I got wrong during this session)

1. **Doug misreference (Regal ↔ WaterLight cross-contamination):** flagged as feedback memory `feedback_client_scoping.md`. Doug is WaterLight + MRS Hobby only, not Regal or Delta.
2. **Domain `.com` vs `.org`:** initially referenced `deltahealingsolutions.com`. Correct is `.org` (non-profit).
3. **Dr. Terry Sellers as staff:** original audit recommended adding him to About team based on Chronicle article. Adam confirmed he is NOT staff. Corrected inline and in memory. Article framing may need clarification with Sam Jacobson.
4. **Spravato as current service:** original audit treated Spravato as an active offering to be supplemented by ketamine. Reality: Spravato was fully retired, ketamine replaced it. Full sweep applied.

---

## Squarespace paste workflow (Adam handling)

Adam is doing the code install himself (not Tyla for this iteration). The AUDIT-2026-07-13-* files are ready to paste. Loop:

1. Adam pastes a code block
2. Adam reviews rendered output
3. Adam sends back to Claude with any adjustments needed
4. Claude adjusts the file, Adam re-pastes

Iterative until Squarespace state matches intent.

---

# Afternoon iteration (2026-07-13 PM)

## Tyla's email response captured

Tyla responded positively to the authority strategy proposal:

- **12 insurance plans accepted:** Humana, Select Health, Cigna, Aetna, UMR, United Healthcare, Medicare (NO MEDICAID), PEHP, HMA, Tricare, EMI, Blue Cross/Blue Shield
- **Angie's role:** clinical citations / peer-reviewed content (Item #4 workstream). Contact `angie@deltahealingsolutions.org` — also the contact-form recipient.
- **Tone/topic priorities (baked into every code block going forward):**
  1. Synergy angle — TMS + Talk Therapy + Ketamine work together, not siloed
  2. Safety-net messaging — insurance/prior auth help, non-profit affordable cash pricing
  3. Subtle privacy signal for small-community patients
- **Chronicle outreach:** approved by Tyla. Draft email to Sam Jacobson in scratchpad.
- **EIN 96-4598362** — saved to memory, baked into Donate BOTTOM tax-ID line.

## Directory listings audit (Item #5) — 3 structural discoveries

`DIRECTORY_AUDIT_20260713.md` in root. Explains referral drought + AI-search invisibility:

1. **NeuroStar Provider Locator listing is LIVE but broken:** URL exists (neurostar.com/providers/delta-healing-solutions/). Says Suite B (should be A). TMS-only description. Dr. Rayner not listed. 15-min NeuroStar rep call fixes.
2. **Federal entity name mismatch:** Delta is registered as "Unified Healing Solutions" on GuideStar / IRS Form 990. Requires DBA filing.
3. **Dr. Rayner's NPI (1194008979)** still shows Provo/Pleasant Grove Whole Mind address, not Delta. One NPI update at nppes.cms.hhs.gov cascades to Healthgrades/Vitals/Zocdoc/WebMD/Doximity + insurance directories.

Also NOT listed: Psychology Today, Yelp, BBB, Healthgrades (Utah), Vitals-at-Delta. TrailBlaze Utah pulled its listing (HTTP 410) — the source ChatGPT was citing for Delta.

## Full site code-block batch (12 files pasted by Adam)

Second subagent produced 11 `AUDIT-2026-07-13-*` code blocks + Global Header v3. Adam pasted iteratively and requested many refinements.

**Pages delivered:**
- Global Header v3 (merged with production; GA4 preserved)
- Homepage, About, Providers, TMS, Ketamine, Med Mgmt, Psych Eval, ADHD, Events, Thank You
- Contact TOP + Contact BOTTOM (3-block form structure)
- Donate TOP + Donate BOTTOM (2-block donation-button structure)

**Corrections applied during rapid iteration:**

- **TMS subhead mid-phrase break** — removed `max-width: 62ch`, rephrased, wrapped "Dr. Thomas Rayner, MD" in `nowrap`.
- **Self-assessment CTA restored to TMS** — Adam flagged missing block. Wasn't in any local file (Tyla added it in Squarespace after last snapshot). Rebuilt as gradient card linking to PHQ-9 survey.
- **Providers page referral CTA** — anchor-link `#refer` instead of nonexistent `/referral-form` URL. Removed Online Form contact box. Bottom "Submit a Referral" button → `tel:` link.
- **FAQ + TMS referral copy** — removed all `/refer-a-patient` references (Delta doesn't have that page).
- **Elend LeBaron photo URL** — Adam provided real CDN URL (fe051f46 UUID, IMG_5240.jpg). Swapped placeholder in both card + modal.
- **Events "No Events" empty state** — padded up substantially (110px desktop, 60px mobile).
- **Global Header v3 merged** — original was missing GA4 (G-HK6GKR820B). Merged GA4 + click-to-call CSS + FB/IG sameAs + geo meta + preconnect links. Removed Psychology Today sameAs (Delta not listed there).
- **Contact page split into 3-block structure** — Squarespace native Form Block in middle. Wrong-shape single-block audit contact archived.
- **Insurance Widget on Contact TOP** — 12-plan CSS Grid (auto-fit for full-width span) + tactful Medicaid callout with non-profit cash-pricing framing. Iterated once when chip layout was too centered.
- **Common Questions FAQ on Homepage** — 6 native `<details>` accordions mirroring the FAQPage JSON-LD schema. Zero JS.
- **Donate page split into 2-block structure** — Squarespace donation block in middle. Impact amounts synced to LIVE site ($150 / $220 / $2,500). EIN baked in. Donor privacy callout added.

**Files archived to `_archive/UNUSED-*`:**
- `REFERRAL-FORM-EDITABLE` (Delta has no web referral form)
- `CONTACT-EDITABLE-SINGLE-BLOCK` (wrong shape for 3-block structure)
- `DONATE-EDITABLE-SINGLE-BLOCK` (wrong shape for 2-block structure)
- `PATIENT-PORTAL-EDITABLE` (goes to external CRM)
- `INSURANCE-EDITABLE` (no dedicated page — content lives on Contact widget + other pages)
- `FAQ-EDITABLE` (no dedicated page — Q&As now on Homepage)

## Deferred / next-session items

**Tyla or Delta staff action:**
- NeuroStar Provider Locator fix (15-min rep call) — HIGHEST ROI
- Dr. Rayner NPI update at nppes.cms.hhs.gov (1 hr form)
- DBA filing "Unified Healing Solutions" → "Delta Healing Solutions" (multi-week)
- Google Business Profile claim + optimize (30 min)
- Psychology Today listing (30 min)

**Adam:**
- Send Chronicle outreach email (draft at scratchpad)

**Claude (queued for next session):**
- Peer-reviewed citations for service pages (Angie's Item #4 workstream, once she shares what she's gathered)
- Yelp, BBB, Utah DSAMH secondary directory work
- Talk Therapy dedicated page (still orphaned service)
- Re-run TrailBlaze Utah re-submission if directory link matters
