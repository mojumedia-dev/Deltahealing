# Delta Healing Solutions - Editable Pages (Final Version)

**✅ All 7 pages converted to Squarespace-editable format!**

## 📁 Files to Use

### ✨ **New Editable Versions** (Use These!)

1. **HOMEPAGE-EDITABLE.html** - Homepage with services grid
2. **ABOUT-EDITABLE.html** - About page with team bios & modal popups
3. **TMS-EDITABLE.html** - NeuroStar TMS Therapy service page
4. **SPRAVATO-EDITABLE.html** - Spravato treatment service page
5. **PSYCH-EVAL-EDITABLE.html** - Psychiatric Evaluation service page
6. **MED-MGMT-EDITABLE.html** - Medication Management service page
7. **ADHD-EDITABLE.html** - ADHD & Cognitive Testing service page

### 📦 Backup Files (For Reference Only)

**Original full-page HTML files** backed up in `original-pages/` folder:
- COMPLETE-HOMEPAGE.html
- PAGE-About.html
- PAGE-TMS-Therapy.html
- PAGE-Spravato.html
- PAGE-Psychiatric-Evaluation.html
- PAGE-Medication-Management.html
- PAGE-ADHD-Cognitive-Testing.html

---

## 🔧 Installation Instructions

### Step 1: Copy Code from Editable Files

1. Open one of the **-EDITABLE.html** files in a text editor
2. **Select All** (Ctrl+A) and **Copy** (Ctrl+C)

### Step 2: Add to Squarespace Page

1. Go to your Squarespace page editor
2. Add a **Code Block** (click **+** → **Code**)
3. **Paste** the entire code into the block
4. Click **Apply**

### Step 3: Save & Preview

1. Click **Save** in the page editor
2. Preview the page
3. **The visual editor will still work!** You can edit around the code block.

---

## ✅ What Makes These "Editable"?

These versions use a `<section>` wrapper instead of full HTML documents:

```html
<section id="dhs-home">
  <style>
    /* CSS scoped to this section */
  </style>
  
  <div class="wrap">
    <!-- Page content -->
  </div>
</section>
```

**Benefits:**
- ✅ Squarespace's visual editor stays enabled
- ✅ Can add native Squarespace blocks above/below
- ✅ Page settings (SEO, URL, etc.) still work
- ✅ Same design as full-page versions

**Difference from original versions:**
- ❌ Old versions: Used `<!DOCTYPE html><html><head><body>` (locks editing)
- ✅ New versions: Use `<section id="...">` wrapper (keeps editing enabled)

---

## 🎨 Design Features

All pages include:
- **Brand colors:** Primary Blue (#1e4d8b), Teal (#3db8a8)
- **Responsive design:** Mobile, tablet, desktop optimized
- **Card-based layout:** Professional shadows, rounded corners
- **Smooth animations:** Hover effects, transitions
- **SEO schema markup:** Structured data for search engines

### About Page Special Features:
- **10 team member cards** with photos
- **Modal bio popups** (click to read full bio)
- **Values section** with 6 core values
- **All team photos** using correct Squarespace CDN URLs

---

## 📋 Still TODO

1. **Elend's Photo** - Upload to Squarespace and update placeholder URL in ABOUT-EDITABLE.html
2. **Janel's Bio** - Add bio text to her modal in ABOUT-EDITABLE.html
3. **Global CSS** - Install `1-GLOBAL-CUSTOM-CSS.txt` in Design > Custom CSS (optional)
4. **Global Scripts** - Install header/footer code from `2-GLOBAL-HEADER.txt` and `3-GLOBAL-FOOTER.txt` (optional)

---

## 🚀 Next Steps

1. **Test** one page first (try HOMEPAGE-EDITABLE.html)
2. **Verify** editing still works
3. **Install** the remaining 6 pages
4. **Update** Elend's photo and Janel's bio when available

---

## 💾 Git Commits

- **f3b86ce** - Homepage editable version + original backups
- **7503411** - About editable version with all team bios
- **a2cd0c2** - All 5 service page editable versions

All files pushed to: https://github.com/mojumedia-dev/Deltahealing

---

**Questions?** All pages are ready to install! 🎉
