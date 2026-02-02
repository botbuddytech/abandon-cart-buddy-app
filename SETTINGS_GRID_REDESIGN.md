# Settings Page - Grid-Based Redesign

## ✨ Complete Redesign to Match Dashboard & Bot Interactions

The Settings page has been completely redesigned to match the **grid-based layout** and **Shopify Polaris card style** used in the Dashboard and Bot Interactions pages.

---

## 🎯 Design Consistency

### Matching Dashboard & Bot Interactions Pages

The new design follows the exact same patterns:

1. **`<s-box>` Cards** - Each section wrapped in Polaris box with:
   - `padding="large"`
   - `borderWidth="base"`
   - `borderRadius="base"`
   - `background="subdued"`

2. **`<s-stack>` Layout** - Using `direction="block"` and `gap="large"`

3. **`<s-heading>` Section Titles** - Consistent heading style

4. **Grid Layouts** - Using CSS Grid with `repeat(auto-fit, minmax(...))`

5. **`<s-text tone="subdued">` Labels** - Consistent label styling

---

## 📐 Grid Structure

### Bot Configuration Card
```css
gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))"
```
- **2-column grid** on desktop (Bot Name | Fallback Action)
- **Full-width** Phone Message Script textarea
- **Checkbox** with nested Max Retry Attempts

### Call Timing Card
```css
gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))"
```
- **3-column grid** on desktop (Call Delay | Call Window | Timezone)
- Responsive: stacks on smaller screens

### Discount Offers Card
```css
gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))"
```
- **Checkbox toggle** for enabling discounts
- **3-column grid** when enabled (Type | Value | Code)

### Notifications Card
```css
gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))"
```
- **2-column grid** (Email Notifications | SMS Notifications)
- Conditional email input nested under checkbox

---

## 🎨 Visual Layout

