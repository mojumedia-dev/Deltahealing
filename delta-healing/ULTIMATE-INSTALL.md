# ULTIMATE Clean CSS - Remove ALL Boxes

**File:** ULTIMATE-CLEAN-CSS.css  
**Version:** 4.0 (Ultra aggressive - removes ALL borders/boxes)  
**Date:** March 12, 2026

## The Problem

Service buttons and newsletter checkbox **still showing pill-shaped borders** even after v3.

## The Solution

**ULTIMATE-CLEAN-CSS.css** uses ultra-aggressive selectors to override Squarespace's inline styles:

### What's Different in v4:

1. **Added `div.option` selector** - catches generic div wrappers
2. **Added `border-width: 0 !important`** - in addition to `border: none`
3. **Added `background-color: transparent`** - in addition to `background`
4. **Added `box-shadow: none !important`** - removes any shadows
5. **Multiple newsletter selectors** - `.newsletter-block`, `.newsletter-block .option`, etc.
6. **Fieldset border removal** - force removes all fieldset borders
7. **Checked state uses `~` selector** - catches siblings not just adjacent

## Installation

### Critical: Clear ALL old CSS first

1. **Squarespace > Design > Custom CSS**
2. **Select ALL text and DELETE** (don't skip this!)
3. Copy **ULTIMATE-CLEAN-CSS.css** entire contents
4. Paste into empty Custom CSS box
5. Click **Save**
6. **Hard refresh:** Ctrl + Shift + R (Windows) / Cmd + Shift + R (Mac)

## What You Should See

### Newsletter Checkbox:
```
Before: ┌────────────────────────────────┐
        │ ○ Sign up for news and updates │
        └────────────────────────────────┘

After:  ○ Sign up for news and updates
```

### Service Buttons:
```
Before: ┌─────────────────┐  ┌───────────────────────────┐
        │ ○ TMS Therapy   │  │ ○ Psychiatric Evaluation  │
        └─────────────────┘  └───────────────────────────┘

After:  ○ TMS Therapy    ○ Psychiatric Evaluation
```

**No borders, no backgrounds, no boxes!**

## Aggressive Selectors Added

```css
/* Catches all option variations */
.form-wrapper .option,
.form-wrapper .field.checkbox .option,
.form-wrapper .field.radio .option,
.form-wrapper .field-element .option,
div.option,
.option {
  border: none !important;
  border-width: 0 !important;
  background: transparent !important;
  background-color: transparent !important;
  box-shadow: none !important;
}
```

## Troubleshooting

### Still seeing borders?

**1. Verify file used:**
- Make sure you're using **ULTIMATE-CLEAN-CSS.css** (not v1, v2, or v3)

**2. Clear cache aggressively:**
- Chrome: Ctrl + Shift + Delete → Clear browsing data → Cached images
- Try incognito/private mode
- Try different browser

**3. Check Squarespace saved it:**
- Go back to Design > Custom CSS
- Verify your changes are there
- Click Save again if needed

**4. Check for inline styles (Advanced):**
- Right-click service button → Inspect
- Look for `style="..."` attributes in HTML
- If you see inline `border` or `background`, Squarespace is adding them dynamically
- Share screenshot and we can add even more aggressive CSS

### Mobile menu broken?

- Make sure you used **ULTIMATE-CLEAN-CSS.css** (includes nav protection)
- All navigation CSS is wrapped in `@media (min-width: 768px)`
- Clear cache and test

## Version History

**v4.0** (March 12, 2026) - ULTIMATE
- Ultra aggressive selectors
- `div.option` and standalone `.option` added
- `border-width: 0`, `background-color`, `box-shadow: none`
- Multiple newsletter variations
- Fieldset border removal
- Should remove ALL boxes

**v3.0** (March 12, 2026)
- Removed boxes from service buttons
- Clean design

**v2.0** (March 12, 2026)
- Enhanced form with pill buttons

**v1.0** (March 12, 2026)
- Initial navigation + basic form

## Files Reference

- **ULTIMATE-CLEAN-CSS.css** ← **USE THIS!**
- **ULTRA-CLEAN-FORM.css** (form only - reference)
- **IMPROVED-NAV-CSS.css** (nav only - reference)

## Still Having Issues?

If borders/boxes STILL show after:
1. Using ULTIMATE-CLEAN-CSS.css
2. Clearing cache completely
3. Testing in incognito mode

Then Squarespace is likely using inline styles or JavaScript to add them. In that case:

1. Take screenshot of form
2. Right-click service button → Inspect → Screenshot HTML
3. Send both so I can see exact class names and inline styles
4. We'll create custom CSS targeting those specific selectors
