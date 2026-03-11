# Delta Healing Solutions - Squarespace Installation Guide

## 📂 File Structure

```
GLOBAL (site-wide):
├── 1-GLOBAL-CUSTOM-CSS.txt ........... Design > Custom CSS
├── 2-GLOBAL-HEADER.txt ............... Code Injection > HEADER
└── 3-GLOBAL-FOOTER.txt ............... Code Injection > FOOTER

PAGE-SPECIFIC CODE BLOCKS:
├── HOME-page-code-block.html ......... Home page code block
├── TMS-page-code-block.html .......... TMS Therapy page code block
├── SPRAVATO-page-code-block.html ..... Spravato page code block
├── PSYCH-EVAL-page-code-block.html ... Psychiatric Evaluation page
├── MED-MGMT-page-code-block.html ..... Medication Management page
└── ADHD-page-code-block.html ......... Cognitive Testing/ADHD page
```

---

## 🌐 GLOBAL INSTALLATION (Do Once)

### Step 1: Custom CSS
1. Go to: **Design > Custom CSS**
2. Open: `1-GLOBAL-CUSTOM-CSS.txt`
3. Copy entire contents
4. Paste into Custom CSS field
5. Click **Save**

### Step 2: Header Injection
1. Go to: **Settings > Advanced > Code Injection**
2. Open: `2-GLOBAL-HEADER.txt`
3. Copy entire contents
4. Paste into **HEADER** field
5. Click **Save**

### Step 3: Footer Injection
1. Stay in **Code Injection**
2. Open: `3-GLOBAL-FOOTER.txt`
3. Copy entire contents
4. Paste into **FOOTER** field
5. Click **Save**

---

## 📄 PAGE-SPECIFIC CODE BLOCKS

For each page:

### Home Page
1. Edit home page
2. Add **Code Block** (under Advanced in block menu)
3. Open: `HOME-page-code-block.html`
4. Copy entire contents
5. Paste into code block
6. Save page

### TMS Therapy Page
1. Edit TMS page
2. Add **Code Block** at top or bottom of page
3. Open: `TMS-page-code-block.html`
4. Paste code
5. Save

### Spravato Page
1. Create new page: `/spravato-treatment`
2. Add **Code Block**
3. Open: `SPRAVATO-page-code-block.html`
4. Paste code
5. Save

### Other Service Pages
Repeat for:
- Psychiatric Evaluation
- Medication Management
- ADHD/Cognitive Testing

---

## ✅ What Goes Where

### GLOBAL (affects entire site):
- Modern design CSS (animations, buttons, forms)
- Global business schema (clinic info, location, hours)
- Site-wide meta tags
- JavaScript features (back to top, smooth scroll, tracking)

### PAGE-SPECIFIC (only affects that page):
- Service-specific schema markup
- Page-specific FAQs
- Service descriptions
- Local keywords for that service

---

## 🎯 Benefits of This Approach

✅ **Global code** = Install once, works everywhere  
✅ **Page code blocks** = Easy to customize per service  
✅ **Clean separation** = Easy to maintain  
✅ **No conflicts** = Each part has its own purpose  

---

## 🧪 Testing

After installation:
1. Clear browser cache (Ctrl+Shift+R / Cmd+Shift+R)
2. Visit home page - check animations
3. Visit each service page - check schema in source code
4. Test mobile view
5. Test forms
6. Check Google Search Console after 48 hours

---

## 📊 Verify Schema Markup

Test your schema:
1. Go to: https://search.google.com/test/rich-results
2. Enter page URL
3. Check for errors
4. Repeat for each service page

---

Created for: Delta Healing Solutions  
Structure: Squarespace-optimized (Global + Page-specific)
