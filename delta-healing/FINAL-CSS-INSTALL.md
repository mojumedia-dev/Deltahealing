# Final Custom CSS - Installation Guide

**File:** FINAL-CUSTOM-CSS.css  
**Date:** March 12, 2026  
**Version:** 2.0 (Enhanced form styling with stronger selectors)

## What This Includes

✅ **Navigation Improvements** (from earlier)
- Patient Portal teal outline
- Providers blue outline
- Better spacing between nav items
- Social icon breathing room
- Mobile-safe (won't break hamburger menu)

✅ **Enhanced Form Card Styling** (NEW - Stronger selectors)
- White card background with shadow
- Teal focus rings on inputs
- Pill-shaped service selection buttons
- Blue gradient submit button
- Proper hover effects
- Mobile responsive

## Installation Steps

### 1. Go to Squarespace
Navigate to: **Design > Custom CSS**

### 2. Delete All Existing CSS
Select everything in the Custom CSS box and delete it.
This ensures no conflicts with old styles.

### 3. Copy FINAL-CUSTOM-CSS.css
Open **FINAL-CUSTOM-CSS.css** and copy the entire contents.

### 4. Paste into Custom CSS
Paste the copied CSS into the Squarespace Custom CSS box.

### 5. Save
Click **Save** button.

### 6. Clear Cache & Test
- Desktop: Ctrl + Shift + R (Windows) / Cmd + Shift + R (Mac)
- Mobile: Clear browser cache or try different browser

## What You Should See

### Navigation (Desktop):
- ✅ Patient Portal with teal outline button
- ✅ Providers with blue outline button
- ✅ Better spacing between all nav items
- ✅ Social icons with breathing room
- ✅ Smooth hover effects on both portal buttons

### Forms (Contact & Donate Pages):
- ✅ White card background with subtle shadow
- ✅ 16px rounded corners on card
- ✅ Light gray input fields
- ✅ Teal focus ring when clicking in fields
- ✅ Service buttons (TMS, Psych Eval, etc.) are pill-shaped
- ✅ Service buttons highlight teal when selected
- ✅ Submit button has blue gradient
- ✅ Submit button lifts on hover

### Mobile:
- ✅ Hamburger menu opens and closes properly
- ✅ Form is readable with proper padding
- ✅ Submit button is full width
- ✅ Input fields don't cause zoom on iOS

## Testing Checklist

**Navigation (Desktop):**
- [ ] Patient Portal has teal border
- [ ] Providers has blue border
- [ ] Both buttons lift on hover
- [ ] Navigation spacing looks good
- [ ] Services dropdown works

**Navigation (Mobile):**
- [ ] Hamburger menu opens
- [ ] All menu items visible
- [ ] Menu closes properly

**Forms (Desktop):**
- [ ] Form has white card background
- [ ] Form has drop shadow
- [ ] Input fields are light gray
- [ ] Clicking input shows teal ring
- [ ] Service buttons are pill-shaped
- [ ] Clicking service button shows teal highlight
- [ ] Submit button has blue gradient
- [ ] Submit button lifts on hover

**Forms (Mobile):**
- [ ] Form card displays properly
- [ ] Submit button is full width
- [ ] Fields don't cause page zoom
- [ ] Service buttons wrap nicely
- [ ] Easy to tap all elements

## Troubleshooting

### Patient Portal Still No Teal Outline
1. Check actual URL in Squarespace page settings
2. URL might be different than expected
3. Look in browser inspector to see actual `href` value
4. Add specific selector in CSS if needed

### Form Still Looks Plain
1. Clear browser cache completely (important!)
2. Try incognito/private browsing mode
3. Check CSS was actually saved in Squarespace
4. Verify you're on Contact or Donate page
5. Try different browser

### Mobile Menu Won't Open
1. Make sure you replaced ALL CSS (not added to existing)
2. Clear browser cache
3. Check you're using FINAL-CUSTOM-CSS.css (not old version)
4. All nav styles should be in @media (min-width: 768px)

### Service Buttons Not Pill-Shaped
1. Squarespace might use different HTML structure
2. Open browser inspector (F12)
3. Look at checkbox/radio button HTML
4. May need to adjust selectors

### Submit Button No Gradient
1. Clear cache
2. Check browser inspector - look for inline styles overriding
3. May need to add more `!important` flags
4. Check button class name in Squarespace

## Files Reference

- **FINAL-CUSTOM-CSS.css** - Complete CSS (use this one!)
- **ENHANCED-FORM-CARD.css** - Form styles only (reference)
- **IMPROVED-NAV-CSS.css** - Navigation only (reference)

## Version History

**v2.0** (March 12, 2026)
- Enhanced form styling with stronger selectors
- Better override of Squarespace defaults
- Improved service button pill styling
- More specific checkbox/radio targeting

**v1.0** (March 12, 2026)
- Initial navigation improvements
- Basic form card styling

## Need Help?

If styles still aren't applying after following all troubleshooting steps:

1. Take a screenshot of the form
2. Open browser inspector (F12) and screenshot the HTML structure
3. Share both so we can adjust selectors

The issue is likely that Squarespace's HTML structure is slightly different than expected, and we'll need to target different classes.
