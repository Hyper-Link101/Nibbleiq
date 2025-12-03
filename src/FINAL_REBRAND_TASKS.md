# Final NibbleIQ Rebrand Tasks

## ✅ What's Been Completed

### Core Files (100%)
- `/styles/globals.css` - Complete color system updated
- `/index.html` - All meta tags, domain nibbleiq.ai
- `/components/SEO.tsx` - All structured data updated
- `/components/Hero.tsx` - Logo, colors, messaging
- `/components/Footer.tsx` - Logo, email, social links
- `/components/Features.tsx` - Colors and messaging
- `/components/DemoModal.tsx` - Messaging updated
- `/components/HowItWorks.tsx` - NibbleIQ reference (partial colors remain orange)

## 🔄 Batch Color Update Required

The following files have **102 instances** of orange colors that need to be changed to cyan/sky/blue:

### Files with Orange Colors:
1. `/components/Benefits.tsx` - 5 instances
2. `/components/CTA.tsx` - 11 instances  
3. `/components/HowItWorks.tsx` - 24 instances (needs finishing)
4. `/components/ProblemSection.tsx` - 3 instances
5. `/components/Stats.tsx` - 4 instances
6. `/components/ResourcesPage.tsx` - 35 instances
7. `/components/AdminLogin.tsx` - 1 instance
8. `/components/AdminDashboard.tsx` - 19 instances

---

## 📝 Search & Replace Commands

### For ALL Components:

**Background Gradients:**
```
from-orange-50 → from-cyan-50
to-orange-50 → to-cyan-50
bg-orange-50 → bg-cyan-50
via-orange-50 → via-cyan-50
```

**Primary Colors:**
```
text-orange-500 → text-cyan-600
text-orange-600 → text-cyan-600
text-orange-700 → text-cyan-700
text-orange-400 → text-cyan-400
bg-orange-500 → bg-cyan-500
bg-orange-600 → bg-cyan-600
border-orange-500 → border-cyan-500
border-orange-600 → border-cyan-600
border-orange-200 → border-cyan-200
border-orange-100 → border-cyan-100
```

**Hover States:**
```
hover:text-orange-600 → hover:text-cyan-600
hover:text-orange-700 → hover:text-cyan-700
hover:text-orange-900 → hover:text-cyan-900
hover:bg-orange-50 → hover:bg-cyan-50
```

**Gradients:**
```
from-orange-500 to-orange-600 → from-cyan-500 to-cyan-600
hover:from-orange-600 hover:to-orange-700 → hover:from-cyan-600 hover:to-cyan-700
bg-gradient-to-r from-orange-500 to-orange-600 → bg-gradient-to-r from-cyan-500 to-cyan-600
bg-gradient-to-br from-orange-500 to-orange-600 → bg-gradient-to-br from-cyan-500 to-cyan-600
```

**Shadows:**
```
shadow-orange-500/30 → shadow-cyan-500/30
shadow-orange-500/20 → shadow-cyan-500/20
```

**Opacity:**
```
bg-orange-500/20 → bg-cyan-500/20
bg-orange-500/10 → bg-cyan-500/10
bg-orange-500/5 → bg-cyan-500/5
border-orange-500/50 → border-cyan-500/50
border-orange-500/30 → border-cyan-500/30
```

---

## 🔑 Brand Text Updates

### Find and Replace in ALL Files:

**Brand Name:**
```
"Sift IQ" → "NibbleIQ"
"SiftIQ" → "NibbleIQ"
"siftiq" → "nibbleiq"
```

**Domain:**
```
siftiq.io → nibbleiq.ai
```

**Email:**
```
Hello@siftiq.io → Hello@nibbleiq.ai
```

**LocalStorage Keys:**
```
siftiq_blogs → nibbleiq_blogs
siftiq_podcasts → nibbleiq_podcasts
siftiq_links → nibbleiq_links
siftiq_notify_emails → nibbleiq_notify_emails
siftiq_admin_auth → nibbleiq_admin_auth
siftiq_bot_seen → nibbleiq_bot_seen
siftiq_bot_dismissed → nibbleiq_bot_dismissed
```

