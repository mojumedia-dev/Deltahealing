# Form Card Styling - Installation Guide

**Date:** March 12, 2026  
**Issue:** Forms on Contact and Donate pages look plain - need card background to match rest of site

## What This Does

Wraps Squarespace Form Blocks in the same white card design used throughout the site:
- White background with subtle shadow
- Rounded corners (16px)
- Proper padding
- Enhanced input styling with teal focus rings
- Gradient submit button matching brand colors
- Better spacing and visual hierarchy

## Installation

### Option 1: Complete CSS (Recommended)
Use **COMPLETE-CUSTOM-CSS.css** - includes navigation improvements + form styling

1. Go to Squarespace: **Design > Custom CSS**
2. **Delete ALL existing CSS**
3. Copy entire contents of **COMPLETE-CUSTOM-CSS.css**
4. Paste into Custom CSS box
5. Click **Save**

### Option 2: Add Form Styling Only
If you already have IMPROVED-NAV-CSS.css installed:

1. Open **FORM-CARD-STYLING.css**
2. Copy the entire contents
3. Go to Squarespace: **Design > Custom CSS**
4. Scroll to the very bottom of existing CSS
5. Paste form styling at the end
6. Click **Save**

## What Pages Are Affected

- ✅ **Contact Page** - Form gets card background
- ✅ **Donate Page** - Form gets card background
- ✅ **Any other page with a Squarespace Form Block**

## Features Added

### Card Container:
- White background
- 16px border radius
- Subtle drop shadow
- 40px padding (24px on mobile)
- 1px border for definition

### Input Fields:
- Light gray background (#f8f9fa)
- 8px border radius
- Focus state: white background + teal ring
- Smooth transitions
- Better padding (14px)

### Checkboxes/Radio Buttons:
- Pill-shaped containers
- Teal accent color
- Hover effects
- Visual feedback when selected

### Submit Button:
- Blue gradient (matches brand)
- Lift effect on hover
- Drop shadow
- Full width on mobile

### Mobile Responsive:
- Reduced padding on small screens
- Full-width submit button
- Touch-friendly input sizes (16px prevents zoom on iOS)

## Before & After

**Before:**
- Plain white form
- Looks disconnected from page design
- Basic input styling
- No visual cohesion

**After:**
- Card-based design matches rest of site
- Unified visual language
- Professional, polished appearance
- Better user experience

## Troubleshooting

**Form still looks plain:**
1. Clear browser cache (Ctrl + Shift + R / Cmd + Shift + R)
2. Check that CSS was saved in Squarespace
3. Make sure you're viewing the Contact or Donate page
4. Try different browser

**Submit button doesn't have gradient:**
- Check that Custom CSS was saved
- Verify button selector in CSS (Squarespace might use different class)
- Add `!important` to button styles if needed

**Mobile menu broken:**
- Make sure you used COMPLETE-CUSTOM-CSS.css (not old version)
- All navigation styles are wrapped in @media (min-width: 768px)
- Clear cache and test again

## Testing Checklist

### Desktop:
- [ ] Form has white card background
- [ ] Form has drop shadow
- [ ] Input fields have light gray background
- [ ] Focus state shows teal ring
- [ ] Submit button has blue gradient
- [ ] Submit button lifts on hover
- [ ] Checkboxes have pill containers

### Mobile:
- [ ] Form card has proper padding
- [ ] Submit button is full width
- [ ] Input fields are touch-friendly (16px font)
- [ ] No horizontal scroll
- [ ] Form is easily readable

## Files Reference

- **COMPLETE-CUSTOM-CSS.css** - Full CSS (navigation + forms)
- **FORM-CARD-STYLING.css** - Form styles only (standalone)
- **IMPROVED-NAV-CSS.css** - Navigation improvements only

## Brand Colors Used

- **Teal Focus Ring:** #3db8a8
- **Blue Gradient:** #1e4d8b → #2c5fa3
- **Light Background:** #f8f9fa
- **Success Green:** #28a745
- **Error Red:** #dc3545

All colors match the Delta Healing Solutions brand from the logo.
