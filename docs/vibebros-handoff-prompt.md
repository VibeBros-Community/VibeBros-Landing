# VibeBros Community - AI Agent Handoff Prompt

## 🚀 Purpose
This prompt is designed for AI agents to understand, maintain, and extend the VibeBros Community website design system. Use this before making ANY modifications to ensure consistency.

---

## 📋 Background Context

**Project:** VibeBros Community - Next.js Marketing Website  
**Design Style:** Minimal aesthetic, Discord-inspired dark theme, cinematic scroll animations, 3D components  
**Tech Stack:** Next.js 14+, React 18+, CSS3, Three.js (optional), GSAP (optional)  
**Target Users:** Community members, creators, gamers, tech enthusiasts  
**Browser Support:** Chrome, Firefox, Safari (latest 2 versions), Mobile browsers  

---

## 🎯 Design Principles (ALWAYS FOLLOW)

1. **Dark First** - Use Discord color palette (#1c1d22, #2b2d31, #36393f)
2. **Minimal & Clean** - Remove clutter, maximize whitespace, prioritize content
3. **Cinematic Flow** - Smooth scroll animations, parallax effects, entrance animations
4. **3D Depth** - Subtle shadows, layered components, floating effects
5. **Performance** - Optimize images, compress 3D models, lazy-load heavy assets
6. **Accessible** - WCAG AA contrast ratios, keyboard navigation, focus states
7. **Responsive** - Mobile-first, test at 320px, 768px, 1024px breakpoints
8. **Consistent** - Use design tokens for all values, no hardcoded colors

---

## 🎨 Essential Design Tokens

### Colors (NEVER Hardcode - Always Use Variables)
```css
--color-bg-primary: #1c1d22          (Main background)
--color-bg-secondary: #2b2d31        (Cards, elevated)
--color-bg-tertiary: #36393f         (Hover, interactive)
--color-text-primary: #ffffff        (Main text)
--color-text-secondary: #b5bac1      (Secondary text)
--color-accent-primary: #5865f2      (Blurple - CTAs)
--color-accent-pink: #eb459e         (Highlights)
--color-accent-cyan: #00d4ff         (Glows, accents)
```

### Spacing (Use Consistently)
```css
--space-xs: 4px    --space-sm: 8px    --space-md: 16px
--space-lg: 24px   --space-xl: 32px   --space-2xl: 48px
```

### Animations (Standard Durations & Easing)
```css
--duration-fast: 150ms              (Hovers)
--duration-normal: 250ms            (Standard)
--duration-slow: 400ms              (Large reveals)
--easing-standard: cubic-bezier(0.16, 1, 0.3, 1)
```

---

## 🔧 Critical Implementation Rules

### Rule 1: CSS Organization
✅ **DO:**
- Define all colors as CSS custom properties in `:root {}`
- Group related styles together
- Use semantic class names (BEM optional but recommended)
- Keep animations in `@keyframes` blocks

❌ **DON'T:**
- Hardcode colors directly (e.g., `color: #5865f2;`)
- Use inline styles
- Create duplicate animation definitions
- Mix px with rem without reason

### Rule 2: Scroll Animations
✅ **DO:**
- Add `scroll-section` class to elements that fade in
- Use IntersectionObserver with `threshold: 0.1, rootMargin: '0px 0px -100px 0px'`
- Apply `fadeInUp` animation on scroll visibility
- Use `will-change: transform` for animated elements

❌ **DON'T:**
- Animate without performance testing
- Use `transform` on text elements directly
- Create 100+ simultaneous animations
- Forget GPU acceleration hints

### Rule 3: Responsive Design
✅ **DO:**
- Design mobile-first, then enhance for desktop
- Test at 320px, 768px, 1024px viewports
- Use flexible units (%, em, vw) where appropriate
- Stack elements on mobile, grid on desktop

❌ **DON'T:**
- Hide entire sections on mobile
- Use fixed widths that break at certain sizes
- Forget about landscape mobile views
- Test only on desktop

### Rule 4: 3D Components
✅ **DO:**
- Lazy-load 3D models with `dynamic(() => import(...), { ssr: false })`
- Compress models with Draco (.glb format)
- Host models on CDN with cache headers
- Use placeholder/skeleton during loading
- Optimize polygon count <50k for web

❌ **DON'T:**
- Load 3D on page mount (performance killer)
- Use uncompressed, original model files
- Add complex physics simulations
- Forget about mobile device limitations

### Rule 5: Accessibility (WCAG AA Minimum)
✅ **DO:**
- Verify contrast ratios (text: 4.5:1, large: 3:1)
- Use focus-visible for keyboard navigation
- Add aria-labels to icon buttons
- Support keyboard-only navigation
- Respect `prefers-reduced-motion`

❌ **DON'T:**
- Use color alone to convey information
- Remove focus outlines
- Auto-play audio/video
- Create trap focus or hidden interactive elements
- Ignore screen reader users

---

## 🎬 Component Specifications

### Buttons
**Primary Button:**
- Background: `linear-gradient(135deg, var(--color-accent-primary) 0%, var(--color-accent-pink) 100%)`
- Padding: `12px 16px` (height: 48px minimum)
- Border Radius: `8px`
- Font Weight: `600`
- Hover: `transform: translateY(-3px)`, shadow increases
- Focus: `outline: 2px solid var(--color-accent-primary)`

**Secondary Button:**
- Background: `rgba(88, 101, 242, 0.15)`
- Border: `1px solid rgba(88, 101, 242, 0.3)`
- Color: `var(--color-accent-primary)`
- Hover: Background increases to `0.25` opacity

### Cards
- Background: `rgba(43, 45, 49, 0.4)` with `backdrop-filter: blur(10px)`
- Border: `1px solid rgba(255, 255, 255, 0.1)`
- Border Radius: `12px`
- Padding: `24px`
- Hover: 
  - Background: `rgba(54, 57, 63, 0.6)`
  - Border: `rgba(88, 101, 242, 0.5)`
  - Transform: `translateY(-8px)`

### Badges
- Background: `rgba(88, 101, 242, 0.15)`
- Border: `1px solid rgba(88, 101, 242, 0.3)`
- Color: `var(--color-accent-cyan)`
- Padding: `8px 16px`
- Border Radius: `20px`

---

## 📐 Section-by-Section Guide

### Hero Section
**Content Order:**
1. Badge: "✨ Welcome to VibeBros"
2. H1: "Feel the Vibe. Join the Crew."
3. Subtitle (16px secondary text)
4. Two buttons: Primary + Secondary
5. 3D Container (right desktop, bottom mobile)

**Key Styles:**
- Min height: `100vh`
- Background: Gradient with subtle Blurple glow
- Animation: `fadeInUp` for content, `fadeInScale` for 3D (400ms delay)

### Features Section
**Layout:** 6 cards in responsive grid
```
Grid: repeat(auto-fit, minmax(300px, 1fr))
Gap: 32px
```

**Card Content:**
- Emoji icon (42px)
- H3 Title (18px, 600 weight)
- Description (14px, secondary text)

**Animations:**
- Header: `fadeInUp` 800ms
- Cards: Staggered `fadeInUp` on scroll
- Icons: Continuous `float` 3s ease-in-out

### Community Section
**Layout:** 2 columns (grid: 1fr 1fr)
- Left: Text + Stats
- Right: Floating icons (absolute positioned)

**Stats:**
- 3 stat cards with number + label
- Background: `rgba(88, 101, 242, 0.1)`
- Number color: `var(--color-accent-cyan)`

**Floating Icons:**
- 5 icons, 60px × 60px each
- Animation delays: 0s, 1s, 2s, 1.5s, 0.5s
- Position: absolute with bottom/right/left/top

### CTA Section
**Content:**
- H2 Title (36px)
- Subtitle (16px)
- Primary button centered

**Style:**
- Gradient background: `135deg, rgba(88, 101, 242, 0.1) 0%, rgba(0, 212, 255, 0.05) 100%`
- Text centered
- Animation: `fadeInUp` 800ms

### Footer
**Layout:** Responsive 4-column grid (1 on mobile)
- Section headings: 14px uppercase
- Links: 14px, secondary color
- Link hover: Changes to `var(--color-accent-primary)`
- Copyright: 12px muted text

---

## ⚠️ Common Mistakes to AVOID

### Visual Artifacts
❌ **Blurry text**
- Cause: Animated parent with wrong transform-origin
- Fix: Set `transform-origin: center` and `will-change: transform`

❌ **Flickering animations**
- Cause: Conflicting transforms or repaints
- Fix: Use `transform` not `top/left`, add `contain: layout`

❌ **Misaligned elements**
- Cause: Inconsistent spacing at breakpoints
- Fix: Use consistent spacing tokens, test all breakpoints

❌ **Hard color transitions**
- Cause: No smooth transition defined
- Fix: Add `transition: all 250ms var(--easing-standard)`

### UI Inconsistencies
❌ **Different button styles in same page**
- Fix: Use CSS classes consistently (`.btn--primary`, `.btn--secondary`)

❌ **Mismatched card styling**
- Fix: Define `.card` base class with consistent border, shadow, padding

❌ **Text colors varying**
- Fix: Use `--color-text-primary` (main), `--color-text-secondary` (supporting)

❌ **Hover effects missing**
- Fix: Every interactive element needs `:hover`, `:active`, `:focus-visible`

### Performance Issues
❌ **Large unoptimized images**
- Fix: Use Next.js `<Image>` component, max 200KB per image

❌ **3D models loading slowly**
- Fix: Compress with Draco, lazy-load with `dynamic()`, host on CDN

❌ **Scrolling janky**
- Fix: Avoid animating non-transform properties, use `will-change`, profile with DevTools

❌ **Too many simultaneous animations**
- Fix: Limit to 3-4 per section, stagger with delays

### Accessibility Issues
❌ **Buttons with no focus state**
- Fix: Add `button:focus-visible { outline: 2px solid var(--color-accent-primary); }`

❌ **Low contrast text**
- Fix: Test with WebAIM contrast checker, target 4.5:1 minimum

❌ **No keyboard navigation**
- Fix: Ensure all interactive elements are keyboard accessible, manage focus

❌ **Images missing alt text**
- Fix: Add descriptive alt text to every `<img>` and `<Image>`

---

## 🔍 Quality Assurance Checklist

Before considering ANY task complete, verify:

### Visual Design
- [ ] All colors use CSS variables from design tokens
- [ ] Button hover/active/focus states match spec
- [ ] Card shadows match (0 16px 48px rgba(88, 101, 242, 0.15))
- [ ] Text hierarchy is clear (sizes, weights, colors)
- [ ] Spacing follows token system (no random px values)
- [ ] Gradients match direction and colors exactly
- [ ] Icons are properly aligned and sized
- [ ] No hardcoded colors visible in any CSS

### Animations
- [ ] Scroll animations trigger at correct threshold
- [ ] Animations use standard easing (cubic-bezier(0.16, 1, 0.3, 1))
- [ ] Durations match tokens (fast: 150ms, normal: 250ms, slow: 400ms)
- [ ] No animation flickering or jank
- [ ] GPU acceleration applied (will-change: transform)
- [ ] Animations respect prefers-reduced-motion

### Responsive Design
- [ ] Mobile layout (320px): Single column, centered
- [ ] Tablet layout (768px): 2 columns where appropriate
- [ ] Desktop layout (1024px+): Full design vision
- [ ] No horizontal scrolling on any viewport
- [ ] Touch targets minimum 48px × 48px
- [ ] Images scale without distortion

### Performance
- [ ] Page load time <3 seconds (target)
- [ ] Lighthouse score ≥90 (performance)
- [ ] All images optimized and lazy-loaded
- [ ] No console errors
- [ ] 3D components lazy-loaded
- [ ] No blocking scripts in critical path

### Accessibility
- [ ] Text contrast ≥4.5:1 (WCAG AA)
- [ ] All buttons/links keyboard accessible (Tab works)
- [ ] Focus outlines visible and clear
- [ ] Form inputs have associated labels
- [ ] Images have descriptive alt text
- [ ] No keyboard traps
- [ ] Motion respects prefers-reduced-motion

---

## 🎓 How to Use This Handoff

### For Creating a New Section
1. Reference this document's section specifications
2. Use CSS variables for all values (colors, spacing, animation durations)
3. Apply entrance animation on scroll
4. Test responsive at 3 breakpoints
5. Verify accessibility and performance
6. Update design system if adding new components

### For Modifying Existing Elements
1. Check current styling in globals.css
2. Identify which CSS variable to change
3. Test on all breakpoints
4. Verify animation still works smoothly
5. Check that all dependent components update correctly

### For Adding a New Feature
1. Design it in the style of existing sections
2. Use the 3-tier breakpoint system
3. Create components with proper class names
4. Add all animation keyframes needed
5. Test accessibility before considering done
6. Document in design system for future reference

### For Optimization/Refactoring
1. Maintain visual appearance 100%
2. Update CSS variables consistently
3. Never hardcode values
4. Keep animation logic in keyframes
5. Test thoroughly on real devices
6. Update this document if pattern changes

---

## 📞 Quick Reference Commands

### To add a fade-in scroll animation:
```jsx
<div className="scroll-section">
  Content here
</div>

// In CSS:
.scroll-section {
  opacity: 0;
  transform: translateY(40px);
  transition: all var(--duration-slow) var(--easing-standard);
}

.scroll-section.visible {
  opacity: 1;
  transform: translateY(0);
}
```

### To style a primary button:
```jsx
<button className="btn btn--primary">Click me</button>

// CSS variables handle gradient, shadow, hover automatically
```

### To add a floating icon:
```jsx
<div className="floating-icon" style={{animationDelay: '1s'}}>
  🎮
</div>

// CSS animation handles the float effect
```

### To make a card:
```jsx
<div className="card">
  <div className="card__body">
    Content
  </div>
</div>

// Styling pre-built with proper shadow, border, hover
```

---

## 🚨 Red Flags - Stop & Ask for Help

If you encounter:
1. **Requirement conflicts** - New requirement contradicts design system
2. **Unsupported tech** - Can't implement 3D as specified
3. **Browser compatibility** - Feature doesn't work in target browsers
4. **Performance issues** - Can't meet 90+ Lighthouse score
5. **Accessibility conflicts** - Can't achieve WCAG AA without breaking design
6. **Color palette changes** - Client wants different colors
7. **Animation changes** - Stakeholder wants different scroll effect style

→ **STOP and request clarification** rather than improvise.

---

## 📚 Further Learning Resources

- Design System Document: `vibebros-design-system.md`
- Next.js Image Optimization: https://nextjs.org/docs/app/api-reference/components/image
- Scroll Animations: GSAP ScrollTrigger (docs/examples)
- Three.js 3D Models: https://threejs.org/docs
- Accessibility: WebAIM Contrast Checker, WAVE Browser Extension
- Performance: Chrome DevTools Lighthouse, WebPageTest.org

---

## ✅ Sign-Off Criteria

A task is complete when:
1. ✅ Visually matches design system specification
2. ✅ No hardcoded values (all CSS variables)
3. ✅ Responsive at 320px, 768px, 1024px
4. ✅ Animations smooth (60fps, no jank)
5. ✅ Accessibility verified (WCAG AA)
6. ✅ Performance acceptable (Lighthouse ≥90)
7. ✅ No console errors
8. ✅ Tested on mobile device (not just desktop)
9. ✅ Documentation updated if new pattern
10. ✅ Peer review (if applicable)

---

**Version:** 1.0  
**Last Updated:** January 2026  
**Valid For:** All future VibeBros Community website work  

**Use this handoff before every implementation. Success depends on following these guidelines.**

