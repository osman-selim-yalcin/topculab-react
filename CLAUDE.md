# MiS Lab Site — Design System

This file documents the visual conventions extracted from `src/pages/People.tsx` and `src/pages/Research.tsx`. **Match these patterns for any new section or page so the site stays one system.** When in doubt, open one of those two files and copy the structure.

---

## 1. Page chassis

Every page is a single `<section>`:

```tsx
<section className="container mx-auto px-4 pb-16 md:pb-24">
  ...
</section>
```

- `container mx-auto px-4` — horizontal layout (always).
- `pb-16 md:pb-24` — bottom breathing room before the footer (always, on every route).
- Don't add a max-width; the global container handles it.

## 2. Page header (h2 + divider)

The top of every page uses the same identifier block — never replace with a hero or eyebrow:

```tsx
<header className="mb-8">
  <h2 className="text-3xl font-semibold tracking-tight flex flex-col items-center">
    {t("page_key", lang)}
    <div className="mt-3 h-[2px] w-48 bg-neutral-200" />
  </h2>
</header>
```

- Always `text-3xl`, never larger.
- The 192px gray divider is the page-title signature — keep it.
- No subtitle, no eyebrow, no intro paragraph above this header.

## 3. Section subheaders (within a page)

Two variants, both centered:

**Long divider variant** (Principal Investigator, Research Assistants, Members):
```tsx
<h3 className="text-center text-2xl font-semibold mb-8">{t("...")}</h3>
```

**Short divider variant** (Current Collaborators):
```tsx
<h3 className="text-center text-2xl font-semibold mb-2">{t("...")}</h3>
<div className="mx-auto h-[2px] w-16 bg-neutral-200 mb-8" />
```

Use the short-divider variant when the section feels like a coda or supporting block; the long-divider variant for primary blocks.

## 4. Card system — three variants only

### 4a. Standard card (`rounded-2xl`)
Used for the PI block and any plain content card:
```tsx
<article className="rounded-2xl border border-neutral-200 bg-white shadow-sm p-5 md:p-6">
  ...
</article>
```

### 4b. Showcase card (`rounded-3xl`, asymmetric)
Used for Research Assistants and the four Research areas. **Two articles next to each other alternate sides.**
```tsx
<article className="group relative overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm hover:shadow-md transition">
  <div className={`flex flex-col ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-stretch`}>
    {/* Image column */}
    <div className="relative md:w-[280px] md:shrink-0">
      <div className="aspect-[4/5] md:aspect-auto md:h-full overflow-hidden bg-neutral-100">
        <img src={...} alt={...} className="w-full h-full object-cover" loading="lazy" decoding="async" />
      </div>
    </div>
    {/* Content column */}
    <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
      <h4 className="text-2xl font-semibold tracking-tight text-neutral-900">{title}</h4>
      <div className="mt-3 h-px w-12 bg-neutral-300" />
      <p className="mt-4 text-neutral-700 leading-relaxed text-[15px]">{body}</p>
    </div>
  </div>
</article>
```

Rules:
- Image is **always** `md:w-[280px]`. Don't make it bigger or smaller.
- Image is `aspect-[4/5]` on mobile, `md:h-full` on desktop, always `object-cover`.
- Title is `text-2xl`, divider is `h-px w-12 bg-neutral-300`, body is `text-[15px] text-neutral-700 leading-relaxed`.
- **Do not add gradient accent strips, ribbons, "01 / 04" meta tags, or eyebrows above the title.** They were tried and removed.
- A full-width add-on (e.g. the `Publications` block on Research) goes **after** the inner flex row, separated by `border-t border-neutral-200`.

### 4c. Tile card (square, in a grid)
Used for Members:
```tsx
<div className="group rounded-2xl border border-neutral-200 bg-white shadow-sm hover:shadow-md transition p-4 text-center flex flex-col">
  <div className="w-full overflow-hidden rounded-2xl shadow">
    <img className="w-full h-full object-cover aspect-square" loading="lazy" decoding="async" />
  </div>
  <h5 className="font-semibold tracking-tight mt-3">{name}</h5>
  <p className="text-sm text-neutral-600">{caption}</p>
</div>
```