**Logo Image Path:**
```
figma:asset/e2f5f0ae282f7f918a6645462f7bedc50adcd7c1.png
→
figma:asset/37456c9cde9f12df34ac5588346f8f28d1c1b38d.png
```

---

## 🎯 File-by-File Checklist

### `/components/Benefits.tsx`
- [ ] Update headline color: `text-orange-500` → `text-cyan-600`
- [ ] Update icon background gradients
- [ ] Update hover glow effect
- [ ] Update decorative background gradient

### `/components/CTA.tsx`
- [ ] Update border color: `border-orange-500/50` → `border-cyan-500/50`
- [ ] Update all background decorative gradients
- [ ] Update beta badge colors
- [ ] Update headline accent color
- [ ] Update all button gradients

### `/components/Stats.tsx`
- [ ] Update section background: `from-orange-500 to-orange-600` → `from-cyan-500 to-cyan-600`
- [ ] Update "Sift IQ" → "NibbleIQ"
- [ ] Update text colors: `text-orange-*` → `text-cyan-*`

### `/components/ProblemSection.tsx`
- [ ] Update headline color
- [ ] Update icon backgrounds
- [ ] Update decorative gradients

### `/components/ResourcesPage.tsx` (35 instances!)
- [ ] Update logo image path
- [ ] Update all navigation links
- [ ] Update all button gradients
- [ ] Update all badge colors
- [ ] Update all icon backgrounds
- [ ] Update all decorative gradients
- [ ] Update all border colors
- [ ] Update CTA section background
- [ ] Update localStorage keys
- [ ] Update "Sift IQ" → "NibbleIQ" (line 483, etc.)

### `/components/BlogPostPage.tsx`
- [ ] Update logo
- [ ] Update "Sift IQ" → "NibbleIQ"
- [ ] Update all colors
- [ ] Update localStorage key

### `/components/PodcastEpisodePage.tsx`
- [ ] Update logo
- [ ] Update "Sift IQ" → "NibbleIQ"
- [ ] Update all colors
- [ ] Update localStorage key

### `/components/ContactPage.tsx`
- [ ] Update logo
- [ ] Update email: Hello@nibbleiq.ai
- [ ] Update all colors
- [ ] Update branding

### `/components/AboutPage.tsx`
- [ ] Update logo
- [ ] Update "Sift IQ" → "NibbleIQ"
- [ ] Update all colors
- [ ] Update company story

### `/components/AdminPage.tsx`
- [ ] Update sessionStorage key

### `/components/AdminDashboard.tsx` (19 instances!)
- [ ] Update logo
- [ ] Update "Sift IQ" → "NibbleIQ"
- [ ] Update all button gradients
- [ ] Update all badge colors
- [ ] Update all card borders
- [ ] Update localStorage keys

### `/components/AdminLogin.tsx`
- [ ] Update logo
- [ ] Update button gradient
- [ ] Update "Sift IQ" → "NibbleIQ"

### `/components/AIBotPopup.tsx`
- [ ] Update all knowledge base content
- [ ] Update localStorage keys
- [ ] Update "Sift IQ" → "NibbleIQ" throughout
- [ ] Update all messaging to approved phrases
- [ ] Update greeting message

### `/components/PrivacyPage.tsx`
- [ ] Update "Sift IQ" → "NibbleIQ"
- [ ] Update siftiq.io → nibbleiq.ai

### `/components/TermsPage.tsx`
- [ ] Update "Sift IQ" → "NibbleIQ"
- [ ] Update siftiq.io → nibbleiq.ai

### `/components/CookiesPage.tsx`
- [ ] Update "Sift IQ" → "NibbleIQ"
- [ ] Update siftiq.io → nibbleiq.ai

