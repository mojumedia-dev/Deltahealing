# Donate Page Installation Guide (3-Part Split)

## 📋 **Overview**

The donate page is split into **3 sections** to allow you to insert donation forms, PayPal buttons, or payment widgets between code blocks.

---

## 🔧 **Installation Steps**

### **Step 1: Add Code Block #1 - Top Section**

1. Go to your Donate page in edit mode
2. Add a **Code Block** at the top
3. Paste the entire contents of: **`DONATE-PART-1-TOP.html`**
4. Click **Apply**

**This includes:**
- Hero section with heading
- Mission statement (501c3 non-profit)
- Impact cards ($100, $500, $1000+ donation levels)
- "Make Your Tax-Deductible Donation" heading

---

### **Step 2: Add Your Donation Method**

Below the first code block, add ONE of the following:

#### **Option A: PayPal Donate Button**
1. Get your PayPal donate button code from PayPal
2. Add a **Code Block**
3. Paste the PayPal button code

#### **Option B: Squarespace Donation Block**
1. Add a **Donate Block** (if available in your plan)
2. Configure amounts and payment options

#### **Option C: Venmo/Zelle/Direct Payment**
1. Add a **Text Block**
2. Include payment information:
   ```
   Donate via Venmo: @DeltaHealing
   Donate via Zelle: info@deltahealingsolutions.org
   Mail checks to: 95 White Sage Avenue, Delta, UT 84624
   ```

#### **Option D: Third-Party Form**
1. Add a **Code Block**
2. Paste embed code from Donorbox, GiveWP, or other donation platform

---

### **Step 3: Add Code Block #2 - Bottom Section**

1. Below your donation form, add another **Code Block**
2. Paste the entire contents of: **`DONATE-PART-2-BOTTOM.html`**
3. Click **Apply**

**This includes:**
- Other ways to support (volunteer, share, partnerships, legacy giving)
- Contact info
- 501(c)(3) tax disclaimer
- Schema markup for SEO

---

## ✅ **Final Page Structure**

Your Donate page should now have **3 sections in this order:**

```
┌─────────────────────────────────────┐
│  CODE BLOCK #1 (TOP)                │
│  - Hero                             │
│  - Mission Statement                │
│  - Impact Cards                     │
│  - Donation Form Heading            │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│  DONATION METHOD                    │
│  - PayPal Button                    │
│  - OR Squarespace Donate Block      │
│  - OR Venmo/Zelle Info              │
│  - OR Third-Party Form              │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│  CODE BLOCK #2 (BOTTOM)             │
│  - Other Ways to Support            │
│  - Contact Info                     │
│  - Tax Disclaimer                   │
│  - Schema Markup                    │
└─────────────────────────────────────┘
```

---

## ⚠️ **Important: Add Your EIN**

In the bottom section, find this line:
```
Tax ID: [Add EIN Here]
```

Replace `[Add EIN Here]` with your **actual 501(c)(3) Tax ID / EIN number**.

Example:
```
Tax ID: 12-3456789
```

This is required for donors to claim tax deductions.

---

## 💡 **Tips**

**PayPal:**
- Use PayPal's Donate Button (not Buy Now)
- Enable "recurring donations" option
- Show preset amounts ($25, $50, $100, $250, custom)

**Venmo/Zelle:**
- Include QR codes for easy mobile donations
- Specify it's for "Delta Healing Solutions - 501c3"

**Mail-in Donations:**
- Provide clear address: 95 White Sage Avenue, Delta, UT 84624
- Specify checks should be made out to: "Delta Healing Solutions"

---

## 🐛 **Troubleshooting**

**Q: Spacing looks off between sections**
- Make sure each code block is properly saved
- Check that you didn't accidentally delete closing `</section>` tags

**Q: Donation button not working**
- Verify PayPal/payment processor code is correct
- Test in an incognito window
- Check that payment account is active

**Q: Page looks different on mobile**
- This is normal - the design is responsive
- Test on actual mobile device to see proper layout

---

## ✅ **All Set!**

Your donate page now has:
- ✅ Professional card-based design
- ✅ Clear mission and impact messaging
- ✅ Flexible donation options
- ✅ Tax-deductible language
- ✅ Multiple ways to support
- ✅ Mobile responsive
- ✅ SEO optimized

**Remember to add your EIN!** 🎉
