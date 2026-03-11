# Contact Page Installation Guide (3-Part Split)

## 📋 **Overview**

The contact page is split into **3 sections** to allow you to use Squarespace's native Form Block (with spam protection) while maintaining the custom design.

---

## 🔧 **Installation Steps**

### **Step 1: Add Code Block #1 - Top Section**

1. Go to your Contact page in edit mode
2. Add a **Code Block** at the top
3. Paste the entire contents of: **`CONTACT-PART-1-TOP.html`**
4. Click **Apply**

**This includes:**
- Hero section with heading
- 4 contact info cards (Phone, Email, Address, Hours)
- "Send Us a Message" heading

---

### **Step 2: Add Squarespace Form Block**

1. Below the first code block, click **+** to add a block
2. Add a **Form Block**

**Configure the form:**

**Fields to add:**
- Name (required)
- Email (required)
- Phone (optional)
- **Checkboxes:** TMS Therapy, **Spravato Treatment**, Psychiatric Evaluation, Medication Management, ADHD/Cognitive Testing
- Message (required, textarea)

**Form Settings:**
- **Send to:** Angie@deltahealingsolutions.org
- **Success message:** "Thank you! Our team will reach out soon to discuss how we can support you on your mental health journey."
- **Post-submit:** Show message or redirect to /thank-you

**Enable spam protection:**
- Make sure reCAPTCHA is enabled (should be by default)

---

### **Step 3: Add Code Block #2 - Map Section**

1. Below the form block, add another **Code Block**
2. Paste the entire contents of: **`CONTACT-PART-2-MAP.html`**
3. Click **Apply**

**This includes:**
- Google Maps embed
- "Get Directions" button
- Schema markup for SEO

---

## ✅ **Final Page Structure**

Your Contact page should now have **3 sections in this order:**

```
┌─────────────────────────────────────┐
│  CODE BLOCK #1                      │
│  - Hero                             │
│  - Contact Cards                    │
│  - Form Heading                     │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│  SQUARESPACE FORM BLOCK             │
│  - Name, Email, Phone               │
│  - Service Checkboxes               │
│  - Message                          │
│  - reCAPTCHA                        │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│  CODE BLOCK #2                      │
│  - Map                              │
│  - Directions Button                │
│  - Schema Markup                    │
└─────────────────────────────────────┘
```

---

## 🎨 **Styling**

Each code block has its own scoped CSS (`#dhs-contact-top` and `#dhs-contact-map`), so they won't conflict with each other or other pages.

The Squarespace form will use your site's default form styling. If you want to customize it further, you can add CSS to **Design > Custom CSS**.

---

## 📌 **Important Notes**

1. **Correct Address:** 95 White Sage Avenue (no "Suite A")
2. **Fixed Typo:** "Get Directions" (was "Directtions")
3. **Form Recipient:** Angie@deltahealingsolutions.org
4. **Spam Protection:** Built-in with Squarespace forms
5. **Don't forget Spravato:** Make sure it's in the service checkboxes!

---

## 🐛 **Troubleshooting**

**Q: The styling looks off between sections**
- Make sure you didn't accidentally delete any `</section>` closing tags
- Check that each code block is properly saved

**Q: Form isn't sending**
- Verify recipient email is correct
- Check that required fields are marked as required
- Make sure form is enabled (not disabled)

**Q: Map not loading**
- The iframe uses a placeholder URL - Google Maps should generate the correct embed code
- Or the generic one should work fine

---

## ✅ **All Set!**

Your contact page now has:
- ✅ Modern card-based design
- ✅ Correct contact information
- ✅ Spam-protected form
- ✅ Interactive map
- ✅ Mobile responsive
- ✅ SEO optimized

**Test it out by submitting the form!**