- Always `aspect-square` for member-style tiles. Mixed aspect ratios across tiles is a regression — don't ship that.

### 4d. Compact list card (Collaborators)
```tsx
<article className="group relative flex items-start gap-4 rounded-2xl border border-neutral-200 bg-white p-5 transition hover:border-neutral-400 hover:shadow-md">
  {/* avatar with initials */}
  <div className="shrink-0 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-neutral-100 to-neutral-200 text-sm font-semibold text-neutral-700 ring-1 ring-neutral-200/70">
    {getInitials(name)}
  </div>
  <div className="min-w-0 flex-1">
    <h4 className="font-semibold tracking-tight text-neutral-900">{name}</h4>
    <p className="mt-0.5 text-sm leading-snug text-neutral-600">{institution}</p>
  </div>
  <span className="shrink-0 inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wider text-neutral-600">
    {country}
  </span>
</article>
```

## 5. Typography scale

| Role | Classes |
|---|---|
| Page title (h2) | `text-3xl font-semibold tracking-tight` |
| Section subhead (h3) | `text-2xl font-semibold` (centered) |
| Card title (h4) | `text-2xl font-semibold tracking-tight text-neutral-900` |
| Tile name (h5) | `font-semibold tracking-tight` |
| Body | `text-[15px] text-neutral-700 leading-relaxed` |
| Caption / meta | `text-sm text-neutral-600` |
| Micro label | `text-[11px] uppercase tracking-[0.22em] font-semibold text-neutral-700` |
| Mono index token | `text-[10px] font-mono font-semibold tracking-wider` |

Bold inside body copy emphasizes a name (e.g. `<b>Topçu, M. N.</b>`). Style with `[&_b]:text-neutral-900 [&_b]:font-semibold` if needed.

## 6. Color palette

Use these only — don't introduce new neutrals or accents.

| Use | Token |
|---|---|
| Card background | `bg-white` |
| Page background | inherits (white) |
| Subtle hover bg | `bg-neutral-50` |
| Card border | `border-neutral-200` |
| Hover border | `border-neutral-400` |
| Hairline divider | `bg-neutral-200` (page) / `bg-neutral-300` (card title) |
| Body text | `text-neutral-700` |
| Heading text | `text-neutral-900` |
| Muted text | `text-neutral-600` / `text-neutral-500` (uppercase labels) |
| Outline glyphs | `text-neutral-400` |