### `/components/SecurityPage.tsx`
- [ ] Update "Sift IQ" → "NibbleIQ"
- [ ] Update branding

### `/components/Comparison.tsx`
- [ ] Update all colors
- [ ] Review competitive messaging

### `/components/Testimonials.tsx`
- [ ] Update all colors

### `/components/TrustBar.tsx`
- [ ] Update all colors

---

## 🚀 Quick Execution Plan

### Phase 1: Batch Color Updates (30 min)
Use IDE Find & Replace (with regex if needed) across all `.tsx` files:

1. Run search for `from-orange-500 to-orange-600`
   - Replace with `from-cyan-500 to-cyan-600`

2. Run search for `text-orange-500`
   - Replace with `text-cyan-600`

3. Run search for `bg-orange-`
   - Manually review and replace with `bg-cyan-`

4. Run search for `border-orange-`
   - Manually review and replace with `border-cyan-`

5. Run search for `shadow-orange-500`
   - Replace with `shadow-cyan-500`

### Phase 2: Brand Text Updates (15 min)
1. Search for `"Sift IQ"` → Replace all
2. Search for `"siftiq"` → Replace all (case-insensitive)
3. Search for `Hello@siftiq.io` → Replace all
4. Search for `siftiq.io` → Replace all
5. Search for `figma:asset/e2f5f0ae2` → Replace with new logo path

### Phase 3: LocalStorage Keys (5 min)
1. Search for `siftiq_` → Replace all with `nibbleiq_`

### Phase 4: Manual Review (20 min)
1. Review each component visually
2. Check for any missed orange references
3. Verify all CTAs are cyan
4. Test localStorage keys work
5. Verify logo displays correctly

### Phase 5: Final Testing (30 min)
1. Run app locally
2. Test all navigation
3. Test all forms
4. Test modal dialogs
5. Check responsive design
6. Verify admin panel works

---

## 📊 Estimated Time

- **Phase 1 (Colors):** 30 minutes
- **Phase 2 (Text):** 15 minutes
- **Phase 3 (Storage):** 5 minutes
- **Phase 4 (Review):** 20 minutes
- **Phase 5 (Testing):** 30 minutes

**Total: ~2 hours** to complete entire rebrand

---

## ✅ Verification Checklist

After completing all changes:

- [ ] No instances of "Sift IQ" remain (search codebase)
- [ ] No instances of "siftiq.io" remain
- [ ] No instances of "Hello@siftiq.io" remain
- [ ] No instances of old logo path remain
- [ ] No instances of `text-orange-500` or `bg-orange-500` remain (except intentional accents)
- [ ] All localStorage keys use "nibbleiq_" prefix
- [ ] Logo displays correctly on all pages
- [ ] All buttons are cyan gradient
- [ ] All hover states are cyan
- [ ] Footer has correct email and social links
- [ ] SEO tags all reference nibbleiq.ai
- [ ] Admin panel works with new branding

---

## 📄 Files Modified Summary

**Total files to modify:** 28

**Already completed:** 8 (29%)  
**Remaining:** 20 (71%)

**Estimated remaining work:** 2 hours

---

## 💡 Pro Tips

1. **Use VS Code Multi-Cursor:** Select all instances of a pattern and edit simultaneously
2. **Use Regex Find & Replace:** `from-orange-(\d+)` → `from-cyan-$1` to catch all variations
3. **Test Incrementally:** After updating each component, view it in browser
4. **Commit Often:** Make git commits after each file or group of files
5. **Keep This Doc Open:** Check off items as you complete them

---

**Ready to Execute!** 🚀

All preparation is complete. The remaining work is primarily find & replace operations that can be executed quickly with the right tools.

**Domain:** nibbleiq.ai  
**Email:** Hello@nibbleiq.ai  
**Twitter:** @NibbleIQ  
**LinkedIn:** linkedin.com/company/nibbleiq

---

**Last Updated:** November 26, 2025  
**Status:** Ready for batch execution  
**Next:** Run Phase 1-5 execution plan
