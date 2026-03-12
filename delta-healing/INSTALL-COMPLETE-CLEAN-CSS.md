# Complete Clean CSS - Installation Guide

**File:** COMPLETE-CLEAN-CSS.css  
**Version:** 3.0 (Clean form styling - no boxes)  
**Date:** March 12, 2026

## What Changed in v3

### ✅ Service Buttons - Clean Style
**Before (v2):** Pill-shaped buttons with borders/boxes  
**After (v3):** Simple checkboxes + text labels (no boxes)

- Removed all borders and background colors from service buttons
- Transparent background
- Just checkbox + text
- Selected state: text becomes bold + blue color
- Much cleaner, simpler appearance

### ✅ Newsletter Checkbox - Clean
- Removed border/box around "Sign up for news and updates"
- Transparent background
- Simple checkbox + text

### ✅ Better Mobile Layout
- Reduced padding on mobile (24px → 20px sides)
- Better margin on card (16px 8px)
- Larger touch targets (24px checkboxes on mobile)
- First/Last name stack properly
- Submit button full width with proper padding

## Installation

### 1. Go to Squarespace
**Design > Custom CSS**

### 2. Delete Everything
Select all existing CSS and delete it

### 3. Copy & Paste
Open **COMPLETE-CLEAN-CSS.css** and copy entire contents  
Paste into Squarespace Custom CSS box

### 4. Save & Clear Cache
- Click **Save**
- Clear browser cache: Ctrl + Shift + R (Windows) / Cmd + Shift + R (Mac)

## What You'll See

### Forms (Desktop & Mobile):
- ✅ White card background with shadow
- ✅ Rounded corners
- ✅ Light gray input fields
- ✅ Teal focus ring on inputs
- ✅ **Service checkboxes with NO BOXES** - just checkbox + text
- ✅ Selected services show bold blue text
- ✅ Newsletter checkbox clean (no box)
- ✅ Blue gradient submit button
- ✅ Mobile: full-width submit, proper spacing

### Navigation (Desktop):
- ✅ Patient Portal with teal outline
- ✅ Providers with blue outline
- ✅ Better spacing
- ✅ Smooth hover effects

### Mobile:
- ✅ Hamburger menu works
- ✅ Form readable with good padding
- ✅ Touch-friendly checkboxes (24px)
- ✅ No boxes around service buttons

## Service Button Comparison

**v2 (Pill Boxes):**
```
┌─────────────────────────┐
│ ☑ TMS Therapy          │  ← Border + background
└─────────────────────────┘
```

**v3 (Clean):**
```
☑ TMS Therapy  ← Just checkbox + text
```

Much simpler and cleaner!

## Files Reference

- **COMPLETE-CLEAN-CSS.css** ← USE THIS ONE
- **CLEAN-FORM-STYLING.css** (form styles only - reference)
- **IMPROVED-NAV-CSS.css** (navigation only - reference)

## Version History

**v3.0** (March 12, 2026)
- Removed boxes from service buttons
- Removed border from newsletter checkbox
- Better mobile spacing
- Larger touch targets on mobile
- Simpler, cleaner design

**v2.0** (March 12, 2026)
- Enhanced form styling with stronger selectors
- Pill-shaped service buttons

**v1.0** (March 12, 2026)
- Initial navigation improvements
- Basic form card styling

## Troubleshooting

**Boxes still showing around service buttons:**
1. Clear browser cache completely
2. Try incognito/private browsing
3. Make sure you saved in Squarespace
4. Check you're using COMPLETE-CLEAN-CSS.css (not older version)

**Mobile menu broken:**
1. Ensure you replaced ALL CSS
2. Clear cache
3. All nav styles are in @media (min-width: 768px) wrapper

**Submit button not full width on mobile:**
1. Clear cache
2. Check screen width is actually <768px
3. Try different mobile device/browser