**No purple gradients. No tinted card backgrounds. No colored accent strips on cards** (the gradient ribbon previously on RA / Research cards was removed — don't add it back).

The single permitted color accent is `text-blue-700` for inline article links inside body copy, with `decoration-blue-200`. External-resource buttons use the neutral inverting circle (see §7c).

## 7. Interactive primitives

### 7a. Hover transition (cards)
```
hover:shadow-md transition
```
Plus `hover:border-neutral-400` on the compact list card variant. That's it — no scale, no lift, no rotation.

### 7b. Toggle button (collapse trigger)
The `+` glyph that rotates 45° on open. Match this exactly across any future collapsibles:
```tsx
<button className="group inline-flex items-center gap-3 cursor-pointer focus:outline-none">
  <span className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-neutral-300 text-neutral-700 group-hover:border-neutral-900 group-hover:bg-neutral-900 group-hover:text-white transition duration-300">
    <svg className={`w-3.5 h-3.5 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${open ? "rotate-45" : ""}`} ...>
      <path d="M10 4v12M4 10h12" />
    </svg>
  </span>
  <span className="text-[11px] uppercase tracking-[0.22em] font-semibold text-neutral-700 group-hover:text-neutral-900">
    {label}<span className="ml-2 font-normal tracking-normal normal-case text-neutral-400">({count})</span>
  </span>
</button>
```

### 7c. External link chip (`DocLink`)
Small inverting circle, sits inline with body text:
```tsx
<a className="inline-flex items-center justify-center h-6 w-6 rounded-full border border-neutral-300 text-neutral-600 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition align-middle ml-1">
  <LaunchIcon sx={{ fontSize: 12 }} />
</a>
```

### 7d. Round social/contact icons (`IconLink`)
```tsx
className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-700 shadow-sm hover:bg-neutral-900 hover:text-white transition"
```

## 8. Animations

- **Default transition**: `transition` (Tailwind default, ~150ms). Use for color/border swaps.
- **Refined transition**: `transition duration-300` for hover surfaces, `duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]` for content reveals.
- **Expand/collapse**: use the grid-rows trick — never `max-height`. Pattern:

```tsx
<div className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
  <div className="overflow-hidden">
    <div className="pt-6">{/* content with padding inside, never margin outside */}</div>
  </div>
</div>
```

`max-height: 2400px` was tried and felt janky (snap then drift). Don't bring it back.

## 9. List items inside cards (numbered)

Used in `Research.tsx` `PubItem`. Reuse for any future numbered list.

```tsx
<li className="group relative flex gap-4 -mx-2 px-2 py-3.5 rounded-xl transition-colors duration-300 hover:bg-neutral-50">
  <span aria-hidden className="absolute left-0 top-4 bottom-4 w-[2px] rounded-full bg-gradient-to-b from-neutral-900 to-neutral-400 scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] origin-top" />
  <span className="flex-shrink-0 mt-0.5 inline-flex items-center justify-center h-7 w-7 rounded-full border border-neutral-300 bg-white text-[10px] font-mono font-semibold tracking-wider text-neutral-600 group-hover:border-neutral-900 group-hover:bg-neutral-900 group-hover:text-white transition duration-300">
    {String(index).padStart(2, "0")}
  </span>
  <p className="flex-1 text-[14.5px] leading-[1.7] text-neutral-700 pt-0.5 [&_b]:text-neutral-900 [&_b]:font-semibold">
    {children}
  </p>
</li>
```

The hover-reveal accent bar on the left (scale-y from 0 → 100) is the only allowed "decoration on hover."

## 10. Images

- **Always** `loading="lazy" decoding="async"` on every `<img>` except the hero LCP image.
- Hero LCP images get `fetchpriority="high"` + a `<link rel="preload">` in `index.html`.
- Person/showcase photos: `aspect-[4/5]` on mobile, fill height on desktop, `object-cover`.
- Member tiles: `aspect-square object-cover`.
- All static images live in `public/static/` and have been pre-optimized with `sips`. New uploads should be re-encoded to JPEG ~85 quality at a sensible max width before committing.

## 11. i18n & document meta

- Language state: `const [lang] = useLang();`
- Strings: `t("key", lang)` — add new keys to **both** `en` and `tr` blocks in `src/i18/i18n.ts`.
- Inline `lang === "tr" ? "..." : "..."` is acceptable **only** for tiny one-off labels (e.g. button captions). Anything user-facing and reusable goes through `t()`.
- Every page calls `useDocumentMeta({ title, description })` for SEO. Title format: `${t("page_key", lang)} - MiS Lab`. Description must exist in both languages.

## 12. Things that have been explicitly removed — don't add them back

- Gradient accent strips on showcase cards (vertical `bg-gradient-to-b` ribbons on the leading edge).
- "01 — Area 1 / 04" or any chapter-numbering meta tag above card titles.
- "Four Intersecting Areas of Inquiry" / similar editorial eyebrows above the page header.
- Page hero variants with `text-5xl`/`text-6xl` titles. Keep `text-3xl`.
- `max-height` based collapse animations.
- Inner header labels inside the showcase card (e.g. an "Araştırma Asistanları" pill repeated inside each RA card).

## 13. Hard rules

- **Never use emojis** anywhere in code, comments, or rendered UI unless the user explicitly asks.
- **Never write JSDoc/multi-line comment blocks**. Prefer no comment over a `// what` comment.
- New translation keys must land in **both** `en` and `tr`. Country names get a `country` + `countryTr` pair.
- Routes are added in `src/App.tsx`, the nav links in `src/components/Header.tsx` (desktop + mobile), and the page itself in `src/pages/`. All three are required for any new route.
- Run `npm run build` before considering a change done — TypeScript errors must be zero.
- Image aspect ratios within a single grid section must be uniform. Mixed sizes is a visual bug.
