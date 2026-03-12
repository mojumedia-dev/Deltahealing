# FIXED Portal Button URLs - Installation Guide

**File:** FIXED-COMPLETE-CSS.css  
**Version:** 5.0 (Corrected portal button URLs)  
**Date:** March 12, 2026

## What Was Fixed

### Patient Portal Button (Teal Outline)
**Before:** Looking for URLs containing "patient-portal"  
**After:** Looking for URLs containing "advancedmd.com" or "pp-wfe"

**Actual URL:** https://pp-wfe-100.advancedmd.com/157829/account/logon

### Providers Button (Blue Outline)
**Before:** Various selectors that weren't catching it  
**After:** Simplified to `/providers` and variations

**Actual URL:** /providers

## New Selectors

### Patient Portal (Teal):
```css
.header-nav-item a[href*="advancedmd.com"],
.header-nav-item a[href*="pp-wfe"]
```

### Providers (Blue):
```css
.header-nav-item a[href="/providers"],
.header-nav-item a[href*="/providers"]
```

## Installation

### 1. Go to Squarespace
**Design > Custom CSS**

### 2. Delete ALL existing CSS
Select everything and delete it

### 3. Copy & Paste
Open **FIXED-COMPLETE-CSS.css** and copy entire contents  
Paste into Custom CSS box

### 4. Save & Test
- Click **Save**
- Refresh page: Ctrl + Shift + R / Cmd + Shift + R
- Check navigation buttons

## What You Should See

✅ **Patient Portal** - Teal outline button (links to AdvancedMD)  
✅ **Providers** - Blue outline button (links to /providers)  
✅ **Clean form styling** - No boxes around service buttons  
✅ **Mobile menu works** - Hamburger opens/closes properly

## Troubleshooting

**Patient Portal still no outline:**
1. Check the actual link URL in Squarespace
2. Right-click button → Inspect → Check `href` attribute
3. If URL changed, update CSS selector

**Providers still no outline:**
1. Check URL is exactly `/providers`
2. Clear browser cache completely
3. Try incognito mode

**Forms have boxes again:**
1. Make sure using FIXED-COMPLETE-CSS.css (includes ultra-clean form styling)
2. Clear cache
3. Hard refresh

## Files Reference

- **FIXED-COMPLETE-CSS.css** ← **USE THIS!**
- **FIX-PORTAL-BUTTONS.css** (portal fixes only - reference)
- Other files (previous versions - don't use)

## Version History

**v5.0** (March 12, 2026)
- Fixed Patient Portal selector (AdvancedMD external link)
- Fixed Providers selector (/providers)
- Includes ultra-clean form styling (no boxes)

**v4.0** (March 12, 2026)
- Ultra aggressive form selectors
- Removed all boxes from service buttons

**v3.0-v1.0** (March 12, 2026)
- Previous iterations

## What This CSS Includes

✅ Navigation improvements  
✅ Portal button highlighting (teal + blue)  
✅ Form card styling  
✅ Ultra-clean checkboxes (no boxes)  
✅ Mobile responsive  
✅ Mobile menu protection (won't break hamburger)

Everything in one file!