```
┌─────────────────────────────────────────────────────────┐
│  Settings                                               │
│                                                         │
│  ┌───────────────────────────────────────────────────┐ │
│  │  Bot Configuration                                │ │
│  │  ┌──────────────────┬──────────────────┐          │ │
│  │  │  Bot Name        │  Fallback Action │          │ │
│  │  │  [input]         │  [dropdown]      │          │ │
│  │  └──────────────────┴──────────────────┘          │ │
│  │  ┌──────────────────────────────────────┐         │ │
│  │  │  Phone Message Script                │         │ │
│  │  │  [textarea - full width]             │         │ │
│  │  └──────────────────────────────────────┘         │ │
│  │  ☑ Retry on No Response                          │ │
│  │    Max Retry Attempts [input]                    │ │
│  └───────────────────────────────────────────────────┘ │
│                                                         │
│  ┌───────────────────────────────────────────────────┐ │
│  │  Call Timing                                      │ │
│  │  ┌────────────┬────────────┬────────────┐         │ │
│  │  │ Call Delay │ Call Window│  Timezone  │         │ │
│  │  │  [input]   │  [input]   │ [dropdown] │         │ │
│  │  └────────────┴────────────┴────────────┘         │ │
│  └───────────────────────────────────────────────────┘ │
│                                                         │
│  ┌───────────────────────────────────────────────────┐ │
│  │  Discount Offers                                  │ │
│  │  ☑ Enable Automatic Discount Offers              │ │
│  │  ┌────────────┬────────────┬────────────┐         │ │
│  │  │   Type     │   Value    │    Code    │         │ │
│  │  │ [dropdown] │  [input]   │  [input]   │         │ │
│  │  └────────────┴────────────┴────────────┘         │ │
│  └───────────────────────────────────────────────────┘ │
│                                                         │
│  ┌───────────────────────────────────────────────────┐ │
│  │  Notifications                                    │ │
│  │  ┌──────────────────┬──────────────────┐          │ │
│  │  │ ☑ Email Notif.   │ ☐ SMS Notif.     │          │ │
│  │  │   [email input]  │                  │          │ │
│  │  └──────────────────┴──────────────────┘          │ │
│  └───────────────────────────────────────────────────┘ │
│                                                         │
│  [💾 Save Settings] [🎧 Preview] [🔄 Reset]            │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## 🔧 Key Components Used

### Shopify Polaris Elements

1. **`<s-page>`** - Page container with heading
2. **`<s-section>`** - Section wrapper for spacing
3. **`<s-box>`** - Card container with border and background
4. **`<s-stack>`** - Vertical stacking with gaps
5. **`<s-heading>`** - Section titles
6. **`<s-text>`** - Labels and help text with `tone="subdued"`
7. **`<s-button>`** - Action buttons with variants
8. **`<s-badge>`** - (used in Dashboard for consistency)

### Native HTML Elements

- `<input>` - Text, number, email inputs
- `<textarea>` - Phone script input
- `<select>` - Dropdown menus
- `<label>` - Checkbox labels
- `<div>` - Grid containers

---

## 📊 Grid Breakpoints

All grids use `auto-fit` with `minmax()` for responsive behavior:

| Section | Min Width | Columns (Desktop) | Columns (Mobile) |
|---------|-----------|-------------------|------------------|
| Bot Configuration | 300px | 2 | 1 |
| Call Timing | 250px | 3 | 1 |
| Discount Offers | 250px | 3 | 1 |
| Notifications | 300px | 2 | 1 |

---

## ✅ Consistency Checklist

✅ **Same Card Style** - Matches Dashboard KPI cards  
✅ **Same Grid Pattern** - Uses `repeat(auto-fit, minmax(...))`  
✅ **Same Spacing** - 16px gap between grid items  
✅ **Same Polaris Components** - `<s-box>`, `<s-stack>`, `<s-heading>`  
✅ **Same Label Style** - `<s-text tone="subdued">`  
✅ **Same Input Style** - Consistent padding, border, radius  
✅ **Same Button Style** - `<s-button>` with variants  
✅ **Responsive** - Auto-stacking on smaller screens  

---

## 🎨 Before vs After

| Aspect | Before (Minimalist) | After (Grid-Based) |
|--------|---------------------|-------------------|
| **Layout** | Centered 900px | Full-width sections |
| **Cards** | No cards, dividers only | Polaris `<s-box>` cards |
| **Sections** | Plain divs | `<s-section>` + `<s-box>` |
| **Labels** | Custom styled spans | `<s-text tone="subdued">` |
| **Titles** | Custom styled divs | `<s-heading>` |
| **Grid** | Flexbox columns | CSS Grid with auto-fit |
| **Consistency** | Unique style | Matches Dashboard/Bot pages |
| **Polaris Usage** | Minimal | Full Polaris components |

---

## 🚀 Benefits

✅ **Visual Consistency** - All pages now look cohesive  
✅ **Shopify Native** - Uses official Polaris components  
✅ **Professional** - Matches Shopify admin aesthetic  
✅ **Responsive** - Grids auto-stack on mobile  
✅ **Maintainable** - Standard Polaris patterns  
✅ **Accessible** - Polaris components have built-in a11y  
✅ **Scalable** - Easy to add more fields to grids  

---

## 📝 Code Example

```tsx
<s-section>
  <s-box
    padding="large"
    borderWidth="base"
    borderRadius="base"
    background="subdued"
  >
    <s-stack direction="block" gap="large">
      <s-heading>Call Timing</s-heading>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "16px",
        }}
      >
        <div>
          <s-text tone="subdued">Call Delay (minutes)</s-text>
          <input {...} />
        </div>
        <div>
          <s-text tone="subdued">Call Window</s-text>
          <input {...} />
        </div>
        <div>
          <s-text tone="subdued">Timezone</s-text>
          <select {...} />
        </div>
      </div>
    </s-stack>
  </s-box>
</s-section>
```

---

## ✨ Result

The Settings page now perfectly matches the **Dashboard** and **Bot Interactions** pages with:
- Consistent Polaris card styling
- Responsive grid layouts
- Professional Shopify aesthetic
- Clean, organized structure
- Easy to scan and use

