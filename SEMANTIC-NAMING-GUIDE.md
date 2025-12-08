# Semantic Naming Guide

This document provides a complete reference for all semantic class names and data attributes used throughout the site for easy identification of blocks and components.

## Structure

All major sections use:
- **Semantic class names** (e.g., `.hero-section`, `.news-section`)
- **Data attributes** for identification:
  - `data-page` - Page identifier
  - `data-section` - Section identifier
  - `data-component` - Component identifier
  - `data-element` - Specific element identifier

---

## 🏠 Home Page (`app/pages/index.vue`)

```html
<div data-page="home">
  <HeroSection data-section="hero" />
  <NewsSection data-section="news" />
  <StatsSection data-section="stats" />
  <MapSection data-section="map" />
  <ContactsSection data-section="contacts" />
</div>
```

---

## 🎯 Components

### Header (`app/components/AppHeader.vue`)
```html
<header class="site-header" data-component="header">
  <div class="header-wrapper">
    <a class="site-logo" data-element="logo"></a>
    <nav class="desktop-nav" data-element="navigation">
      <div class="nav-dropdown" data-dropdown="specialist"></div>
    </nav>
    <button class="mobile-menu-toggle" data-element="mobile-toggle"></button>
  </div>
  <div class="mobile-menu" data-element="mobile-menu"></div>
</header>
```

### Footer (`app/components/AppFooter.vue`)
```html
<footer class="site-footer" data-component="footer"></footer>
```

### Home Sections
- **HeroSection**: `.hero-section` `data-component="hero"`
- **NewsSection**: `.news-section` `data-component="news"`
- **StatsSection**: `.stats-section` `data-component="stats"`
- **MapSection**: `.map-section` `data-component="map"`
- **ContactsSection**: `.contacts-section` `data-component="contacts"`

---

## 📄 Specialist Pages

### Main Specialist Page (`app/pages/specialist/index.vue`)

```html
<div data-page="specialist">
  <section class="specialist-hero" data-section="hero"></section>
  <section class="specialist-description" data-section="description"></section>
  <section class="specialist-resources" data-section="resources">
    <div class="specialist-cards">
      <a class="resource-card" data-resource="law"></a>
      <a class="resource-card" data-resource="experts"></a>
      <a class="resource-card" data-resource="expeditions"></a>
    </div>
  </section>
  <section class="specialist-stats" data-section="stats"></section>
</div>
```

### Legal Practice Page (`app/pages/law.vue`)

```html
<div data-page="law">
  <section class="law-hero" data-section="hero"></section>
  <section class="law-content" data-section="content">
    <div class="law-examples" data-section="examples"></div>
    <div class="law-contact" data-section="contact"></div>
  </section>
  <section class="law-navigation" data-section="navigation"></section>
</div>
```

### Experts Page (`app/pages/experts.vue`)

```html
<div data-page="experts">
  <section class="experts-hero" data-section="hero"></section>
  <section class="experts-content" data-section="content">
    <div class="experts-grid" data-section="experts-list">
      <div class="expert-card" data-expert="shubnitsyna"></div>
      <div class="expert-card" data-expert="kulebyakina"></div>
      <div class="expert-card" data-expert="karpachev"></div>
      <div class="expert-card" data-expert="mamontov"></div>
      <div class="expert-card" data-expert="zheltukhin"></div>
      <div class="expert-card" data-expert="khokhryakov"></div>
    </div>
    <div class="experts-cta" data-section="cta"></div>
  </section>
  <section class="experts-navigation" data-section="navigation"></section>
</div>
```

### Expeditions Page (`app/pages/eco-expeditions.vue`)

```html
<div data-page="eco-expeditions">
  <section class="expeditions-hero" data-section="hero"></section>
  <section class="expeditions-content" data-section="content">
    <div class="expeditions-documents" data-section="documents"></div>
    <div class="expeditions-info" data-section="info">
      <div class="info-card" data-info="target-audience"></div>
      <div class="info-card" data-info="conditions"></div>
    </div>
    <div class="expeditions-cta" data-section="cta"></div>
  </section>
  <section class="expeditions-navigation" data-section="navigation"></section>
</div>
```

---

## 🎨 CSS Selectors Examples

You can now easily target specific blocks:

```css
/* Target specific pages */
[data-page="home"] { }
[data-page="law"] { }
[data-page="experts"] { }

/* Target specific sections */
[data-section="hero"] { }
[data-section="content"] { }
[data-section="navigation"] { }

/* Target specific components */
[data-component="header"] { }
[data-component="footer"] { }
[data-component="news"] { }

/* Target specific elements */
.site-logo { }
.desktop-nav { }
.mobile-menu { }
.resource-card { }
.expert-card { }

/* Target specific experts */
[data-expert="shubnitsyna"] { }
[data-expert="karpachev"] { }

/* Target specific dropdowns */
[data-dropdown="specialist"] { }

/* Target specific info cards */
[data-info="target-audience"] { }
[data-info="conditions"] { }
```

---

## 📱 JavaScript Selectors Examples

```javascript
// Select by page
document.querySelector('[data-page="home"]')

// Select by section
document.querySelectorAll('[data-section="hero"]')

// Select by component
document.querySelector('[data-component="header"]')

// Select specific expert
document.querySelector('[data-expert="mamontov"]')

// Select all resource cards
document.querySelectorAll('.resource-card')

// Select all expert cards
document.querySelectorAll('.expert-card')
```

---

## 🔍 Browser DevTools

You can now easily find elements in the browser:
1. Open DevTools (F12)
2. Use Ctrl+F in Elements tab
3. Search for:
   - `data-page="law"` - Find law page
   - `data-section="hero"` - Find all hero sections
   - `data-component="header"` - Find header
   - `.expert-card` - Find all expert cards

---

## 📝 Naming Conventions

### Pattern: `{page-name}-{element-type}`

**Pages:**
- `home-page`
- `specialist-page`
- `law-page`
- `experts-page`
- `eco-expeditions-page`

**Sections:**
- `{page}-hero` - Hero/banner section
- `{page}-content` - Main content section
- `{page}-navigation` - Navigation/breadcrumb section
- `{page}-cta` - Call-to-action section

**Components:**
- `site-header` - Main header
- `site-footer` - Main footer
- `site-logo` - Logo link
- `desktop-nav` - Desktop navigation
- `mobile-menu` - Mobile menu
- `resource-card` - Resource link card
- `expert-card` - Expert profile card
- `info-card` - Information card

---

## ✅ Benefits

1. **Easy Navigation** - Quickly find elements in DevTools
2. **CSS Targeting** - Precise styling with semantic selectors
3. **JavaScript** - Simple DOM manipulation
4. **Testing** - Reliable selectors for automated tests
5. **Maintenance** - Clear structure for future developers
6. **Documentation** - Self-documenting code structure

