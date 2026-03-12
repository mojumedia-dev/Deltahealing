# Regal Tule Springs - Installation Guide

## Overview
This is a modern, conversion-focused redesign for **Regal Tule Springs** commercial property in North Las Vegas, NV.

**Key Features:**
- Clean, professional design
- Lead generation focused (prominent phone + form)
- Mobile-responsive (phone-first design)
- Single-page layout with smooth scrolling
- Ready for Squarespace installation

---

## Installation Steps

### Step 1: Add the Code Block

1. Log into your Squarespace site
2. Navigate to the **Home** page (or create a new blank page)
3. Click **Edit**
4. Add a **Code Block** (click **+** → **Code**)
5. Paste the **entire contents** of `HOMEPAGE-EDITABLE.html` into the code block
6. Click **Apply**

### Step 2: Add the Contact Form

1. Scroll to the **"Let's Discuss Your Space Needs"** section (where the form placeholder is)
2. **Delete or comment out** the placeholder `<div class="rts-form-placeholder">...</div>`
3. Add a **Squarespace Form Block** inside the `<div class="rts-form-container">` element
4. Configure the form with these recommended fields:

**Recommended Form Fields:**
- **Name** (required)
- **Email** (required)
- **Phone** (optional)
- **Company Name** (optional)
- **Space Type** (dropdown: Retail, Office, Medical, Restaurant, Service, Other)
- **Square Footage Needed** (text)
- **Message** (required)

**Form Settings:**
- Set form to send to your leasing email
- Enable confirmation message or redirect to a Thank You page

### Step 3: Optional Customizations

#### Change Colors
In the `<style>` section, update these color values:

```css
/* Primary Blue */
#1a5490 → your color

/* Accent Blue */
#2c7bb6 → your color

/* Gold/Yellow CTA */
#ffd700 → your color
```

#### Change Phone Number
Search for `3856454842` and `(385) 645-4842` in the HTML and replace with your number.

#### Update Location Text
Search for `I-215 & Revere Street` and update if needed.

---

## What's Included

### Sections:
1. **Hero** - Eye-catching header with phone + form CTAs
2. **Location Highlights** - 3 key benefits (visibility, market, demographics)
3. **Property Features** - 6 feature cards with icons
4. **Contact Form** - Split layout with contact info + form
5. **Footer CTA** - Final conversion push with phone number

### Design Features:
- **Mobile-First Responsive** - Looks great on all devices
- **Smooth Scrolling** - Anchor links scroll smoothly
- **Font Awesome Icons** - Professional iconography
- **Gradient Backgrounds** - Modern blue gradients
- **Hover Effects** - Interactive card animations
- **High Contrast CTAs** - Gold buttons for maximum visibility

---

## SEO Recommendations

After installing, update these in **Squarespace Settings**:

### Page Title:
```
Regal Tule Springs - Prime Commercial Space | North Las Vegas
```

### Meta Description:
```
Prime commercial space available at Regal Tule Springs in North Las Vegas. Excellent I-215 & Revere St visibility. Contact us today: (385) 645-4842
```

### URL Slug:
```
/ (homepage)
```

---

## Next Steps

1. **Add high-quality photos** to the hero section (replace gradient with background image)
2. **Add Google Maps embed** to the contact section
3. **Set up Google Analytics** and conversion tracking
4. **Add Schema markup** for local business SEO
5. **Create Thank You page** for form submissions
6. **Consider adding:**
   - Available spaces/units page
   - Photo gallery
   - Site plan/map
   - FAQ section

---

## Support

If you need customizations or have questions:
- Font sizes, colors, spacing can all be adjusted in the `<style>` section
- All sections are modular - you can remove or reorder them
- The design is fully responsive - test on mobile!

---

**File:** `HOMEPAGE-EDITABLE.html`  
**Contact Phone:** (385) 645-4842  
**Location:** I-215 & Revere Street, North Las Vegas, NV
