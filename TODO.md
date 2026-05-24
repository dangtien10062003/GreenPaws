# GreenPaws Enhancement TODO

## Status: 0/15 completed (0%)

Current Plan is approved. Breakdown into steps:

1. ✅ [Complete] Inventory and confirm all pages/components exist and are feature-complete based on spec:
   - Home: Hero, About preview, Services 4-card hover, Testimonials carousel ✅ (existing), Before/After slider ❌ (missing)
   - About: History/Vision/Mission, 3 core values, Stats counter, 6 why-choose-us reasons ❌ (partial)
   - Services grid/full list + add-ons ❌ (partial)
   - Service detail: Hero, Process 4-6 steps, S/M/L pricing, Related gallery ✅ (existing)
   - Pricing: Basic/Premium/VIP comparison, Membership benefits, FAQ ❌ (partial)
   - Team: 4 experts w/ certs, detail, achievements ✅ (existing)
   - Gallery: Filterable, lightbox/video, social feed ✅ (existing)
   - Blog: Featured, grid, search/categories ❌ (need check)
   - Contact: Info hub, advanced form, Google Maps ❌ (need check)
   - Booking: 3-step w/ Pet info localStorage, service/staff, calendar conflict + OTP/email ❌ (partial)
   - Shared: SEO.jsx, ScrollToTop.jsx ❌ (missing)
   - Gaps: BeforeAfterSlider, SEO/Helmet, Booking real-time/OTP, Blog/Contact pages to verify, AOS setup?, Lazy/WebP images.

2. ☐ Implement missing components:
   - Create `src/components/shared/BeforeAfterSlider.jsx`
   - Create `src/components/shared/SEO.jsx` (React Helmet)
   - Create `src/components/shared/ScrollToTop.jsx`
   - Create `src/components/shared/SkeletonLoading.jsx` (if missing)

3. ☐ Add BeforeAfterSlider to HomePage.jsx (between ServicesSection and TestimonialsSection)

4. ☐ Wrap all pages with SEO.jsx (update each page.jsx)

5. ☐ Upgrade BookingPage.jsx:
   - Pet info localStorage prefill/persistence
   - Real-time calendar conflict check (mock or basic)
   - OTP/email confirm (UI stub)

6. ☐ Check/update AboutSection.jsx for 3 core values + 6 why-choose-us

7. ☐ Update PricingSection.jsx for FAQ + Membership details

8. ☐ Verify/implement BlogPage.jsx + BlogDetailPage.jsx

9. ☐ Verify/implement ContactPage.jsx + ContactSection.jsx (Google Maps)

10. ☐ Add ScrollToTop to App.jsx

11. ☐ Optimize images (add lazy + WebP where possible)

12. ☐ Confirm/enhance Header.jsx (sticky glassmorphism + LanguageSwitcher + Book Now)

13. ☐ Confirm Footer.jsx (4 columns + Newsletter + Social + Trust Badges)

14. ☐ Test all routes/features (language toggle, responsive, animations)

15. ☐ Finalize: run dev server, check perf, attempt_completion

