# Regal Tule Springs - 3-Part Installation Guide

## Why 3 Parts?

Squarespace doesn't allow you to insert a **Form Block** inside a **Code Block**. So we split the page into 3 sections:

1. **Part 1 (Top)** - Hero + Features + Contact info + Form heading
2. **Squarespace Form Block** ← You add this in the middle
3. **Part 2 (Bottom)** - Form closing + Footer CTA + All CSS/JS

---

## Installation Steps

### Step 1: Add Code Block #1 (Top Section)

1. Log into Squarespace
2. Go to **Pages** → **Home** (or create a new blank page)
3. Click **Edit**
4. Click **+** (Add Block) → **Code**
5. Paste **entire contents** of `HOMEPAGE-PART-1-TOP.html`
6. Click **Apply**

---

### Step 2: Add Squarespace Form Block

1. Click **+** (Add Block) directly **below** the code block you just added
2. Select **Form**
3. Configure the form with these fields:

**Recommended Form Fields:**
- **Name** (Text, required)
- **Email** (Email, required)
- **Phone** (Text, optional)
- **Company Name** (Text, optional)
- **Space Type** (Dropdown, optional)
  - Options: Retail, Office, Medical, Restaurant, Service, Other
- **Square Footage Needed** (Text, optional)
- **Message** (Textarea, required)

**Form Settings:**
- **Form Title:** Leave blank (we already have "Request Information" in Part 1)
- **Submit Button Text:** "Send Request" or "Submit"
- **Email notifications:** Set to your leasing/info email
- **Confirmation:** Either show message or redirect to a Thank You page

---

### Step 3: Add Code Block #2 (Bottom Section)

1. Click **+** (Add Block) directly **below** the form block
2. Select **Code**
3. Paste **entire contents** of `HOMEPAGE-PART-2-BOTTOM.html`
4. Click **Apply**

---

## Final Structure

Your page should look like this in the editor:

```
┌─────────────────────────────────┐
│ Code Block #1 (Part 1 - Top)   │ ← HOMEPAGE-PART-1-TOP.html
├─────────────────────────────────┤
│ Form Block (Squarespace)        │ ← You configure this
├─────────────────────────────────┤
│ Code Block #2 (Part 2 - Bottom)│ ← HOMEPAGE-PART-2-BOTTOM.html
└─────────────────────────────────┘
```

---

## What You'll See

### Sections Included:
1. **Hero** - Blue gradient header with phone number + "Request Information" button
2. **Strategic Location** - 3 cards (Highway Visibility, Growing Market, Demographics)
3. **Property Features** - 6 feature items with checkmarks
4. **Contact Section** - Left side has contact info, right side has your form
5. **Footer CTA** - Final blue section with phone number

---

## Customization Options

### Change Phone Number
In both files, find and replace:
- `3856454842` → your number (no spaces/dashes)
- `(385) 645-4842` → your formatted number

### Change Colors
In `HOMEPAGE-PART-2-BOTTOM.html`, find the `<style>` section and update:

```css
/* Primary Blue */
#1a5490

/* Accent Blue */
#2c7bb6

/* Gold/Yellow (CTA buttons) */
#ffd700
```

### Change Location Text
Find and replace:
- `I-215 & Revere St Interchange`
- `North Las Vegas, NV`
- `I-215 & Revere Street`

---

## Troubleshooting

**Problem:** Form doesn't fit properly  
**Solution:** Make sure you added the form block **between** Code Block #1 and Code Block #2 (not inside either one)

**Problem:** Styles not working  
**Solution:** All CSS is in Part 2 (bottom). Make sure that code block is present and applied.

**Problem:** Icons not showing  
**Solution:** Font Awesome is loaded in Part 2. If icons are missing, the bottom code block wasn't added correctly.

**Problem:** Mobile looks broken  
**Solution:** Clear your browser cache and test in a fresh incognito window. All styles are mobile-responsive.

---

## SEO Optimization

After installation, update in **Squarespace Settings**:

**Page Title:**
```
Regal Tule Springs - Prime Commercial Space | North Las Vegas
```

**Meta Description:**
```
Prime commercial space at Regal Tule Springs in North Las Vegas. Excellent I-215 & Revere St visibility. Call (385) 645-4842 for leasing info.
```

**URL:** `/` (homepage)

---

## Next Steps

1. **Test the form** - Submit a test inquiry and make sure you receive it
2. **Add photos** - Consider adding property photos to the hero section
3. **Google Analytics** - Set up conversion tracking for form submissions
4. **Google My Business** - Claim and optimize your listing
5. **Add more pages:**
   - Available Spaces
   - Photo Gallery
   - Site Plan
   - Contact/Directions

---

**Files:**
- `HOMEPAGE-PART-1-TOP.html` (Top section)
- `HOMEPAGE-PART-2-BOTTOM.html` (Bottom section + styles)

**Contact:** (385) 645-4842  
**Location:** I-215 & Revere Street, North Las Vegas, NV  
**Design:** Modern, professional, mobile-responsive, conversion-focused
